const promises = [
  "今天的约定：牵着你的手，把普通日子过成值得纪念的样子。",
  "今天的约定：认真听你说话，也认真把你放在心上。",
  "今天的约定：快乐一起放大，难过一起变小。",
  "今天的约定：每一次见面，都比上一次更珍惜你。",
  "今天的约定：未来很长，我想慢慢陪你走。"
];

const sparkleLayer = document.querySelector("#sparkleLayer");
const surpriseBtn = document.querySelector("#surpriseBtn");
const promiseBtn = document.querySelector("#promiseBtn");
const promiseText = document.querySelector("#promiseText");
const yesBtn = document.querySelector("#yesBtn");
const alsoYesBtn = document.querySelector("#alsoYesBtn");
const answerNote = document.querySelector("#answerNote");

let promiseIndex = 0;

function makeSparkles(count = 28) {
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < count; i += 1) {
    const dot = document.createElement("span");
    dot.className = "sparkle";
    dot.style.left = `${Math.random() * 100}%`;
    dot.style.top = `${55 + Math.random() * 40}%`;
    dot.style.animationDelay = `${Math.random() * 260}ms`;
    dot.style.background = ["#f0bf6a", "#f08a73", "#c8e0d7", "#ffffff"][i % 4];
    fragment.appendChild(dot);
  }

  sparkleLayer.appendChild(fragment);
  window.setTimeout(() => {
    sparkleLayer.replaceChildren();
  }, 1700);
}

surpriseBtn.addEventListener("click", () => {
  makeSparkles(42);
  surpriseBtn.textContent = "你已经把这里点亮了";
});

promiseBtn.addEventListener("click", () => {
  promiseIndex = (promiseIndex + 1) % promises.length;
  promiseText.textContent = promises[promiseIndex];
  makeSparkles(16);
});

function sayYes() {
  answerNote.textContent = "那就说好了：从今天起，我会更认真地爱你。";
  makeSparkles(64);
}

yesBtn.addEventListener("click", sayYes);
alsoYesBtn.addEventListener("click", sayYes);
