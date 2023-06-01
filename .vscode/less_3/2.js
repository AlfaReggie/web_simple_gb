/*2. Необходимо создать html-страницу с названием 2.html, в которой подключить файл 2.js
 (его тоже необходимо создать рядом с html-файлом). В js-файле необходимо создать следующий скрипт:

Cоздать функцию greeting, которая принимает в качестве аргумента имя человека и выводит приветствие,
 используя переданное ей имя, в консоль.

Необходимо у пользователя запросить имя и вызвать функцию greeting,
 передав туда полученное от пользователя значение. */



var user_name = prompt("Enter your name: ")
var today = new Date();
var now = today.getHours();

alert(greeting(user_name, now))


 function greeting(name, time) {

    var res = ''

    if ((Number.parseInt(time) > 4) && (Number.parseInt(time) < 10)) {
        res += name + ", Good morning!"
    }
    else if (Number.parseInt(time) < 18) {
        res += name + ", Hello!"
    }
    else {
        res += name + ", Good evening!"
    }
    return res;
 }    