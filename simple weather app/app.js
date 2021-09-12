const input = document.querySelector(".input_text")
const btn = document.querySelector(".submit")

const city = document.querySelector(".name")
const temp = document.querySelector(".temp")

btn.addEventListener("click", getWeather)
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") getWeather()
})

async function getWeather() {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric&appid=713fcbf1f91cb4a374f991a0cfec2d64`
  )
  const data = await res.json()
  renderWeather(data)
}

function renderWeather(data) {
  const nameValue = data.name
  const tempValue = data.main.temp

  city.innerHTML = nameValue
  temp.innerHTML = `${tempValue} °C`
}
