let nameOfcity = document.querySelector(".name");
let temp = document.querySelector(".temp");
let condition = document.querySelectorAll("p")[0];
let flag = document.querySelector("img");

document.querySelector("button").addEventListener("click", lol);
document.addEventListener("keypress", (e) => {
  if (e.code === "Enter" || e.charCode === 13) {
    lol();
  }
});
function lol() {
  let search = document.querySelector("input").value;
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=6b157cd475fb5dc09bd04bb0a27891ec`
  ).then((response) => {
    response
      .json()
      .then((data) => {
        tempInC = data.main.temp - 273.15;
        nameOfcity.textContent = `${data.name}, ${data.sys.country}`;
        temp.textContent = `${tempInC.toFixed(1)} °C`;
        condition.textContent = `${data.weather[0].main}`;
        flag.src = `https://www.countryflags.io/${data.sys.country}/shiny/64.png`;
        console.log(data);
      })
      .catch(() => {
        tempInC = "";
        condition.textContent = "";
        flag.src = "";
        temp.textContent = "";
        nameOfcity.textContent = "Oopsy, can't find anything";
      });
  });
}
