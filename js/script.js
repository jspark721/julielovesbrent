
// get the wedding date
const weddingDate = new Date("Oct 14, 2018 17:00:00").getTime();

// countdown
let sec = setInterval(function() {

  // get today's date
  const rightNow = new Date().getTime();

  // get the difference
  const diff = weddingDate - rightNow;

  // math
  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diff % (1000 * 60)) / 1000);

  // display
  document.getElementById("countdown").innerHTML =
    "<div class=\"countdown-wrap\">\
       <div class=\"countdown-days\"> \
          <div class=\"numbers\">" + days + "</div>days</div> \
       <div class=\"countdown-hours\"> \
          <div class=\"numbers\">" + hours + "</div>hours</div> \
       <div class=\"countdown-minutes\"> \
          <div class=\"numbers\">" + minutes + "</div>minutes</div> \
       <div class=\"countdown-seconds\"> \
          <div class=\"numbers\">" + seconds + "</div>seconds</div> \
     </div>\
     <h4>We can't wait to celebrate with everyone!</h4> ";

  // after the wedding is over
  if (diff < 0) {
    clearInterval(sec);
    document.getElementById("hide").style.display = "none";
    document.getElementById("countdown").innerHTML = "<h3>got married " + -(days) + " days ago!</h3>";
  }
}, 1000);
