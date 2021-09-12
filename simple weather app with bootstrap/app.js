const KEY = "713fcbf1f91cb4a374f991a0cfec2d64"

const input = document.querySelector("#searchUser")
const btn = document.querySelector("#submit")
const display = document.getElementById("content")

btn.addEventListener("click", getWeather)
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") getWeather()
})

async function getWeather() {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric&appid=${KEY}`
  )
  const data = await res.json()
  console.log(data)
  renderWeather(data)
}

const renderWeather = (data) => {
  display.innerHTML = `
        <div class="card mx-auto mt-5" style="width: 18rem;">
            <div class="card-body justify-content-center">
                <h5 class="card-title">${data.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${data.main.temp} °C</h6>
                <p class="card-text ">${data.weather[0].description}</p>
            </div>
        </div>
  `
}
