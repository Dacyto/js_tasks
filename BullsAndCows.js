// задача 3 -- Игра "Быки и коровы" на javascript

function RND(a,b) {
    return Math.floor(Math.random()* (b-a+1) +a);
}

function Make() {  //загадывание числа

    var s= '';
    for (var i=0; i < genLength; i++) {
        do {
            var c = RND(0,9);
        }
        while(s.indexOf(c) >=0);
        s=s+c;
    }
    return s;
}

function Analize(maked,tried) { //сравнение числа с пользовательским

    bulls = 0;
    cows = 0;
    for (var i=0; i < genLength; i++) {
        if (maked[i] == tried[i]) 
            bulls++
            else if (maked.indexOf(tried[i]) >= 0) cows++; 
    }
}

var bulls, cows;
let attemptsCount = 10;     //число попыток у игрока
let genLength = RND(3,6);
var m=Make();
alert(m.length); //на старте игры комп подсказывает длину числа загаданного (опциональная фича)

for(var i=0; i< attemptsCount; i++) {

    var c=prompt("Введите число:");
    Analize(m, c);
    var s= c+ " " + bulls + "Б " + cows + "К";
    alert(s);
    // document.write(s+"<br>");
    if(c==m) {
        alert("Вы выиграли! :)");
        break;
    }
}
if (c!=m) {
    document.write("Вы проиграли :( " +"<br>");
}
document.write("Загаданное число: " +m);
