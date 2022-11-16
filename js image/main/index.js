let button = document.getElementById("but");
let image = document.getElementById("image");


let arr = ['./img/1.jpg', './img/2.jpg', './img/3.jpg', './img/4.jpg', 4, 6, 7]

let count = 1;

console.log(arr.length)
console.log(arr[1])



   button.addEventListener("click", function(){
  
      image.src = arr[count]
  
      count++
      if (count >= arr.length) 
      {
         count = 0
      }
      console.log(count)



      // if (image.getAttribute("src") == "./img/1.jpg"){
      //    image.src = "./img/2.jpg"}
      // else{
   
      //    image.src = "./img/3.jpg"}
      
   });





// image.addEventListener("click", function(){
  
// });
