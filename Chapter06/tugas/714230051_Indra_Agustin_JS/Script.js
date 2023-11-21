
function ambilAngka(id) {
    return parseFloat(document.getElementById(id).value);
}

function tampilkanHasil(hasil) {
    document.getElementById("hasil").textContent = hasil;
}

document.getElementById("tambah").addEventListener("click", function() {
    var angka1 = ambilAngka("angka1");
    var angka2 = ambilAngka("angka2");
    var hasil = angka1 + angka2;
    tampilkanHasil(hasil);
});


document.getElementById("kurang").addEventListener("click", function() {
    var angka1 = ambilAngka("angka1");
    var angka2 = ambilAngka("angka2");
    var hasil = angka1 - angka2;
    tampilkanHasil(hasil);
});

document.getElementById("kali").addEventListener("click", function() {
    var angka1 = ambilAngka("angka1");
    var angka2 = ambilAngka("angka2");
    var hasil = angka1 * angka2;
    tampilkanHasil(hasil);
});

document.getElementById("bagi").addEventListener("click", function() {
    var angka1 = ambilAngka("angka1");
    var angka2 = ambilAngka("angka2");
    var hasil = angka1 / angka2;
    tampilkanHasil(hasil);
});


