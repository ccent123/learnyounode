var fs = require("fs");
fs.readFile(process.argv[2],'utf-8', function(err,data){
	if(err){
	return console.log(err);
	}
	var output = data.split("\n").length -1;
	console.log(output);
});
