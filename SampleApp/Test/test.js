var request = require('supertest');
var app = require('../app.js');


describe('GET /', function() {
	it('respond with hello world', function (done) {
		
		//navigate to root
		request(app).get('/').expect('Hello World !', done);
	});	
});