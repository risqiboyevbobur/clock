let section = document.querySelector("section")
let icons = document.querySelector(".icons")
let  fasun = document.querySelector(".fa-sun")
let  famoon = document.querySelector(".fa-moon")



famoon.onclick = () => {
   section.classList.toggle("dark")
}

setInterval(()=>{
let date = new Date();
hour = date.getHours()
min = date.getMinutes()
secund = date.getSeconds()


let d;
d = hour < 12 ? "AM" :  'PM'
hour = hour > 12 ? hour - 12 : hour
hour = hour == 0 ? hour = 12 : hour 


secund = secund < 10 ? "0" + secund : secund
hour = hour < 10 ? "0" + hour : hour
min = min < 10 ? "0" + min : min





document.querySelector(".hour_num").innerText = hour
document.querySelector(".minute_num").innerText = min
document.querySelector(".second_num").innerText = secund
document.querySelector(".am_pm").innerText = d

},1000)

