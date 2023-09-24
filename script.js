function sketch() {
    //Add a button to the top of the screen
    //When clicked it will prompt the user for the # of sides for the new grid (100x100)
    
    //Instead of using queryselectorAll to create a nodelist
    //could we make an empty array and add each element to that array
    //making a seperate function that renders the array vs having one function doing both?



    function grid(n) {
        let container = document.getElementById("sketch-container");

        if (n > 100 || n === 0 || n === NaN) {
            return;
        }

        for (let i = 0; i < n; i++) {

            let boxContainer = document.createElement("div");
            container.appendChild(boxContainer)
            arr.push(boxContainer);

            for (let j = 0; j < n; j++) {

                let box = document.createElement("div")
                box.className = "box";
                boxContainer.appendChild(box);
                
            }
        }

        let boxes = document.querySelectorAll(".box")
        // console.log(boxes);
        mouseOverEffect(boxes);
    }

    function mouseOverEffect(nodelist) {
        nodelist.forEach(node => {
            node.addEventListener("mouseover", e => {
                e.target.classList.add("background");
            })
        })
    }

    function userInput() {
        return parseInt(prompt("Choose the number of sides you want your sketch to be (max: 100"));
    }

    function startSketch() {
        let button = document.getElementById("new-sketch-btn");

        button.addEventListener("click", e => {
            let number = userInput();
            grid(number);
        })
    }



    startSketch();
    
}


sketch();