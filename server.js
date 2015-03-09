var express = require('express'), // bring in the the express api
	fs = require('fs'), // bring in the file system api
	mustache = require('mustache'), // bring in mustache template engine
	app = express.createServer(), // create the http server w/express
	demoData = [{ // dummy data to display
		"name":"Steve Balmer",
		"company": "Microsoft",
			"systems": [{
				"os":"Windows XP"
				},{
				"os":"Vista"
				},{
				"os":"Windows 7"
				},{
				"os":"Windows 8"
			}]
				
		},{
 		"name":"Steve Jobs",
		"company": "Apple",
			"systems": [{
				"os":"OSX Lion"
				},{
				"os":"OSX Leopard"
				},{
				"os":"IOS"
			}]
		},{	
		"name":"Mark Z.",
		"company": "Facebook"
	}];
 
 
app.get('/app/:slug', function(req, res){ // get the url and slug info
   
	var slug =[req.params.slug][0]; // grab the page slug
	var rData = {records:demoData}; // wrap the data in a global object... (mongo fix)
			
	var page = fs.readFileSync(slug, "utf8"); // bring in the HTML file
	var html = mustache.to_html(page, rData); // replace all of the data
	
	res.send(html); // send to client
});

app.listen(3000);// start the server listening
console.log('Server running at http://127.0.0.1:3000/'); // server start up message
