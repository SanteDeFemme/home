
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

// function getQuote() {
//   var chosenQuote = quotes[Math.floor(Math.random()*quotes.length)];
//     document.getElementById("quote").innerHTML = chosenQuote;
//     setTimeout(getQuote, 5000);
// }


function scrollWin(num) {
    window.scrollTo (0,num);
}

var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
    this.isDeleting = false;
  this.period = parseInt(period, 10) || 1000;
  this.txt = '';
  this.tick();
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate;

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

function getQuote(){
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
        for (var j=0; j<quotes.length; j++) {
            new TxtRotate(elements[i], quotes[j], period);
        }
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
}
