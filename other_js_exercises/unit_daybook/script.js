var day = "",            //день неділі
text = "",               // текст
i = 1,                   // лічильник
arrNotes = [],           //масив нотаток
form = document.dwsForm; //окрема змінна для вказання шляху до форми

//далі опис, що відбувається по кліку на кнопку *Відправити*
//сворюємо ф-цію, що запускається по кліку даної кнопки

function btnClick(){
 //в окрему змінну те поле, що вибрав користувач дні неділі
    day = form.days.value;
//в окрему змінну текстовий вміст, що написав корист.
    text = form.message.value;

//з допомогою методу push звертаємося до масиву і добавляємо настю дані
    arrNotes.push("<tr><td>" + i + "</td><td> Нотатка на:" + day.bold() + "</td></tr>" + "<tr><td></td><td>" + text + "<hr></td></tr>");     //використ табл верстку, де описуємо як вона буде виводитися, перерах перемінні і текст вміст
//зб. лічильник на 1
    i++;
//зкинемо всі поля по нажатті на клік
    form.reset();

}

//наст. роздрукувати масив
//відловити клік Роздрукувати/function prClick(), потім звертаємося до елемента/document.getElementById('diary') по якому хотіли вивести даний масив
//і з допомогою innerHTML в табл. верстці відображаємо масив і забираємо розділювач в масива arrNotes.join
//з допомогою join вказуємо, що його не буде/розділювача і закривю талб.
    function prClick() {
        document.getElementById('diary').innerHTML="<table>" + arrNotes.join('') + "</table>"
    }