const timeLbl = document.getElementById("timeD");
const dateLbl = document.getElementById("dateD");
let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

update();
setInterval(update, 1000);

function update(){
    let date = new Date();
    timeLbl.innerHTML = formatTime(date);
    dateLbl.innerHTML = formatDate(date);

    function formatTime(date){
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();

        hours = formatZeroes(hours);
        minutes = formatZeroes(minutes);
        seconds = formatZeroes(seconds);

        return `${hours}:${minutes}:${seconds}`
    }
    function formatDate(date){
        let year = date.getFullYear();
        let month = date.getMonth();
        let day = date.getDate();

        day = formatZeroes(day);

        return `${day}/${months[month]}/${year}`
    }
    function formatZeroes(time){
        time = time.toString();
        return time.length < 2 ? "0" + time : time;
    }
}