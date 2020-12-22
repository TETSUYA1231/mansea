module.exports = app => {
  const express = require('express')
  const jwt = require('jsonwebtoken')
  const assert = require('http-assert')
  const AdminUser = require('../../models/AdminUser')
  const router = express.Router({
    // 	合并url参数
    mergeParams: true,
  })

  // 创建资源
  router.post('/', async (req, res) => {
    const model = await req.Model.create(req.body)
    res.send(model)
  })

  // 更新资源
  router.put('/:id', async (req, res) => {
    const model = await req.Model.findByIdAndUpdate(req.params.id, req.body)
    res.send(model)
  })

  // 删除资源
  router.delete('/:id', async (req, res) => {
    const model = await req.Model.findByIdAndDelete(req.params.id)
    res.send({
      success: true,
    })
  })

  // 资源列表
  router.get('/', async (req, res) => {
    const queryOptions = {}
    // // 如果查询的是分类的话，就关联查询获得数据
    if (req.Model.modelName === 'Article') {
      queryOptions.populate = 'subcateId'
    }
    const items = await req.Model.find().setOptions(queryOptions)
    res.send(items)
  })

  // 资源详情
  router.get('/:id', async (req, res) => {
    const queryOptions = {}
    if (req.Model.modelName === 'Article') {
      queryOptions.populate = 'subcateId'
    }
    const model = await req.Model.findById(req.params.id).setOptions(queryOptions)
    res.send(model)
  })

  // 引入封装后的登录校验和资源获取的中间件
  const authMiddleware = require('../../middleware/auth')
  const resourceMiddlewate = require('../../middleware/resource')
  app.use('/admin/api/rest/:resource', authMiddleware(), resourceMiddlewate(), router)

  // 上传图片
  const multer = require('multer')
  const upload = multer({ dest: __dirname + '/../../uploads' })
  app.post('/admin/api/upload', authMiddleware(), upload.single('file'), async (req, res) => {
    const file = req.file
    // file.url = `http://localhost:3000/uploads/${file.filename}`
    file.url = `http://test.tetsuya.life/uploads/${file.filename}`
    res.send(file)
  })

  // 登录
  app.post('/admin/api/login', async (req, res) => {
    const { username, password } = req.body
    // 根据用户名查找用户
    const user = await AdminUser.findOne({ username }).select('+password')
    assert(user, 422, '用户不存在') // 	使用assert简化方法
    // if (!user) {
    // 	return res.status(422).send({
    // 		message: '用户不存在',
    // 	})
    // }
    // 校验密码
    const isValid = require('bcrypt').compareSync(password, user.password)
    assert(isValid, 422, '密码错误')
    // if (!isValid) {
    // 	return res.status(422).send({
    // 		message: '密码错误',
    // 	})
    // }
    // 返回token
    const token = jwt.sign({ id: user._id }, app.get('secret'))
    res.send({ token })
  })

  // express错误处理函数
  app.use(async (err, req, res, next) => {
    res.status(err.statusCode || 500).send({
      message: err.message,
    })
  })
}
