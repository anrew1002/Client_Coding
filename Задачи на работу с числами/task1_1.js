'use strict';
console.log("1_1 взаимно простые числа")
let result = prompt("введите исходные данные (два числа):");
let mas = result.split(" ");
console.log(mas);
let first_num_dels = [];
let second_num_dels = [];

for (let j = 2; j <= mas[0]; j++) {
    if (mas[0] % j === 0) {
        first_num_dels.push(j)
    }
}
for (let i = 2; i <= mas[1]; i++) {
    if (mas[1] % i === 0) {
        second_num_dels.push(i)
    }
}
let flag = true;
for (let del of first_num_dels) {
    if (second_num_dels.includes(del)) {
        flag = false;
    }
}
if (flag === true) {
    console.log("Числа взаимно простые");
} else {
    console.log("Числа НЕ взаимно простые");
}
// 
// 
// 
console.log("1_2 простота числа");

result = prompt("введите исходные данные (одно число):");
flag = true;
for (let i = 2; i <= Number(result) / 2 + 1; i++) {
    if (result % i === 0) {
        flag = false;
    }

}

if (flag === true) {
    console.log("Число простое");

} else {
    console.log("Число не простое");
}
// 
// 
// 
console.log("1_3 простые числа до N");

result = prompt("введите исходные данные (одно число):");

mas = [];
for (let i = 0; i <= result; i++) {
    mas.push(true);
}
// console.log(mas);

for (let i = 2; i ** 2 <= result; i++) {
    var k = 0;
    if (mas[i] === true) {
        while ((i ** 2 + k * i) <= result) {
            mas[(i ** 2 + k * i)] = false
            k++
            // console.log((i ** 2 + k * i))
        }
        // for (let j = i ** 2 + k * i; j <= result; k++) {
        //     mas[j] = false;
        // }
    }
}
for (let i = 2; i < mas.length; i++) {
    if (mas[i] === true) {
        console.log(i);
    }
}
// 
// 
// 
console.log("1_4 первые N простых чисел ");
result = prompt("введите исходные данные (одно число):");
mas = [];
let num = 2;
let is_simple;
while (mas.length < result) {
    is_simple = true
    for (let i = 2; i <= Number(num) / 2 + 1; i++) {
        if (num % i === 0) {
            is_simple = false;
            break;
        }
    }
    if (is_simple === true) {
        mas.push(num);
    }
    num++;
}
console.log(mas);
// 
// 
// 
console.log("1_5 все делители числа");
result = prompt("введите исходные данные (одно число):");
mas = []
for (let i = 1; i ** 2 <= Number(result); i++) {
    if (result % i === 0) {
        mas.push(i)
        mas.push(result / i)
    }
}
console.log()
// 
// 
// 
