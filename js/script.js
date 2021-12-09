'use strict';

var surName;

do {
    surName = prompt('Введите фамилию','Иванов');
} while (!surName);

var firstName;

do {
    firstName = prompt('Введите имя','Евгений');
} while (!firstName);

var lastName;

do {
    lastName = prompt('Введите отчество','Иванович');
} while (!lastName);

var age;

do {
    age = +prompt('Введите Ваш возраст в годах', '');
} while (!age || age < 0 || age > 130);

var ageDays = age * 365;

var ageAdd = age + 5;

var male = confirm('Ваш пол - мужской?') ? 'мужской' : 'женский';

var pension = (age > 65 && male == 'мужской') || (age > 60 && male == 'женский') ? 'да' : 'нет';


alert('ваше ФИО: ' + surName + ' ' + firstName + ' ' +lastName+'\nваш возраст в годах: ' + age + '\nваш возраст в днях: ' + ageDays + '\nчерез пять лет вам будет: ' + ageAdd + '\nваш пол: ' + male + '\nвы на пенсии: ' + pension);




