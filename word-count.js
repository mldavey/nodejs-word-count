//Load Modules
var fs = require('fs'); //file system module

//Begin Script
process.stdout.write("\nRetrieving the file full_text.txt...\n\n");
fs.readFile('full_text.txt', function (err, inputText) {

	if (err) throw err;

	//inputText is a buffer
	var text = inputText.toString();

	process.stdout.write("I have the file.  Now for the word count:\n\n");

	//Replace line breaks with spaces so characters separated by line breaks will be counted as separate words
	var replacedText = text.replace(/(\r\n|\n|\r)/g, " ");

	//Split the string on spaces, validate, and count
	var splitText = replacedText.split(" ");

	var i = 0;
	var totalWords = [];

	while(i < splitText.length) {

		var item = splitText[i];
		item.trim();

		var matchText = item.match(/[A-Za-z0-9]/g);

		if(matchText !== "" && matchText !== null) {
			totalWords.push(matchText);
		}

		i++;
	}

	process.stdout.write("I found " + totalWords.length + " words.\n\n");
});