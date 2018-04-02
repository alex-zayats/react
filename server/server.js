const express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	mongo = require('./mongoConnector');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  next();
});

function errorHandler(err) {
	res.send('Something went wrong, sorry');
	console.log(err);
	return false;
}

app.get('/articles', (req, res) => {
	mongo.ArticleModel.find({}, null, { limit: 20, skip: +req.query.offset })
		.then(result => res.send(result))
		.catch(err => errorHandler(err));
	}
);

app.get('/articles/:id', (req, res) => {
	mongo.ArticleModel.findById({ '_id': req.params.id })
		.then(result => res.send(result))
		.catch(err => errorHandler(err));
	}
);

app.post('/articles', (req, res) => {
	const { title, content, source, author } = req.body;
	const article = new mongo.ArticleModel({ title, content, source, author });
	article.save()
		.then(result => res.send('Article added sucessfully'))
		.catch(err => errorHandler(err));
	}
);

app.put('/articles/:id', (req, res) => {
	mongo.ArticleModel.update({ '_id': req.params.id }, { $set: req.body})
		.then(result => res.send('Article updated sucessfully'))
		.catch(err => errorHandler(err));
	}
);

app.delete('/articles/:id', (req, res) => {
	mongo.ArticleModel.remove({ '_id': req.params.id })
		.then(result => res.send('Article deleted sucessfully'))
		.catch(err => errorHandler(err));
	}
);

app.post('/users', (req, res) => {
	const { login, password } = req.body;
	const user = new mongo.UserModel({ login, password });
	user.save()
		.then(result => res.send('User added sucessfully'))
		.catch(err => errorHandler(err));
	}
);

app.get('/users', (req, res) => {
	const { login, password } = req.query;
	mongo.UserModel.find({login: login, password: password}, null, { limit: 1 })
		.then(result => res.send(result.length > 0))
		.catch(err => errorHandler(err));
	}
);

app.all('*', function(req, res) {
	res.status(404).type('txt').send('Sorry, page not found');
});

const server = app.listen(8080, '127.0.0.1', function () {
  const host = server.address().address;
  const port = server.address().port;
  console.log("App listening at %s:%s", host, port);
});