var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    bodyParser = require('body-parser');

app.use(require('xml-express-middleware').xml({ rootXmlKeys: 'user' }));

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var cors = require('cors');
app.use(cors());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, Accept, Content-Type, X-Requested-With");
    next();
});

app.listen(port);
var routing = require('./routes/routes');
routing(app);
console.log(`JSON x XML on port ${port}`);