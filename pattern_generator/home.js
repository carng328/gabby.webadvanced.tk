    console.log("%cHAPPY FALL", "color:orange;");

// setTimeout(function(){
// }, 1000);


var timer = 0;
var counter = 0;

for (var i = 0; i < 50; i++) {
    setTimeout(function() {
        var leaves = "";
        for (var s = 0; s < 40; s++) {
            if (Math.random()*100 < 20) {
                leaves += "🍂";
            } else {
                leaves += " ";
            }
    
        }
        console.log (leaves);
    }, timer);
    timer += 100;
    counter++;
}

