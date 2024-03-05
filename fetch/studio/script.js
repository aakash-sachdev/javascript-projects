//TODO: Add Your Code Below
window.onload = function() {
    const container = document.getElementById('container');

    // Make a GET request to the astronauts API
    fetch('https://handlers.education.launchcode.org/static/astronauts.json')
        .then(function(response) {
            return response.json();
        })
        .then(data => {
            // Add each astronaut returned to the web page
            data.forEach(astronaut => {
                const astronautDiv = document.createElement('div');
                astronautDiv.classList.add('astronaut');

                astronautDiv.innerHTML = `
                    <div class="bio">
                        <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
                        <ul>
                            <li>Hours in space: ${astronaut.hoursInSpace}</li>
                            <li>Active: ${astronaut.active ? 'Yes' : 'No'}</li>
                            <li>Skills: ${astronaut.skills.join(', ')}</li>
                        </ul>
                    </div>
                    <img class="avatar" src="${astronaut.picture}">
                `;

                container.appendChild(astronautDiv);
            });
        })
};