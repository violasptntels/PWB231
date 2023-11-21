document.getElementById("aritmatika").style.display = "none";
document.getElementById("hasil").style.display = "none";
const bill = document.getElementById("bill");
const total = document.querySelector("#porsi");
const button = document.getElementById("pesan");
button.addEventListener("click", () => {
    document.getElementById("hasil").style.display = "";
    console.log(total.value);
    const tagihan = (total.value * 20000);
    bill.textContent = "Rp. " + tagihan;
} )

function myOrder() {
    document.getElementById("desc").innerHTML = "Selamat Berbelanja disini kami menyediakan beberapa varian bakmie diantaranya : <br/> mie yamin pedas <br/> mie yamin manis <br/> mie yamin kuah <br/>Serba Rp. 20k" ;
    document.getElementById('mieimg').src='./assets/jempol.png'
    document.getElementById("aritmatika").style.display = "";
}






