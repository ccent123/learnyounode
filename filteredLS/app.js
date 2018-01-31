var fs = require("fs");
var dirArg = process.argv[2];
//opens opens directory
fs.readdir(dirArg,function(err,data){
	//returns error if directory cannot be found or opened
	if(err){return console.error(err);}
	//for loop to iterate through objects
	for(let i = 0; i < data.length; i++){
	//checks if filteredLS contains file extension
	let filteredLS = data[i];
	let found = filteredLS.includes("." + process.argv[3]);
	if(found==true){console.log(filteredLS)}
	}
})
