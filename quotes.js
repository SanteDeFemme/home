
    var text = ["1", "2", "3", "4", "5", "6"];
    var counter = 6;
    var elem = document.getElementById("quote");
    setInterval(change, 1000);

    function change() {
     elem.innerHTML = text[counter];
        counter++;
        if(counter >= text.length) { counter = 5; }
    }
