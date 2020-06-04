
var express = require('express')

 , app = express()
 , accepts = require('accepts')

app.enable('trust proxy')



app.get('*', function (req, res) {

    var lang = accepts(req).languages()[0]

    var os = req.headers['user-agent'].toString()

    os = os.substr(os.indexOf('(')+1,os.indexOf(')') - os.indexOf('(') -1)

    var resp = {ip: req.ip, language: lang, operating_system: os }

    console.log(resp)

    res.end(JSON.stringify(resp))

})



app.listen(8080, function () {

  console.log('App listening on port 8080!')

})

