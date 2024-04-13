let number = 0;
let data = [];
const button = document.getElementById('btn');
const titleArea = document.getElementById("title"); 
const contentArea = document.getElementById("content"); 
const videoArea = document.getElementById("video"); 


function getData() {
    const request = new XMLHttpRequest();
    request.onreadystatechange = function() {
      if (request.readyState == 4) {
        if(request.status == 200) {
          console.log(request.response)
          data = request.response;
        }
      }
    }
    request.open("GET", "ajax.json");
    request.responseType = "json";
    request.send(null);
  }


function changeVideo() {
    getData();
    button.addEventListener('click', e => { 
        titleArea.innerHTML = data[number].title; 
          contentArea.innerHTML = data[number].content; 
          videoArea.setAttribute("src", data[number].url); 
                number == 2 ? number = 0 : number++; 
});
}

window.onload = changeVideo;