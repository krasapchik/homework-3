
var p = 0;
var num = 0;
do{
    p = num + p
    num = +prompt('Введите отрицательное число: ');
    
}while ( num > 0 ) 
console.log('Сумма введенных положительных чисел' + p );
