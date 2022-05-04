function HelloWorld() {
  let h1 = document.getElementsByTagName('h1')[0];
  h1.innerHTML = 'Hello World!';
}

window.onload = function() {
  replace();
}

function replace() {
  console.log("replace");
  document.getElementById("Hello").innerHTML = "Ipsum Dominum";
  
}


function Changebg() {
    var element = document.body;
    element.classList.toggle("lime-mode");
}
