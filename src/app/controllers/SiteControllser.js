class NewsController{
    index (req,res) {

        //[GET] /
        res.render('home')

    }
    // [GET] '/search'
    search(req,res) {
        res.render('search')
    }
}

module.exports = new NewsController