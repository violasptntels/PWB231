
const img = document.getElementById('img')
const text = document.getElementById('text')
const btn = document.getElementById('btn')

btn.addEventListener('click', () => {
  console.log("clicked");
  img.src ="asset/image change.png"
  text.textContent = "Tailwind CSS is an open source CSS framework. The main feature of this library is that, unlike other CSS frameworks like Bootstrap, it does not provide a series of predefined classes for elements such as buttons or tables"
  text.classList.add("max-w-prose");
})