{
  const welcome = () => {
    console.log("Witam wszystkich developerów. Życzę miłego dnia");
  }

  const toogleBackground = () => {
    const body = document.querySelector(".js-body");
    const themeName = document.querySelector(".js-themeName");

    body.classList.toggle("dark");
    themeName.innerText = body.classList.contains("dark") ? "jasne" : "ciemne";
  };

  const init = () => {
    const changeBackgroundButton = document.querySelector(".js-button");
    changeBackgroundButton.addEventListener("click", toogleBackground);

    welcome();
  };

  init();
}