"use strict";

// defer - говорит браузеру что нужно продолжать загружать HTML, а скрипт продолжать в фоновом режиме.
// скрипт с defer не блокирует загрухку страницы
// скрипт с defer всегда выполняются когда DOM уже готово


// async - скрипты загружаются в фоновом режиме. 
// async - скрипты грузятся асинхронно
// с async скрипт должен быть независимым от DOM струкруры и не должен зависить от других скриптов

const p = document.querySelectorAll('p');

console.log(p);

// еще один способ подключения скрипта 
// const script = document.createElement('script');
// script.src = "test.js";
// script.async = false;
// document.body.append(script);

function loadScript(src) {
    const script = document.createElement('script');
    script.src = src;
    script.async = false;
    document.body.append(script);
}

loadScript("test.js");
loadScript("some.js");
