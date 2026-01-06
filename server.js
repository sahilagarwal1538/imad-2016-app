var express = require('express'); // abstracts away server creation like listening to the network, taking HTTPs connections etc.
var morgan = require('morgan'); // helps in displaying logs of the server (i.e., what requests are coming, what we are responding)
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one',function(req,res){
res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
});

app.get('/article-two',function(req,res){
res.send('Article 2 will be served shortly');
});

var counter=0; // starts from zero everytime the server is restarted
app.get('/counter',function(req,res){
counter=counter+1;
res.send(counter.toString());
})

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

var names = [];
app.get('/submit-name', function(req, res) { // URL example: /submit-name/?name=xxxx
	// Get the name from the request
	var name = req.query.name;
	names.push(name); // push the name to the array names
	res.send(JSON.stringify(names)); // names is a Javascript object, hence need JSON to convert it into string
})

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
