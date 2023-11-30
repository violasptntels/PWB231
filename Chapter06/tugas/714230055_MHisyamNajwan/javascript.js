function changeImage()
{
var img = document.getElementById('image');
img.src = 'images/grocery-image.png'
}

function changeText()
{
    var id=document.getElementsByName("button")[0].id;
    if(id==1)
{
    document.getElementById("text").innerHTML = "udah ke ganti kan";
    ocument.getElementsByName("button")[0].id=0;
}
else
{
    document.getElementById("text").innerHTML = "how to scihi";
    document.getElementsByName("button")[0].id=1;
}
}