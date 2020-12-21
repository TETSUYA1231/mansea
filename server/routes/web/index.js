const Category = require('../../models/Category')

module.exports = app => {
  const router = require('express').Router()
  const mongoose = require('mongoose')
  const Subcate = mongoose.model('Subcate')
  const Category = mongoose.model('Category')
  const Card = mongoose.model('Card')
  const Article = mongoose.model('Article')
  const Ad = mongoose.model('Ad')

  // 最新文章列表，取前3篇
  router.get('/news/list', async (req, res) => {
    const news = await Article.find().sort({ _id: -1 }).limit(3)
    res.send(news)
  })

  // 文章列表
  router.get('/articles/list', async (req, res) => {
    const arts = await Article.find()
    res.send(arts)
  })

  // 资讯动态文章列表,最新文章在前
  router.get('/events/list', async (req, res) => {
    const data = await Article.find().sort({ _id: -1 })
    res.send(data)
  })

  // 卡片列表
  router.get('/cards/list', async (req, res) => {
    const data = await Card.find()
    res.send(data)
  })

  // 文章详情
  router.get('/articles/:id', async (req, res) => {
    const data = await Article.findById(req.params.id).lean()
    res.send(data)
  })

  // banner列表
  router.get('/ads/list', async (req, res) => {
    const data = await Ad.find()
    res.send(data)
  })

  // 关于我们文章
  router.get('/about/list', async (req, res) => {
    const parent = await Subcate.aggregate([
      { $match: { subname: '关于我们' } },
      {
        $lookup: {
          from: 'articles',
          localField: '_id',
          foreignField: 'subcateId',
          as: 'content'
        }
      },
      { $project: { content: 1 } }
    ])
    res.send(parent)
  })

  // 工作机会文章
  router.get('/work/list', async (req, res) => {
    const parent = await Subcate.aggregate([
      { $match: { subname: '工作机会' } },
      {
        $lookup: {
          from: 'articles',
          localField: '_id',
          foreignField: 'subcateId',
          as: 'content'
        }
      },
      { $project: { content: 1 } }
    ])
    res.send(parent)
  })

  // 联系我们文章
  router.get('/contact/list', async (req, res) => {
    const parent = await Subcate.aggregate([
      { $match: { subname: '联系我们' } },
      {
        $lookup: {
          from: 'articles',
          localField: '_id',
          foreignField: 'subcateId',
          as: 'content'
        }
      },
      { $project: { content: 1 } }
    ])
    res.send(parent)
  })

  app.use('/web/api', router)
}