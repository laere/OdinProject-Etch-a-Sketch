//Add a button to the top of the screen
//When clicked it will prompt the user for the # of sides for the new grid (100x100)

let button = document.getElementById("new-sketch-btn");
let container = document.getElementById("container");

function grid(n) {
  
   
    console.log(container)

    if (n > 100 || n === 0 || n === NaN) {
        return;
    }

    for (let i = 0; i < n; i++) {

        let boxContainer = document.createElement("div");
        container.appendChild(boxContainer)

        for (let j = 0; j < n; j++) {
            
            let box = document.createElement("div")
            box.className = "box"
            boxContainer.appendChild(box);
        }
    }

}

button.addEventListener("click", e => {
    let number = parseInt(prompt("Choose the number of sides you want your sketch to be (max: 100"));
    console.log(typeof number);
    grid(number);
    // debugger;
})



