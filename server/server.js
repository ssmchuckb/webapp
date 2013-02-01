(function () {
    "use strict";

    var connect = require('connect') // node_modules
	, app = connect.createServer()
	;

    if (!connect.router) {
	connect.router = require('connect_router');
    }

    function routes(route) {
	route.get('/test', function (request, response) {
	    response.write('I GET that you GET me');
	    response.end();
	});
	route.post('/test', function (request, response) {
	    response.write("POST doesn't mean Power On Self Test here...");
	    response.end();
	});
    }

    app.use(connect.router(routes));

    function run() {
	var port = process.argv[2] || 3000
	, server
	;

	server = app.listen(port, function () {
	    console.log('Running at ', server.address());
	});
    }

    if (require.main === module) {
	run();
    }

    module.exports = app;
}());
