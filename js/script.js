/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
//create 4 objects in an array
let quotes = [
//some objects have no citations or years while some do
  {
    //a JFK quote
    "quote": "If not us, who? If not now, when?",
    "source": "John F. Kennedy",
    "citation": null,
    "year": null
  },
  {
    //another JFK quote
    "quote": "Ask not what your country can do for you, but what you can do for your country.",
    "source": "John F. Kennedy",
    "citation": "inagural speech",
    "year": 1961
  },
  {
    //a FDR quote
    "quote": "When you reach the end of your rope, tie a knot in it and hang on.",
    "source": "Franklin D. Roosevelt",
    "citation": null,
    "year": null
  },
  {//a movie quote
    "quote": "Frankly, my dear, I don't give a damn.",
    "source": "Rhett Butler",
    "citation": "movie: Gone with the Wind",
    "year": 1939
  },
  {//another movie quote
    "quote": "Toto, I've a feeling we're not in Kansas anymore.",
    "source": "Dorothy States",
    "citation": "movie: The Wizard of Oz",
    "year": 1939
  }
]
//console.log(quotes[1].quote);
//console.log(quotes.length);


/***
 * `getRandomQuote` function
***/
function getRandomQuote(){
  //use the math method to generate a random number between 0 -4 for index
  var randomNumber = Math.floor(Math.random()* quotes.length);
  //testing with console.log and return a quote object with a random index generated above
  //console.log(randomNumber);
  return quotes[randomNumber];
}

//getRandomQuote();

/***
 * `printQuote` function
***/

//create a new function
function printQuote(){
  //create a new variable that gets a random quote object
  var quote = getRandomQuote();
  //create another variable to store the string we need for the html file
  let htmlstring = `<p class="quote"> ${quote.quote}</p>
<p class="source"> ${quote.source} `;

  //now we get into all the if conditions
  if(quote.citation){
    htmlstring+=`<span class="citation"> ${quote.citation} </span>`;
  }
  if (quote.year){
    htmlstring+=`<span class="year"> ${quote.year} </span>`;
  }
  //now we concatinate the closing tag
  htmlstring+="</p>";
  //console.log(htmlstring);
  //using this line of code to return the html string
  document.getElementById('quote-box').innerHTML = htmlstring; 

}
//onsole.log(printQuote());



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);