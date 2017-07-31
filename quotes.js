
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
 function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

 function scrollWin(num) {
     window.scrollTo (0,num);
 }

 var TxtRotate = function(el, toRotate, period) {
   this.toRotate = toRotate;
   this.el = el;
   this.loopNum = 0;
  this.j = 0;
     this.isDeleting = false;
   this.period = parseInt(period, 10) || 1000;
   this.txt = '';
   this.tick();
 };
 
 TxtRotate.prototype.tick = function() {
   var i = this.loopNum % this.toRotate.length;
  this.toRotate = quotes[this.j];
   var fullTxt = this.toRotate;
 
   if (this.isDeleting) {
     this.txt = fullTxt.substring(0, this.txt.length - 1);
   } else {
     this.txt = fullTxt.substring(0, this.txt.length + 1);
   }
 
    this.el.innerHTML = '<span class="wrap"> '+this.txt+'</span>';
  
    var that = this;
    var delta = 100;
  
    if (this.isDeleting) { delta /= 2; }

  
   if (!this.isDeleting && this.txt === fullTxt && this.fullpause == false) {
     delta = 50;
    this.isDeleting = true;

   } else if (this.isDeleting && this.txt === '') {
     this.isDeleting = false;
     this.loopNum++;
     delta = 100;
    if (this.j == 9) {
     this.j = 0;
    }
    else {
     this.j++;
    }
   }
 
   setTimeout(function() {
     that.tick();
   }, delta);
 };
 
 function getQuote() {
this.j = 0;
   var elements = document.getElementsByClassName('txt-rotate');
     var toRotate = elements[0].getAttribute('data-rotate');
     var period = elements[0].getAttribute('data-period');
   for (var i=0; i<10; i++) {
     if (toRotate) {
             new TxtRotate(elements[0], quotes[this.j], period);
     }
   }
   // INJECT CSS
   var css = document.createElement("style");
   css.type = "text/css";
   css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
   document.body.appendChild(css);
 }
