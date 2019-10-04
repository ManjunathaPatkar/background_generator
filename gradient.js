var h=document.querySelector("h3");
var color1=document.querySelector(".colortype1");
var color2=document.querySelector(".colortype2");
var bid=document.getElementById("bid")
color1.addEventListener("input",function () {
	bid.style.background = "linear-gradient(to right, "+ color1.value+ ", "+ color2.value+ ")";
	
	css.textContent = bid.style.background + ";";
});
color2.addEventListener("input",function () {
	bid.style.background = "linear-gradient(to right, "+ color1.value+ ", "+ color2.value+ ")";
});