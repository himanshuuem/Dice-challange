var randomeNumber1=Math.floor(Math.random()*6)+1;
var randomeImages="dice"+randomeNumber1+".png";
var randomSource="images/"+randomeImages;
document.querySelectorAll("img")[0].setAttribute("src",randomSource);

var randomeNumber2=Math.floor(Math.random()*6)+1;
var randomeImages2="images/dice"+randomeNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomeImages2);

if(randomeNumber1>randomeNumber2){
   document.querySelector("h1").innerHTML="1 Won";
}
 if(randomeNumber2>randomeNumber1){
    document.querySelector("h1").innerHTML="2 Won";
}
if(randomeNumber1===randomeNumber2){
    document.querySelector("h1").innerHTML="Match Draw";
}