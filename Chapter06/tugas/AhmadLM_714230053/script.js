function displayText() {
    var text = document.getElementById("textField");
    text.style.display = "block";
}
function divideBy() { 
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
        document.getElementById("result").innerHTML = num1 / num2;
}
function full_view(ele) {
    let src=ele.parentElement.querySelector(".img-source").getAttribute("src");
    document.querySelector("#img-viewer").querySelector("img").setAttribute("src",src);
    document.querySelector("#img-viewer").style.display="block";
}
  
  function close_model() {
    document.querySelector("#img-viewer").style.display="none";
}