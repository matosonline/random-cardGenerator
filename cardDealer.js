
var suit =   ["♦","♠","♥","♣"];
var value   =   ["A","K","Q","J","10","9","8","7","6","5","4","3","2","1"];

var randomvalue = Math.floor(Math.random() * value.length);
var randomsuit = Math.floor(Math.random() * suit.length);

document.getElementById("topSuit").innerHTML = suit[randomsuit];
document.getElementById("value").innerHTML = value[randomvalue];
document.getElementById("btmSuit").innerHTML = suit[randomsuit];


    if (suit[randomsuit] == "♦") {
        document.getElementById("topSuit").style.color = "red";
    }
        if (suit[randomsuit] == "♦") { 
            document.getElementById("btmSuit").style.color = "red";
        }
            if (suit[randomsuit] == "♥") { 
                document.getElementById("topSuit").style.color = "red";
            }
                if (suit[randomsuit] == "♥") { 
                    document.getElementById("btmSuit").style.color = "red";
                }   