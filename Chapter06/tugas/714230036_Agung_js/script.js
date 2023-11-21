var x = document.getElementById("calculator");
x.style.display = "none";
function myFunction() { 
    document.getElementById('paragraf').innerHTML = "Mesin hitung atau kalkulator adalah alat untuk menghitung dari perhitungan sederhana seperti penjumlahan, <br/> pengurangan, perkalian dan pembagian sampai kepada kalkulator ilmiah yang dapat menghitung <br/> rumus matematika tertentu. Pada perkembangannya sekarang ini, kalkulator sering dimasukkan <br/> sebagai fungsi tambahan daripada komputer, ponsel, <br/> bahkan sampai jam tangan. Rata-rata kalkulator memiliki 12 hingga 15 digit, <br/> tetapi mesin hitung ilmiah sanggup menghitung hingga angka 1 googol menggunakan rumus tertentu.";
    var pic = document.getElementById('gambar');
    if (x.style.display === "none") {
        pic.src = "img/kalkulator.png";
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

function appendToResult(value) {
    const resultInput = document.getElementById('result');
    resultInput.value += value;
}

function clearResult() {
    const resultInput = document.getElementById('result');
    resultInput.value = '';
}

function calculateResult() {
    const resultInput = document.getElementById('result');
    try {
        resultInput.value = eval(resultInput.value);
    } catch (error) {
        resultInput.value = 'Error';
    }
}