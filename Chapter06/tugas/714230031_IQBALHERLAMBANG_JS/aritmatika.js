
      const hargaInput = document.getElementById("harga");
      const jumlahInput = document.getElementById("jumlah");
      const totalInput = document.getElementById("total");
      const tambahButton = document.getElementById("tambah");
      const kurangButton = document.getElementById("kurang");

      // Fungsi untuk menghitung total harga
      function hitungTotal() {
        const harga = parseFloat(hargaInput.value);
        const jumlah = parseFloat(jumlahInput.value);
        const total = harga * jumlah;
        totalInput.value = total;
      }

      // Event listener untuk tombol Tambah
      tambahButton.addEventListener("click", () => {
        let jumlah = parseFloat(jumlahInput.value);
        jumlah += 1;
        jumlahInput.value = jumlah;
        hitungTotal();
      });

      // Event listener untuk tombol Kurang
      kurangButton.addEventListener("click", () => {
        let jumlah = parseFloat(jumlahInput.value);
        if (jumlah > 1) {
          jumlah -= 1;
          jumlahInput.value = jumlah;
          hitungTotal();
        }
      });

      // Event listener saat jumlah diubah
      jumlahInput.addEventListener("input", () => {
        hitungTotal();
      });

      // Hitung total saat halaman dimuat
      hitungTotal();
