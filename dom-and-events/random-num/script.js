window.addEventListener("load", function () {

    /* CREATE OBJECTS */
  
    // Generally a good idea to declare objects outside of listeners so they are in scope for everything
    // There are exceptions - like if the element isn't on the page yet because it gets added later
    
    // Object needed for TODO #1
    const date = document.getElementById("date");
    
    // Objects needed for TODO #2
    const numButton = document.getElementById("num-button");
    const numBox = document.getElementById("num-box");
    const randomNum = document.getElementById("random-num");
  
  
    /* CODE TO RUN IMMEDIATELY */
  
    // Run any code needed to display things on page when it first loads
  
    // TODO #1 - Add to existing text using new Date object and .toLocaleDateString() method
    date.innerHTML += ` ${new Date().toLocaleDateString()}`
  
    /* EVENT LISTENERS */
  
    // TODO #2 - Add a click event listener for the button to generate a random number
    // Will also need to make the div holding the number visible
    numButton.addEventListener("click", function() {
        console.log("The button was clicked")

        // numBox visible
        numBox.style.visibility = "visible";

        //Change innerHTML
        let num = Math.ceil(Math.random()*50);
        randomNum.innerHTML = num;
  
        // TODO #3 - Change color of number to yellowgreen if even or coral if odd
        // BONUS: Also change the page background to match (use document.body)
        if (num % 2 === 0) {
            randomNum.style.color = "yellowgreen";
            document.body.style.backgroundColor = "yellowgreen";
        } else {
            randomNum.style.color = "coral";
            document.body.style.backgroundColor = "coral";
        }

        // TODO #4 - If the random number is evenly divisible by 3, add the spinning class to the button; otherwise remove it
        if (num % 3 === 0){
            numButton.classList.add("spinning");
        } else {
            numButton.classList.remove("spinning");
        }
      
        // TODO #5 - Trigger alert if number is evenly divisible by 5
        // NOTE: Use setTimeout() to deal with race condition; 50ms is plenty of time to delay
        if (num % 5 === 0) {
            setTimeout(function() {
                alert(`The number ${num} is a multiple of 5! `)
            }, 50);
        }  
    });

  
    // As part of TODO #2: Take a look at object content using console.log and console.dir
  
    
  });