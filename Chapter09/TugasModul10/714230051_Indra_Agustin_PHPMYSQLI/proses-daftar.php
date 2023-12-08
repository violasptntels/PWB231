<?php
include("config.php");

$status = ""; 


if(isset($_POST['nama'])){
    $nama ="mysqli_real_escape_string"($db, $_POST['nama']);
}
if(isset($_POST['alamat'])){
    $alamat = "mysqli_real_escape_string"($db, $_POST['alamat']);
}
if(isset($_POST['jenis_kelamin'])){
    $jenis_kelamin ="mysqli_real_escape_string"($db, $_POST['jenis_kelamin']);
}
if(isset($_POST['agama'])){
    $agama = "mysqli_real_escape_string"($db, $_POST['agama']);
}
if(isset($_POST['sekolah_asal'])){
    $sekolah = "mysqli_real_escape_string"($db, $_POST['sekolah_asal']);
}

    $sql = "INSERT INTO pendaftaran (nama, alamat, jenis_kelamin, agama, sekolah_asal)
            VALUES ('$nama', '$alamat', '$jenis_kelamin', '$agama', '$sekolah')";
    $query = mysqli_query($db, $sql);

    if ($query) {
        $status = "Pendaftaran Anda berhasil!";
        echo "Pendaftaran berhasil ". mysqli_error($db);
    } else {
        $status = "Pendaftaran Anda gagal!";
        echo "Pendaftaran gagal " . mysqli_error($db);
    }


include("index.php");
?>
