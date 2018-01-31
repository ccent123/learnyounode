var fs = require("fs");
module.exports = function(dirArg,filter){

	fs.readdir(dirArg,function(err,data){
		if(err){return console.error(err);}
		//iterates thru dirArg 
		for(let i = 0; i < data.length; i++){
			let filteredLS = data[i];
			//checks if string has . + file ext
			let found = filteredLS.includes("." + filter);

			if(found==true){console.log(filteredLS)}
		}
})}

