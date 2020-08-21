const deg = 6
const minute = document.getElementById("minute")
const hour = document.getElementById("hour")
const second = document.getElementById("second")

setInterval(() => {
  let date = new Date()
  let hourHand = date.getHours() * 30
  let minuteHand = date.getMinutes() * deg
  let secondHand = date.getSeconds() * deg

  hour.style.transform = `rotateZ( ${hourHand}deg )`
  minute.style.transform = `rotateZ( ${minuteHand}deg )`
  second.style.transform = `rotateZ( ${secondHand}deg )`
}, 1000)
