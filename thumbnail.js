document.addEventListener("DOMContentLoaded", function(event) {
    let targetImage = document.querySelector("#smart-image");
    targetImage.addEventListener("click", function() { 
  if (targetImage.classList.contains("small")) {
    targetImage.classList.remove("small");
} else {
    targetImage.classList.add("small");
}
    });
});
function changeImg(num){
var img = document.getElementById('img_box').getElementsByTagName('img');
for(i=0;i<=img.length;i++){
if(i==num+1) img[i].style.display="inline";
else img[i].style.display="none";
if(num==3) img[0].style.display="inline"; 
}
