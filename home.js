const randomImage1 = ["media/ivorianfood/attieke.jpeg","media/ivorianfood/gbofloto.jpeg","media/ivorianfood/saucegombo.JPG"];
const randomImage2 = ["media/germanfood/rouladen.jpg","media/germanfood/sauerkraut.jpg","media/germanfood/schweinhaxe.jpg"];
const randomImage3 = ["media/italianfood/italian_bean_salad.png","media/italianfood/lasagna.png","media/italianfood/roasted_ricotta_pasta.png"];
const randomImage4 = ["media/turkishfood/chicken.png","media/turkishfood/dolma.png","media/turkishfood/kebab.png"];

const randomNum1 = Math.floor(Math.random() * randomImage1.length);
const randomNum2 = Math.floor(Math.random() * randomImage2.length);
const randomNum3 = Math.floor(Math.random() * randomImage3.length);
const randomNum4 = Math.floor(Math.random() * randomImage4.length);

function dispRandImg1 () {
    document.getElementById("imgIvory").src = randomImage1[randomNum1];
}
function dispRandImg2 () {
    document.getElementById("imgGer").src = randomImage2[randomNum2];
}
function dispRandImg3 () {
    document.getElementById("imgItal").src = randomImage3[randomNum3];
}
function dispRandImg4 () {
    document.getElementById("imgTurk").src = randomImage4[randomNum4];
}
/* console.log(randomNum);
console.log(randomImage[randomNum]); */

/* function testFunction() {
    alert("JS seems to be working :)");
  } */
/* document.onload = dispRandImg1(); */
/* document.onload = testFunction(); */