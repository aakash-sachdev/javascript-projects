/*** Random Quote, Advice, & Dad Jokes ***/

/*
    Some practice on using fetch - utilizing three different public APIs (linked below)
*/

// Event listener for page load

window.addEventListener('load', function() {
   
    // Create object for result section 
    const result = document.getElementById('result');

    // Click events using document-level event listener (event delegation)
    document.addEventListener('click', function (event) {

        // TODO: If the random advice button is clicked, put the advice in the result section
        // RANDOM QUOTE courtesy of https://api.quotable.io/random
        if(event.target.id === "quote") {
            fetch ('https://api.quotable.io/random').then(function(response) {
                response.json().then(function(data) {
                   console.log(data);
                    result.innerHTML = `
                        <p class = "text-left">&quot;${data.content}&quot;</p>
                        <p class = "text-right">-${data.author}&quot;</p>
                    `;
                })
            });
        }
        
        // RANDOM ADVICE courtesy of https://api.adviceslip.com/
        // The endpoint is https://api.adviceslip.com/advice
        
        if(event.target.id === "advice") {
            fetch ('https://api.adviceslip.com/advice')
            .then(function(response) {return response.json()})
            .then(function(data){
                // console.log(data);
                result.innerHTML = `
                <p>${data.slip.advice}</p>
                `;
            });  
        };
        /*
        // TODO: If dad joke button is clicked, put dad joke in result section
        The endpoint is https://icanhazdadjoke.com
          This one also requires a header. Add the following object as the second argument in the fetch() function:
          {
            headers: {
                Accept: "application/json",
            }
          }
        */
        // Challenge! Use async/await syntax for this one.
        // RANDOM DAD JOKE courtesy of https://icanhazdadjoke.com/api
        if(event.target.id === "dad-joke") {

            async function getDadJoke() {
                let response = await fetch('https://icanhazdadjoke.com', {
                    headers: {
                        Accept: "application/json",
                    }
                });
                let data = await response.json();
                // console.log(data);
                result.innerHTML = `
                <p>${data.joke}</p>
                `;
            }

            getDadJoke();
     
        };
           
    });
});