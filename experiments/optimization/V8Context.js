"use strict";

function doThing() {
  var theThing = 3;
  function doSomeThing() {
    var theSumator = 0;
    while (theThing--) {
      // Мы используем переменную из контекста выше, теперь V8 создаст контекст так как мы его используем

      theSumator++;
    }
    return theSumator;
  }
  return doSomeThing();
}

console.log(doThing());

function doThing2() {
  var theThing = 3;
  function doSomeThing2(theThing) {
    var theSumator = 0;
    while (theThing--) {
      // Теперь theThing часть окружения функции doSomeThing2 V8 Не создаст контекст и на уровне байт кода будет работать только с регистрами процессора, что является быстрой оптимизацией
      theSumator++;
    }
    return theSumator;
  }
  return doSomeThing2(theThing);
}

console.log(doThing2());
