// Предварительная подготовка:
// Создать файл с данными в формате JSON

// Это должен быть массив объектов с двумя свойствами: title и ref

// title - название картинки
// ref - ссылка на картинку
// Задание:
// Загрузить данные из JSON-файла
// Распарсить данные в массив
// Вывести на страницу картинки и подписи к ним




var req = new XMLHttpRequest();
req.responseType = 'json';
req.open('GET', 'simple.json', true);
req.onload  = function() {
    var jsonResponse = req.response;
   jsonResponse.forEach(element => {
        var image = document.body.appendChild(document.createElement('img'));
        image.src= element.ref;
        var text = document.body.appendChild(document.createElement('p'));
        text.innerText = element.title;
    });
};
req.send(null);


// Вариант с fetch

fetch('simple.json')
  .then(response => response.json())
    .then(jsonResponse => jsonResponse.forEach(element => {
        var image = document.body.appendChild(document.createElement('img'));
        image.src= element.ref;
        var text = document.body.appendChild(document.createElement('p'));
        text.innerText = element.title;
    
    }));


    let promise = new Promise(
        function(resolve,reject){
          const request = new XMLHttpRequest()
          request.open('GET','gitJSON.json')
      
          request.onreadystatechange = function(event){
            event.target.readyState === 4 ? 
              event.target.status === 200 ?                           resolve(event.target.responseText) :
                   reject(event.target.statusText) : null  
          }
          request.send()
        }
      )
      promise.then(
        response => JSON.parse(response).forEach(
            picture => document.body.appendChild(document.createElement('img')).src = picture.url
        )
      )






//     Исходные данные
// var messages = [
//     "backspace",
//     "enter",
//     "shift",
//     "control",
//     "delete",
//     "space",
//     "subtract"
// ]

// messages.getKey = () => {
//     var key = new Date().toLocaleString().split(", ")[1]
//     return log [ key ] ? log [ key + "[2]" ] ? key + "[3]" : key + "[2]" : key
// }

// var log = {}
// sendMessage
// var sendMessage = message => new Promise (
//     resolve => setTimeout (
//         () => resolve ( message ),
//         Math.random () * 7000
//     )
// )
// Задача: напилить код, который вызывает функцию sendMessage для каждого элемента массива messages и логирует полученные сообщения в объекте log следующим образом:

// log
// {
//     22:25:57: "backspace"
//     22:25:58: "shift"
//     22:25:59: "subtract"
//     22:25:59[2]: "enter"
//     22:25:59[3]: "delete"
//     22:26:01: "control"
//     22:26:01[2]: "space"
// }



 var messages = [
        "backspace",
        "enter",
        "shift",
        "control",
        "delete",
        "space",
        "subtract"
    ]
    
    messages.getKey = () => {
        var key = new Date().toLocaleString().split(", ")[1]
        return log [ key ] ? log [ key + "[2]" ] ? key + "[3]" : key + "[2]" : key
    }
    
    var log = {}

    var sendMessage = message => new Promise (
        resolve => setTimeout (
            () => resolve ( message ),
            Math.random () * 7000
        )
    );

    messages.forEach (
        ( message, index, arr ) => sendMessage ( message )
            .then (
                mess => Object.assign ( log,
                    { [ arr.getKey() ] : message }
                ),
                console.log(message)
            )
    )
