const numara = document.getElementById("numara");
const span = document.querySelector("span");
const resim = document.getElementById("resim");

let ileri = 0;
function say() {
  ileri++;
  if (ileri < 101) {
    span.innerText++;
    numara.style.opacity = scale(ileri, 0, 100, 1, 0);
    resim.style.filter = `blur(${scale(ileri, 0, 100, 30, 0)}px)`;
  } else {
    clearInterval(interval);
  }
}

let interval = setInterval(say, 30);

function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
