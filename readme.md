# Node.js Word Count
By: Maureen Davey

This is a node.js script that will return the word count of the file full_text.txt via the command line.

This script is open source, please re-use/modify this script to meet your needs.

Tested with Node.js v4.5.0.


## Installation Instructions

* Install Node.js if not yet installed (https://nodejs.org/)
* Download this script
* Add text that needs a word count into the included 'full_text.txt' file
* Run the script from the command line:
`node word-count`


## Notes

* Non-alphanumeric characters separated by punctuation without a space will be treated as one word. For example, the text 'Hello...how are you?' will be treated as three words.  'Half-price' will be treated as one word.
* If a single word is separated by a line-break, it will be treated as two words.


## To Do

* Allow the user to input a new file path on the fly, so it can be something other than full_text.txt
* Get word count from multiple files if desired
* Display results via web server
* Launch a web server that allows the user to copy/paste text into the browser and get an updated word count as that text changes
