function ParagrafChangeImageChange() {
  document.getElementById("desc").innerHTML =
    " Mereka telah menjual lebih dari 41 juta kopi album di seluruh" +
    "\r\n" +
    "dunia sejak terbentuk di Poway, California pada tahun 1992.";

  document.getElementById("image").src = "182 remove.png";
}

function Statement() {
  var a, b, c;
  a = 7;
  b = 2;
  c = a * b;
  alert(
    "Sejauh ini band tersebut sudah memiliki total album sekitar " +
      c +
      " album"
  );
}

function AritmatikaSyntax() {
  let a = 2;
  let b = 1;

  let tambah = a + b;

  alert("Member dari band ini hanya beranggotakan " + tambah + " orang");
}
