function add(){
    document.getElementById("myNumber").stepUp(1)
}

function reduce(){
    document.getElementById("myNumber").stepDown(1)
}

function checkout(){
    window.open("https://api.whatsapp.com/send?phone=6281564602171&text=Hallo saya mau order", "_blank");
}

function text(){
    document.getElementById("changeText").innerHTML = "Ini teks nya berubah"
}

function gambar(){
    document.getElementById("img").src='img/cutlery.png'
}

function gambar2(){
    document.getElementById("img").src='img/eating.png'
}
