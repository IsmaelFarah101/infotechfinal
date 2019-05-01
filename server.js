let express = require('express')
let path = require('path')

let app = express()

app.use(express.static(path.join(__dirname, 'helpmate', 'dist')))

let server = app.listen(process.env.PORT || 3000, function(){
    console.log('app running on port', server.address().port())
})