// Задача 1.
// Условие задачи:

// В данном тексте изменить наименование дней недели на английский вариант. Например, строка "Старший братец ПОНЕДЕЛЬНИК ..." будет преобразована в "Старший братец MONDAY..."

let str = `Старший братец ПОНЕДЕЛЬНИК –
работяга, не бездельник.
Он неделю открывает
всех трудиться зазывает.

ВТОРНИК следует за братом
у него идей богато.

А потом СРЕДА-сестрица,
не пристало ей лениться.

Брат ЧЕТВЕРГ и так, и сяк,
он мечтательный чудак.

ПЯТНИЦА-сестра сумела
побыстрей закончить дело.

Предпоследний брат СУББОТА
не выходит на работу.

В гости ходит ВОСКРЕСЕНЬЕ,
очень любит угощенье`;

// Решение: 
    //  1-й способ:
console.log(str);
let str2 = str.replaceAll('ПОНЕДЕЛЬНИК', 'MONDAY')
              .replaceAll('ВТОРНИК', 'TUESDAY')
              .replaceAll('СРЕДА', 'WEDNESDAY')
              .replaceAll('ЧЕТВЕРГ', 'THURSDAY')
              .replaceAll('ПЯТНИЦА', 'FRIDAY')
              .replaceAll('СУББОТА', 'SATURDAY')
              .replaceAll('ВОСКРЕСЕНЬЕ', 'SUNDAY');
console.log(str2);


    //  2-й способ решения:
console.log(str);
let newString = str.replace(/ПОНЕДЕЛЬНИК/ig, 'MONDAY')
                   .replace(/ВТОРНИК/ig, 'TUESDAY')
                   .replace(/СРЕДА/ig, 'WEDNESDAY')
                   .replace(/ЧЕТВЕРГ/ig, 'THURSDAY')
                   .replace(/ПЯТНИЦА/ig, 'FRIDAY')
                   .replace(/СУББОТА/ig, 'SATURDAY')
                   .replace(/ВОСКРЕСЕНЬЕ/ig, 'SUNDAY');
console.log(newString);