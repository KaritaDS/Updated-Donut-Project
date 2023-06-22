// let autoClickInterval;
let autoClickerCost = 100;
let donutsCount = 0;
let autoClicks = 0;
const donutBtn = document.querySelector('.countBtn');
const donutCount = document.querySelector('.countNum');
const buy_Auto_clicker= document.querySelector('.autoClicker');
const auto_clocker_cost_title= document.querySelector(".auto_clocker_cost_title")
const Purchased_auto_clickers = document.querySelector(".Purchased_auto_clickers")
let donutClicks = 0;
clear.addEventListener('click', resetAll);
function resetAll(){
  location.reload ()
}
donutBtn.addEventListener('click', () => {
  donutClicks++;
  check()
  // donutsCount = calculateDonuts();
  // donutCount.innerHTML = donutsCount;
  donutCount.innerHTML = donutClicks;
});
function check(){
  if(donutClicks<autoClickerCost){
buy_Auto_clicker.disabled=true
buy_Auto_clicker.style.background = "red"
  } else if(donutClicks>=autoClickerCost){
buy_Auto_clicker.disabled=false
buy_Auto_clicker.style.background = "green"
  }
}
// const moreDonutBtn = document.querySelector('.countsBtn2');
// const moreDonutCount = document.querySelector('h3');
// let moreDonutClicks = 0;
// moreDonutBtn.addEventListener('click', () => {
//   moreDonutClicks++;
//   donutsCount = calculateDonuts();
//   moreDonutCount.innerHTML = moreDonutClicks;
// });
// const evenMoreDonutBtn = document.querySelector('.countBtn3');
// const evenMoreDonutCount = document.querySelector('.counterNum3 h4');
// let evenMoreDonutClicks = 0;
// evenMoreDonutBtn.addEventListener('click', () => {
//   evenMoreDonutClicks++;
//   donutsCount = calculateDonuts();
//   evenMoreDonutCount.innerHTML = evenMoreDonutClicks;
// });
// buy_Auto_clicker.addEventListener('click',()=>{
function addAutoClick() {
  if (donutClicks >= autoClickerCost) {
    donutClicks -= autoClickerCost;
    autoClicks++;
    autoClickerCost = autoClickerCost+Math.round(autoClickerCost * 0.1);
    // buy_Auto_clicker.innerHTML = autoClickerCost
    // clearInterval(autoClickInterval);
    autoClickInterval = setInterval(() => {
      check()
      // autoClicks++;
      donutClicks++
      // donutClicks += autoClicks;
      // donutsCount = calculateDonuts();
      Purchased_auto_clickers.innerHTML=autoClicks
      auto_clocker_cost_title.innerHTML=autoClickerCost
      donutCount.innerHTML = donutClicks;
      // moreDonutClicks += autoClicks;
      // moreDonutCount.innerHTML = moreDonutClicks;
    }, 1000);
  // } else {
    // alert("Hey, you need more donuts!");
  }
}
check()
// })
// function calculateDonuts() {
//   return donutClicks
//   // return donutClicks
// }
// function autoClick() {
//   if (donutsCount >= autoClickerCost) {
//     autoClicks++;
//     donutsCount -= autoClickerCost;
//     autoClickerCost = Math.round(autoClickerCost * 120);
//     clearInterval(autoClickInterval);
//     autoClickInterval = setInterval(() => {
//       donutClicks += autoClicks;
//       donutsCount = calculateDonuts();
//       donutCount.innerHTML = donutsCount;
//       moreDonutClicks += autoClicks;
//       moreDonutCount.innerHTML = moreDonutClicks;
//       evenMoreDonutClicks += autoClicks;
//       evenMoreDonutCount.innerHTML = evenMoreDonutClicks;
//     }, 120);
//   } else {
//     alert("Hey, you need more donuts!");
//   }
// }
// function calculateDonuts() {
//   // return donutClicks + (moreDonutClicks * 2) + (evenMoreDonutClicks * 3) + donutsCount;}
// return donutClicks + donutCount;
// }