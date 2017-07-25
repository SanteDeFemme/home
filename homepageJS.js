var quotes = [
    "You don't have to eat less; you just have to eat right.",
    "The best time to plant a tree was 20 years ago; the second best time is now.",
    "You are what you eat--so don't be Cheap, Easy or Fake."
];

function getQuote() {
    var chosenQuote = quotes[Math.floor(Math.random()*quotes.length)];
    document.getElementById("quote").innerHTML = chosenQuote;
}
