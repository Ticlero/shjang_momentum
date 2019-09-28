const clockContainer = document.querySelector(".js-clock"),
clockTitle = clockContainer.querySelector(".js-title");

const getTime = () =>
{
    const date = new Date();
    const HOUR = date.getHours();
    const MINUTES = date.getMinutes();
    const SECONDS = date.getSeconds();
    const TIME = 
    `${HOUR < 10 ? `0${HOUR}`:HOUR}:${MINUTES < 10 ? `0${MINUTES}`: MINUTES}:${SECONDS < 10 ?`0${SECONDS}`:SECONDS}`;
    clockTitle.innerHTML = TIME;
    
}
const clockInit = () => {
    getTime();
    setInterval(getTime,1000);
}

clockInit();
