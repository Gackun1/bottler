const scrollContainer = document.getElementById("scroll-container");
const scrollBox = document.getElementById("scroll-box");
const scrollBoxPageTop = scrollBox.getBoundingClientRect().top;

const wave = document.querySelector(".mv-scroll-box__waves");
const waveBottom = document.querySelector(".mv-scroll-box__waves-bottom");

document.addEventListener("scroll", () => {
  const scrollContainerRect = scrollContainer.getBoundingClientRect();
  if (
    scrollContainerRect.height - scrollContainerRect.bottom >
    scrollBoxPageTop
  ) {
    const scrollRatio =
      1 - scrollContainerRect.bottom / scrollContainerRect.height;
    wave.style.bottom = `${scrollRatio * 100 - 1}%`;
    waveBottom.style.bottom = `${scrollRatio * 100}%`;
  }
});

const targetHeight = document.querySelector(".mv-scroll-box__img").height;
const mvImageStyle = `.mv-scroll-box:after { height: calc((100% - ${targetHeight}px) / 2); }`;
const addStyleForMvImage = () => {
  const style = document.createElement("style");
  style.innerHTML = mvImageStyle;
  document.body.appendChild(style);
};
window.addEventListener("resize", () => {
  addStyleForMvImage();
});
addStyleForMvImage();
