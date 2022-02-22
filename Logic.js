//function that generates the random quote
function callApi(){
var randomNum = Math.floor(Math.random() * 1000);
document.getElementById("quote").innerHTML = `<h1>Loading...</h1>`;
fetch("https://goquotes-api.herokuapp.com/api/v1/all/quotes")
    .then(response => response.json())
    .then(json => {
        console.log(json);
        document.getElementById("quote").innerHTML = `
            <h6>Quote</h6>
            <p>`+ json.quotes[randomNum].text +`</p>
            <hr/>
            <p>Author: `+json.quotes[randomNum].author+`</p>`; 
    })
}