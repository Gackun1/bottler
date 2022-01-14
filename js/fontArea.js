// // import "./styles.css";
// //コールバック関数の第一引数にはIntersectionObserverEntryオブジェクトが入る
// const callback = (entries) => {
//   entries.forEach((entry) => {
//     console.log({ entry });
//     //isIntersectingプロパティは交差しているかどうかのbool値
//     //viewportに交差し、入ったときにisIntersecting===true、出たときにfalse
//     if (entry.isIntersecting) {
//       entry.target.classList.add("text-blue");
//       // entry.target.textContent = true;
//     } else {
//       entry.target.classList.remove("text-blue");
//       // entry.target.textContent = false;
//     }
//   });
// };

// //Intersection observer のオプションを作成
// const option = {
//   // root: document.querySelector('.font-area'),
//   rootMargin: "-45% 0%",
//   // threshold: [1.0]
// };
// //Intersection observer を作成
// //ターゲットが IntersectionObserver に指定された閾値を満たす度にコールバックが呼び出される
// const io = new IntersectionObserver(callback, option);
// //監視したい複数要素をターゲットにした
// const targets = document.querySelectorAll(".font-area div p");
// console.log({ targets });
// targets.forEach((target) => {
//   //監視したい対象をobserve
//   io.observe(target);
// });

const callback = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("text-blue");
    } else {
      entry.target.classList.remove("text-blue");
    }
  });
};

const option = {
  rootMargin: "-47.5% 0%",
};
const io = new IntersectionObserver(callback, option);
const targets = document.querySelectorAll(".font-area div p");
targets.forEach((target) => {
  io.observe(target);
});

// text-box2
const callback2 = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("border-blue");
    } else {
      entry.target.classList.remove("border-blue");
    }
  });
};

const option2 = {
  rootMargin: "-49% 0%",
};
const io2 = new IntersectionObserver(callback2, option2);
const targets2 = document.querySelectorAll(".add-class");
targets2.forEach((target) => {
  io2.observe(target);
});

const callback3 = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("border-blue2");
    } else {
      entry.target.classList.remove("border-blue2");
    }
  });
};

const option3 = {
  rootMargin: "-49% 0%",
};
const io3 = new IntersectionObserver(callback3, option3);
const targets3 = document.querySelectorAll(".add-class2");
targets3.forEach((target) => {
  io3.observe(target);
});
