 // Given five boxes, assign a random color and the random background to each box using dom concepts 

 let color = ["#163962", "#93C409", "#8E152D", "#F9E79F", "#85C1E9"];
 

 let boxes = document.querySelectorAll(".box");

   boxes.forEach(boxes => {
    let randomColor = color[Math.floor(Math.random()*color.length)];
    boxes.style.backgroundColor = randomColor;

    console.log(randomColor);
   })

