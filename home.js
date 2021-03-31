const randomImage1 = ["media/food/sampleFood.jpg","media/food/sampleFood2.jpg","media/food/sampleFood3.jpg"];

const randomNum1 = Math.floor(Math.random() * randomImage1.length);
const randomNum2 = Math.floor(Math.random() * randomImage1.length);
const randomNum3 = Math.floor(Math.random() * randomImage1.length);
const randomNum4 = Math.floor(Math.random() * randomImage1.length);

function dispRandImg1 () {
    document.getElementById("imgIvory").src = randomImage1[randomNum1];
}
function dispRandImg2 () {
    document.getElementById("imgGer").src = randomImage1[randomNum2];
}
function dispRandImg3 () {
    document.getElementById("imgItal").src = randomImage1[randomNum3];
}
function dispRandImg4 () {
    document.getElementById("imgTurk").src = randomImage1[randomNum4];
}
/* console.log(randomNum);
console.log(randomImage[randomNum]); */

/* function testFunction() {
    alert("JS seems to be working :)");
  } */
/* document.onload = dispRandImg1(); */
/* document.onload = testFunction(); */