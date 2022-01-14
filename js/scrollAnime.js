// var tmp = {};
// loadImageToTmp();
// function loadImageToTmp() {
//   for (var i = 1; i <= 10; i++) {
//     const _i = i;
//     const img = new Image();
//     tmp[_i] = null;
//     img.src = "img/anime/a" + i + ".png";
//     img.addEventListener("load", () => {
//       tmp[_i] = img;
//     });
//   }
// }

// const image = document.getElementById("anim_img");

// var SIZE = 50;

// const offset = $("#anim_img_box").offset();
// $(window).scroll(function () {
//   const y = $(window).scrollTop();
//   const dy = y - offset.top;
//   if (offset.top < y && y < offset.top + SIZE * 5) {
//     $("#anim_img_box").css("top", 0);
//     const i = Math.floor(dy / 5);
//     if (i <= 0 || i >= SIZE) return;
//     if (tmp[i].src) image.src = tmp[i].src;
//   } else if (y >= offset.top + SIZE * 5) {
//     $("#anim_img_box").css("top", "-" + (dy - SIZE * 5));
//   }
// });

// $("#anim_img_padding").height(SIZE * 5);
var tmp = {};
loadImageToTmp();
function loadImageToTmp() {
  for (var i = 1; i <= 100; i++) {
    const _i = i;
    const img = new Image();
    tmp[_i] = null;
    img.src = "img/anime3/c" + i + ".png";
    img.addEventListener("load", () => {
      tmp[_i] = img;
    });
  }
}

const image = document.getElementById("anim_img");

var SIZE = 100;

const offset = $("#anim_img_box").offset();
$(window).scroll(function () {
  const y = $(window).scrollTop();
  const dy = y - offset.top;
  if (offset.top < y && y < offset.top + SIZE * 20) {
    $("#anim_img_box").css("top", 0);
    const i = Math.floor(dy / 20);
    if (i <= 0 || i >= SIZE) return;
    if (tmp[i].src) image.src = tmp[i].src;
  } else if (y >= offset.top + SIZE * 20) {
    $("#anim_img_box").css("top", "-" + (dy - SIZE * 20));
  }
});

$("#anim_img_padding").height(SIZE * 20); 
