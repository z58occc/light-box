const box = document.querySelector(".box");
const photoIndex = document.querySelector(".photoIndex");
const photoBox = document.querySelector(".photoBox");
const imgs = document.querySelectorAll("img");
const close = document.querySelector(".close");
const next = document.querySelector(".next");
const last = document.querySelector(".last");
const imgSrcs = [
  "./img/erik-mclean-TNjdgCBRMeU-unsplash.jpg",
  "./img/jeremy-vessey-lRwGMe1MFj4-unsplash.jpg",
  "./img/jeremy-vessey-oM4uCeXpKSc-unsplash.jpg",
  "./img/erik-mclean-OVWn1sbGIYQ-unsplash.jpg",
  "./img/peter-lloyd-z2AvphP--S0-unsplash.jpg",
  "./img/jiri-sifalda-ITjiVXcwVng-unsplash.jpg",
];
imgs.forEach((img, i) => {
  img.addEventListener("click", () => {
    box.style.display = "flex";
    photoBox.style.background = "transparent  50% 50% no-repeat padding-box ";
    photoBox.style.backgroundImage = `url(${imgSrcs[i]})`;
    photoBox.style.backgroundSize = "cover";
    photoIndex.innerText = `${i + 1}`;
  });
});
close.addEventListener("click", () => {
  hide();
});
next.addEventListener("click", () => {
  nextPhoto();
});
last.addEventListener("click", () => {
  lastPhoto();
});
const hide = () => {
  box.style.display = "none";
};

nextPhoto = () => {
  const backImg = photoBox.style.backgroundImage;
  const match = backImg.match(/"([^"]*)"/);
  // 用正規表達式擷取底圖src字串
  const nowIndex = imgSrcs.findIndex((imgSrc) => imgSrc === match[1]);
  // 擷取後去對比是哪一張圖 抓索引
  if (nowIndex !== 5) {// 不是最後一張就下一張
    photoBox.style.backgroundImage = `url(${imgSrcs[nowIndex + 1]})`;
    photoIndex.innerText = `${nowIndex + 2}`;
  } else {// 是最後一張回到第一張
    photoBox.style.backgroundImage = `url(${imgSrcs[0]})`;
    photoIndex.innerText = "1";
  }
};
lastPhoto = () => {
  const backImg = photoBox.style.backgroundImage;
  const match = backImg.match(/"([^"]*)"/);
  const nowIndex = imgSrcs.findIndex((imgSrc) => imgSrc === match[1]);
  if (nowIndex !== 0) {// 不是第一張就上一張
    photoBox.style.backgroundImage = `url(${imgSrcs[nowIndex - 1]})`;
    photoIndex.innerText = `${nowIndex}`;
  } else {// 是第一張就回到最後一張;
    photoBox.style.backgroundImage = `url(${imgSrcs[5]})`;
    photoIndex.innerText = "6";
  }
};
