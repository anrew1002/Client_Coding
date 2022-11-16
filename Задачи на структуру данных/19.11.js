'use strict'
//2.1 Task
console.log("№" + 2.1);
(function (text) {
    let input_text = text.split('-');
    for (let i = 1; i < input_text.length; i++) {
        input_text[i] = input_text[i].at(0).toUpperCase() + input_text[i].slice(1)
    }
    console.log(input_text.join(""))
})("background-color-svg");


//2.2 Task
console.log("\n" + "№" + 2.2);
(function (mac) {
    let mac1 = mac.slice();
    let mac2 = Array.from(mac);

    function sort1(mac1) {
        for (let i = 0; i < mac1.length; i++) {
            mac1.push(mac1.shift())
        }
        return mac1;
    }

    mac1, mac2 = sort1(mac1), mac2.reverse();
    console.log("1 массив: " + mac + "\n" + "2 массив: " + mac1 + "\n" + "3 массив: " + mac2);
})([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);


//2.3 Task
console.log("\n" + "№" + 2.3);
(function () {
    let translator = {
        GR: { привет: "Hallo", пока: "Tschüss", генератор: "Generator", бабушка: "Oma" },
        EN: { привет: "Hello", пока: "Bie", генератор: "Generator", бабушка: "grandmother" },


    }
    let str = "привет"
    console.log(translator["GR"][str.toLowerCase()])
})()



//2.4 Task
console.log("\n" + "№" + 2.4);
console.log(function week() {
    let days = {
        0: "Воскресенье",
        1: "Понедельник",
        2: "Вторник",
        3: "Среда",
        4: "Четверг",
        5: "Пятница",
        6: "Суббота"
    }
    let day = new Date();
    return days[day.getDay()];

}())



//2.5 Task
console.log("\n" + "№" + 2.5);
(function () {
    let staff1 = {
        "Диктор": "Аска",
        "Тележурналист": "Рей",
        "Геолог": "Синдзи",
        "Ботаник": "Мисато",
        "Монтажник": "Гэндон",
    };
    let staff2 = Object.assign({}, staff1);
    let count = 0;
    let name = ["Ася", "Олег", "Серега", "Миша", "Никодим"];
    for (let key in staff2) {
        staff2[key] = name[count];
        count++;
    }

    for (let key in staff1) {
        console.log(key + " " + staff1[key])
    }
    console.log("")
    for (let key in staff2) {
        console.log(key + " " + staff2[key])
    }
})()

//2.6 Task

console.log("\n" + "№" + 2.6);
(function () {
    let days = {
        0: "Воскресенье",
        1: "Понедельник",
        2: "Вторник",
        3: "Среда",
        4: "Четверг",
        5: "Пятница",
        6: "Суббота",
    }
    let short_week = "вс,пн,вт,ср,чт,пт,сб";
    short_week = short_week.split(",")
    for (let i = 0; i < short_week.length; i++) {
        days[i + 10] = short_week[i];
    }
    let day = new Date();
    console.log(days[day.getDay() + 10]);
})();

//2.7 Task
console.log("\n" + "№" + 2.7);
(function () {
    let things = {
        titles: "Вычислительные системы и компьютерные сети,Операционные системы, Мультимедиа технологии и анимация",
    };
    let add = function (new_title) {
        things.titles = things.titles.split(",");
        if (things.titles.indexOf(new_title) !== -1) {
            things.titles.splice(things.titles.indexOf(new_title), 1);
        }
        else { things.titles.push(new_title) };
        things.titles = things.titles.join(",");
    };
    add("Философия");
    add("Операционные системы");
    console.log(things.titles);
})();


for (var i = 0; i < 10; i++) { }
alert(i);

