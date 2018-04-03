/**
 * Created by Tina on 10.3.2017..
 */
var number_attempts = 1;
var random_number = Math.floor((Math.random() * 100) + 1);
document.getElementById("att").innerHTML = "Your attempt " + number_attempts + ":";

function checkNumber() {
    var number = document.getElementById("num").value;
    document.getElementById("num").value = "";
    if (number_attempts <= 10) {
        if (number > 0 && number < 101) {
            var att = number_attempts + 1;
            document.getElementById("att").innerHTML = "Your attempt " + att + ":";
            if (random_number == number) {
                document.getElementById("image").src = "img/win.png";
                winLost(1);
            }
            else if(number_attempts == 10){
                document.getElementById("image").src = "img/lost.png";
                winLost(2);
            }
            else if (random_number < number) {
                document.getElementById("image").src = "img/bottom.png";
                document.getElementById("text").innerHTML = "Enter the smaller number!!";
                document.getElementById("text").style.color = "red";
                document.getElementById("num").style.borderColor = "black";
                document.getElementById("num").style.borderWidth = "1px";
            }
            else if (random_number > number) {
                document.getElementById("image").src = "img/top.png";
                document.getElementById("text").innerHTML = "Enter the larger number!!";
                document.getElementById("text").style.color = "green";
                document.getElementById("num").style.borderColor = "black";
                document.getElementById("num").style.borderWidth = "1px";
            }
            number_attempts++;
        }
        else {
            document.getElementById("num").style.border = "solid";
            document.getElementById("num").style.borderColor = "red";
            document.getElementById("text").innerHTML = "Try to guess a number between 1 and 100!!!!";
            document.getElementById("text").style.color = "red";
        }
    }
}

function del() {
    document.getElementById("image").src = "img/gmn.png";
    document.getElementById("num").style.border = "solid";
    document.getElementById("num").style.borderColor = "black";
    document.getElementById("num").style.borderWidth = "1px";
    document.getElementById("text").innerHTML = "";
}

function winLost(number) {
    var num = number;
    document.getElementById("text").innerHTML = "";
    if (num == 1) {
        document.getElementById("win-lost").style.display = "none";
        document.getElementById("wl").style.display = "block";
    }
    else if (num == 2) {
        document.getElementById("win-lost").style.display = "none";
        document.getElementById("wl").style.display = "block";
        document.getElementById("winlostp").innerHTML = "Numer is " + random_number + "!!!";
    }
}

function start() {
    window.location.href = "http://guessmynumber123456789.net23.net/";
}