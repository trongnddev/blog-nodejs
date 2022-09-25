class NewsController{
    index (req,res) {

        //[GET] /news
        res.render('news')

    }
    show(req,res) {
        res.send(req.slug)
    }
}

module.exports = new NewsController