const btn = document.getElementById("btn");
const img = document.getElementById("image");
const title = document.getElementById("title");
const msg = document.getElementById("message");

btn.addEventListener("click", () => {
  const x = randInt(600),
    y = randInt(50),
    z = randInt(50);
  const question = `What is ${x} + ${y} * ${z}`;
  const answer = x + y * z;
  const usrInput = Number(prompt(question));
  if (usrInput === answer) {
    title.textContent = "YOU WIN 30%";
    msg.textContent =
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat eaque exercitationem reiciendis amet corrupti nemo. Quas dicta fugiat saepe facilis, iste ducimus, officiis perspiciatis pariatur velit sed voluptates doloremque placeat.";
    img.src = "image/diskon.jpg";
    btn.remove();
  }
});

function randInt(n) {
  return Math.floor(Math.random() * n);
}
