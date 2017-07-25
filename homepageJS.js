var quotes = [
    "You don't have to eat less; you just have to eat right",
    "The best time to plant a tree was 20 years ago; the second best time is now",
    "You are what you eat--so don't be Cheap, Easy or Fake",
    "Healthy isn't a goal, it's a way of life",
    "When you feel like quitting, ask yourself why you started",
    "Failure is the only opportunity to begin again, only this time wisely",
    "The difference between try and triumph is just a little umph",
    "Today just get up and go, because yesterday, you said tomorrow",
    "Your body keeps and accurate journal regardless of what you write down",
    "It's not about being the best, it's about being better than you were yesterday"
];

function getQuote() {
    var chosenQuote = quotes[Math.floor(Math.random()*quotes.length)];
    document.getElementById("quote").innerHTML = chosenQuote;
}

function scrollWin() {
    window.scrollTo (0,1000);
}
