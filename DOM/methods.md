getElementById(id): Возвращает элемент с указанным идентификатором.
var element = document.getElementById("myElement");
---
getElementsByClassName(className): Возвращает коллекцию элементов с указанным классом.
var elements = document.getElementsByClassName("myClass");
---
getElementsByTagName(tagName): Возвращает коллекцию элементов с указанным тегом.
var elements = document.getElementsByTagName("div");
---
querySelector(selector): Возвращает первый элемент, соответствующий указанному селектору.
var element = document.querySelector(".myClass");
---
querySelectorAll(selector): Возвращает все элементы, соответствующие указанному селектору.
var elements = document.querySelectorAll(".myClass");
---
createElement(tagName): Создает новый элемент с указанным тегом.
var element = document.createElement("div");
---
appendChild(element): Добавляет новый элемент в конец родительского элемента.
var parentElement = document.getElementById("parent");
parentElement.appendChild(element);
---
removeChild(element): Удаляет указанный элемент из родительского элемента.
var parentElement = document.getElementById("parent");
parentElement.removeChild(element);
---
setAttribute(name, value): Устанавливает значение атрибута указанному элементу.
element.setAttribute("class", "myClass");
---
getAttribute(name): Возвращает значение указанного атрибута элемента.
var className = element.getAttribute("class");
---
addEventListener(event, function): Добавляет обработчик события указанному элементу.
element.addEventListener("click", function() {
  // код обработчика события
});
