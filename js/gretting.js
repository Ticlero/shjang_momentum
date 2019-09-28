const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings"),
    clock = document.querySelector(".js-clock").querySelector(".js-title");

const USER_LS = 'name',
    SHOWING_CN = "showing";
    COLOR = 'greeting-color';

const paintGreeting = (text) => {
    form.classList.remove(SHOWING_CN)
    greeting.classList.add(SHOWING_CN);
    greeting.classList.add(COLOR);
    const time = clock.innerHTML.split(':');
    const hour = parseInt(time[0]);
    let welecomComment = "";

    if (hour > 5 && hour < 12)
        welecomComment = "Good Morning, ";
    else if (hour >= 12 && hour <= 18)
        welecomComment = "Good Afternoon, ";
    else if (hour < 6 || hour > 18)
        welecomComment = "Good Evening, ";

    greeting.innerHTML = `${welecomComment}${text}`;

}

const askForName = () => {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", (event) => {
        console.log(event);
        if (input.value !== "" || input.value !== null || input.value !== undefined) {
            localStorage.setItem(USER_LS, input.value);
            paintGreeting(input.value);
        } else {
            event.preventDefault();
        }

    })
}

const loadName = () => {
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null) {
        //men is not
        askForName();
    } else {
        paintGreeting(currentUser);
    }
}
const grettingInit = () => {
    loadName();
    setInterval(loadName, 1000*3600);
}

grettingInit();