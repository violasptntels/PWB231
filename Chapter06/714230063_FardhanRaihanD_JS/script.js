function ParagrafChangeImageChange() {
    document.getElementById("desc").innerHTML = "Untuk bergabung dengan kami anda akan dikenakan biaya sebesar RP 200.000 :" +
    "\r\n" +
    "Bergabung dengan kami."
     ;
    document.getElementById("image").src = "img/bulan.png";
}
function Statement() {
    var a, b, c;
    a = 100;
    b = 2;
    c = a * b;
    alert(
        "Anda hanya perlu bayar sekitar" +
        c +
        "bayar"
    );
}
function AritmatikaSyntax() {
    let a = 1;
    let b = 1;

    let tambah = a + b;

    alert("Pembayaran hanya untuk" + tambah + "orang");
}