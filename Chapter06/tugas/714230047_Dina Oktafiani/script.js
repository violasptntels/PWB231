const img = document.getElementById('img')
const text = document.getElementById('text')
const btn = document.getElementById('btn')

btn.addEventListener('click', () => {
  console.log("clicked");
  img.src = "./image/gambar2.png"
  text.textContent = "Tailwind css adalah sebuah framework css yang sedang hype di kalangan web developer. Tidak seperti kebanyakan framework css lainnya, tailwindcss tidak terlalu banyak ikut campur dalam penamaan class cssnya yang memungkinkan kita untuk mencopot dan memasang setiap class pada tiap komponen sesuai kebutuhan, atau istilah kerennya utility based class."
  text.classList.add("max-w-prose");
})


