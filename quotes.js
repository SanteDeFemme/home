 <div id="changeText" ></div>
    <script type="text/javascript">
    var text = ["You don't have to eat less; you just have to eat right", "The best time to plant a tree was 20 years ago; the second best time is now", "You are what you eat--so don't be Cheap, Easy or Fake", "Healthy isn't a goal, it's a way of life", "When you feel like quitting, ask yourself why you started", "Failure is the only opportunity to begin again, only this time wisely", "The difference between try and triumph is just a little umph", "Today just get up and go, because yesterday, you said tomorrow", "Your body keeps and accurate journal regardless of what you write down", "It's not about being the best, it's about being better than you were yesterday"];
    var counter = 0;
    var elem = document.getElementById("changeText");
    setInterval(change, 1000);
    function change() {
     elem.innerHTML = text[counter];
        counter++;
        if(counter >= text.length) { counter = 0; }
    }
    </script>
