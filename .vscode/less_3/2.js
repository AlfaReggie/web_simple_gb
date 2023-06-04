/*2. Необходимо создать html-страницу с названием 2.html, в которой подключить файл 2.js
 (его тоже необходимо создать рядом с html-файлом). В js-файле необходимо создать следующий скрипт:

Cоздать функцию greeting, которая принимает в качестве аргумента имя человека и выводит приветствие,
 используя переданное ей имя, в консоль.

Необходимо у пользователя запросить имя и вызвать функцию greeting,
 передав туда полученное от пользователя значение. */



let user_name = prompt("Enter your name: ")
let today = new Date();
let now = today.getHours();

greeting(user_name, now);

function greeting(name, time) {

    let res = ''

    if ((Number.parseInt(time) > 4) && (Number.parseInt(time) < 10)) {
        res += name + ", Good morning!"
    } else if (Number.parseInt(time) < 18) {
        res += name + ", Hello!"
    } else {
        res += name + ", Good evening!"
    }
    console.log(res);
}    