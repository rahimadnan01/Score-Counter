let btn_1 = document.querySelector(".btn-1");
let btn_2 = document.querySelector(".btn-2");
let btn_3 = document.querySelector(".btn-3");

let btn_1_r = document.querySelector(".btn-1-r");
let btn_2_r = document.querySelector(".btn-2-r");
let btn_3_r = document.querySelector(".btn-3-r");

let box_content_1 = document.querySelector(".black-box-left p");
let box_content_2 = document.querySelector(".black-box-right p");
let count = 0;
let count_1 = 0;

let new_game = document.querySelector(".new-game");
btn_1.addEventListener("click", () => {
  count += 1;
  box_content_1.innerText = count;
});
btn_2.addEventListener("click", () => {
  count += 2;
  box_content_1.innerText = count;
});
btn_3.addEventListener("click", () => {
  count += 3;
  box_content_1.innerText = count;
});

btn_1_r.addEventListener("click", () => {
  count_1 += 1;
  box_content_2.innerText = count_1;
});
btn_2_r.addEventListener("click", () => {
  count_1 += 2;
  box_content_2.innerText = count_1;
});
btn_3_r.addEventListener("click", () => {
  count_1 += 3;
  box_content_2.innerText = count_1;
});

new_game.addEventListener("click", () => {
  count = 0;
  count_1 = 0;
  box_content_1.innerText = 0;
  box_content_2.innerText = 0;
});

