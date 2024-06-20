let turn = true
document.addEventListener("DOMContentLoaded", function() {
    const gridItems = document.querySelectorAll(".button");

    gridItems.forEach(item => {
        item.addEventListener("click", function() {
            // Toggle de klasse .red op het geklikte item
            if(turn){
                this.classList.toggle("red");
                turn = false
            } else {
                this.classList.toggle("green");
                turn = true
            }
        });
    });

});
console.log(turn)