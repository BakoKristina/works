// 1. Создать переменную “item_1”
let item_1;
// 2. Присвоить переменной item_1 цифру 5.
item_1 = 5;
// 3. Вывести в консоль item_1.
console.log(item_1)
// 4. Создать переменную “item_2”
let item_2;
// 5. Присвоить переменной item_2 цифру 3.
item_2 = 3;
// 6. Вывести в консоль item_2.
console.log(item_2);
//7. Создать переменную “item_3”
let item_3;
//8. Присвоить переменной item_3 сложение item_1 и item_2.
item_3 = item_1 + item_2;
//9. Вывести в консоль item_3.
console.log(item_3)
//10. Создать переменную “item_4”
let item_4;
//11. Присвоить переменной item_4 строку “Yolochka”
item_4 = "Yolochka";
//12. Вывести в консоль item_4.
console.log(item_4);
//13. Вывести в консоль сложение item_3 и item_4.
console.log(item_3 + item_4);
//14. Вывести в консоль умножение item_3 и item_4.
console.log(item_3 * item_4);
//15. Создать переменную “item_5”
let item_5;
//16. Присвоить переменной item_5 переменную item_3
item_5 = item_3;
console.log(item_5);
//17. Создать переменную item_6.
let item_6;
//18. Создать переменную item_6_type
let item_6_type;
//19. Присвоить переменной item_6 значение 15
item_6 = 15;
console.log(item_6);
//20. Присвоить переменной item_6_type тип переменной item_6
item_6_type = typeof (item_6);
console.log(item_6_type);
//21. Вывести в консоль тип данных item_6 в виде ——  “item_6 == ”  item_6,  “item_6_type == ”  item_6_type ——
console.log("item_6 == " + item_6 + " item_6_type == " + item_6_type);
//22. Создать переменную item_7 и в ней преобразовать item_6 в String.
let item_7 = String(item_6);
console.log(item_7);
//23. Создать переменную item_7_type
let item_7_type;
//24. Присвоить переменной item_7_type тип переменной item_7
item_7_type = typeof (item_7);
console.log(item_7_type);
//25. Вывести в консоль тип данных item_7 в виде ——  “item_7 == ”  item_7,  “item_7_type == ”  item_7_type ——  
console.log("item_7 ==", item_7, "item_7_type ==", item_7_type);
//26. Создать переменную “age_1” и присвоить ей значение 10
//27. Создать переменную “age_2” и присвоить ей значение 18
//28. Создать переменную “age_3” и присвоить ей значение 60
let age_1 = 10,
    age_2 = 18,
    age_3 = 60;
//29. Создать if в котором будете проверять значение переменной age_1
//30. Если age_1 < age_2, вывести в консоль “You don’t have access cause your age is ” + age_1 + “ It’s less then ”
//31. Если age_1 >=  age_2 и age_1 <  age_3, вывести в консоль “Welcome  !”
//32. Если age_1  > age_3, вывести в консоль “Keep calm and look Culture channel”.
//33. Иначе выводите “Technical work”.
let first = age_1 < age_2,
    second = age_1 >= age_2 && age_1 < age_3,
    third = age_1 > age_3;
if (first) {
    console.log("You do not have access cause your age is " + age_1 + " It is less then 18")
} else if (second) {
    console.log("Welcome !")
} else if (third) {
    console.log("Keep calm and look Culture channel")
} else {
    console.log("Technical work")
}


//1*:
//Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст.
//Пример: const checkAge = function(age) {
//Ваши преобразования
//}
//Вывести в консоль результат работы функции с возрастами 17, 18, 61

function test_age(vozrast) {
    if (vozrast < 18) {
        console.log("Rezultat test_age: You do not have access cause your age is " + vozrast + " It is less then 18")
    } else if (vozrast >= 18 && vozrast < 60) {
        console.log("Rezultat test_age: Welcome !")
    } else if (vozrast > 60) {
        console.log("Rezultat test_age: Keep calm and look Culture channel")
    } else {
        console.log("Rezultat test_age: Technical work")
    }
};
test_age(17);
test_age(18);
test_age(61);


//2*:
//Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. И если он не Number - кидалась ошибка.

function tip_dannih(chislo) {
    if (chislo < 18 && typeof chislo == "number") {
        console.log("Rezultat tip_dannih: You do not have access cause your age is " + chislo + " It is less then 18")
    } else if (chislo >= 18 && chislo < 60 && typeof chislo == "number") {
        console.log("Rezultat tip_dannih: Welcome !")
    } else if (chislo > 60 && typeof chislo == "number") {
        console.log("Rezultat tip_dannih: Keep calm and look Culture channel")
    } else if (typeof chislo == "string") {
        console.log("Rezultat tip_dannih: Error")
    }
};
tip_dannih(17);
tip_dannih(61);
tip_dannih("abra")



//3**:
//Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number

function stroka(x) {
    if (x < 18 && x == String(x)) {
        console.log("Rezultat stroka: You do not have access cause your age is " + x + " It is less then 18")
    } else if (x >= 18 && x < 60 && x == String(x)) {
        console.log("Rezultat stroka: Welcome !")
    } else if (x > 60 && x == String(x)) {
        console.log("Rezultat stroka: Keep calm and look Culture channel")
    } else {
        console.log("Rezultat stroka: Technical work")
    }
}
stroka("2")




