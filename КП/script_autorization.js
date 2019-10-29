< script >
    elem.onclick = function(event) {
        // вывести тип события, элемент и координаты клика
        alert("Helo world" + event);
        alert(event.type + " на " + event.currentTarget);
        alert(event.clientX + ":" + event.clientY);
    } <
    /script>