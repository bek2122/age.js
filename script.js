var age = prompt ('введите свой возраст');
Number(age);
if( age >= 0 && age <= 18) {
    alert('Вы еще молоды.Вам надо учится!');
}else if (age > 18 && age <= 50) {
    alert('Вам надо работать!');
}else if (age > 50 && age <= 59) {
    alert('Вам скоро на пенсию');
}else if (age > 59 && age <= 150) {
    alert('Вы пенсионер');
}else {
    alert('Что-то пошло не так');
}