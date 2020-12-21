const express = require('express')

const app = express()

app.set('secret', 'uajnf2if3jnkn')

app.use(require('cors')())
app.use(express.json())
app.use('/', express.static(__dirname + '/web'))   // 托管前端静态文件
app.use('/admin', express.static(__dirname + '/admin'))   // 托管后端后台静态文件
app.use('/uploads', express.static(__dirname + '/uploads')) // 托管上传文件夹为静态文件

require('./plugins/db')(app)
require('./routes/admin')(app)
require('./routes/web')(app)


app.listen(3000, () => {
  console.log('https://localhost:3000!')
})
