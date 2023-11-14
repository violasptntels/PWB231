const btn = document.getElementById("btn");
const img = document.getElementById("image");
const title = document.getElementById("title");
const msg = document.getElementById("message");

btn.addEventListener("click", () => {
  const x = randInt(100),
    y = randInt(300),
    z = randInt(20);
  const question = `What is ${x} + ${y} * ${z}`;
  const answer = x + y * z;
  const usrInput = Number(prompt(question));
  if (usrInput === answer) {
    title.textContent = "WE HAVE A WINNER!";
    msg.textContent =
      "CONGRATULATIONS You’ve won the Kodak Ektar H35! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero consequatur harum sunt nemo enim iure, eius blanditiis deserunt tempora, aperiam esse eum nostrum necessitatibus.";
    img.src =
      "https://as2.ftcdn.net/v2/jpg/01/99/88/73/1000_F_199887378_xCdcHgFqPOq6zfS0Pfa3kSAunBMjl8DZ.jpg";
    btn.remove();
  }
});

function randInt(n) {
  return Math.floor(Math.random() * n);
}
