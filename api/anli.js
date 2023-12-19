data = {
    "qwq":"qwq1"
}

module.exports = (req, res) => {
    var urlp = url.parse(req.url,true)
    var query = urlp.query
    res.json(query)
}