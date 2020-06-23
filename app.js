let nameOfcity = document.querySelector(".name");
let temp = document.querySelector(".temp");
let condition = document.querySelectorAll("p")[0];
let flag = document.querySelector("img");

document.querySelector("button").addEventListener("click", lol);
document.addEventListener("keypress", (e) => {
  if (e.code === "Enter" || e.charCode === 13) {
    lol().catch(() => {
      tempInC = "";
      condition.textContent = "";
      flag.src = "";
      temp.textContent = "";
      nameOfcity.textContent = "Oopsy, can't find anything";
    });
  }
});
async function lol() {
  try {
    let search = document.querySelector("input").value;
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=6b157cd475fb5dc09bd04bb0a27891ec`
    );
    tempInC = res.data.main.temp - 273.15;
    nameOfcity.textContent = `${res.data.name}, ${res.data.sys.country}`;
    temp.textContent = `${tempInC.toFixed(1)} °C`;
    condition.textContent = `${res.data.weather[0].main}`;
    flag.src = `https://www.countryflags.io/${res.data.sys.country}/shiny/64.png`;
    console.log(res);
  } catch (err) {
    tempInC = "";
    condition.textContent = "";
    flag.src = "";
    temp.textContent = "";
    nameOfcity.textContent = "Oopsy, can't find anything";
  }
}
