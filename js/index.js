fetch('simple.json').then(
    responce => responce.json()
        .then(
            responce => responce.forEach(item => document.body.appendChild(document.createElement('img')).src =  item.ref)
        )
)

fetch('message.txt').then(
    responce => responce.json()
    .then(
        responce => responce.text().then(document.cookie = 'message = ${responce}'
        )
))

// document.cookie
document.body.appendChild(document.createElement('p')).innerText = document.cookie;
document.cookie = 'message = ${}';

localStorage.setItem('json', '')


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


  function loadData(url){
    
new Promise(
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
  loadData('simple.json').then(
    response => JSON.parse(response).forEach(
        picture => document.body.appendChild(document.createElement('img')).src = picture.url
    )
  )
  loadData('message.txt').then(
      response => document.body.appendChild(document.createElement('p')).innerText = response);

loadData('index.html').then(
    response => document.body.appendChild(document.createElement('pre')).innerText = response);

   loadData('main.js').then(
    response => document.body.appendChild(document.createElement('pre')).innerText = response);

}


