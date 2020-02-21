const clock = document.querySelector('.clock');
const options = {  
    hour: "2-digit", minute: "2-digit", second: "2-digit"
};  
const showClock = () => clock.innerText = (new Date()).toLocaleTimeString("uk", options);
setInterval(showClock, 1000);