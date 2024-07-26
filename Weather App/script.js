// Weather API
let info = document.getElementById('info');
let search = document.getElementById('Search');
let city = document.getElementById('city');
key = "51b0eb83f67d99df08ecf2a9aa7a81cb";

let WeatherInfo = () => {
    cityVal = city.value.trim();

    if (cityVal.length == 0) {
        info.innerHTML = `<h3 class ="please">Please enter a City name</h3>`;
    }
    else {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=${key}&units=metric`;
        fetch(url).then(
            Response => Response.json())
            .then(data => {
                // console.log(data);
                // console.log(data.name)
                // console.log(data.weather[0].icon);
                // console.log(data.weather[0].main);
                // console.log(data.weather[0].description);
                // console.log(data.main.temp);
                // console.log(data.main.temp_min);
                // console.log(data.main.temp_max);
                info.innerHTML = `
                <h2>${data.name}</h2>
                
                <h4 class="weather">${data.weather[0].main}</h4>
                <h4 class="desc">${data.weather[0].description}</h4>
                <img src = "https://api.openweathermap.org/img/w/${data.weather[0].icon}.png">
                <h1>${data.main.temp}°</h1>
                <div class = "temp-box">
                    <div>
                        <h4 class = "title">min</h4>
                        <h4 class = "temp">${data.main.temp_min}</h4>
                    </div>
                    <div>
                        <h4 class = "title">max</h4>
                        <h4 class = "temp">${data.main.temp_max}</h4>
                    </div>
                </div> 
                `;
            })
            .catch(() => {
                info.innerHTML = `<h3 class = "notFound">City not found</h3>`
            })
    }
}

search.addEventListener("click", WeatherInfo);

window.addEventListener("load", WeatherInfo);



// -----------------------------Circle Animations-----------------------------


const circles = document.querySelectorAll('.circle');
circles.forEach(circle => {

    // Original Position
    const originalPosition = {
        x: circle.offsetLeft,
        y: circle.offsetTop
    };

    document.addEventListener('mousemove', (event) => {
        const mouseX = event.clientX;
        const mouseY = event.clientY;
        const circleRect = circle.getBoundingClientRect();
        const circleCenterX = circleRect.left + circleRect.width / 2;
        const circleCenterY = circleRect.top + circleRect.height / 2;
        const dx = mouseX - circleCenterX;
        const dy = mouseY - circleCenterY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 150) {
            const angle = Math.atan2(dy, dx);
            const moveDistance = 150 - distance;
            const newX = originalPosition.x - Math.cos(angle) * moveDistance;
            const newY = originalPosition.y - Math.sin(angle) * moveDistance;
            circle.style.transform = `translate(${newX - originalPosition.x}px, ${newY - originalPosition.y}px)`;
        } else {
            circle.style.transform = `translate(0px, 0px)`;
        }
    });
});


