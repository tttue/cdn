//Add in html <button onclick="gotoTop()" id="topBtn" class="btn-top" title="Go to top"><i class="fa fa-arrow-up"></i></button>

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() }

function scrollFunction() {
  //Get the button:
  var topButton = document.getElementById("topBtn")
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topButton.style.display = "block"
  } else {
    topButton.style.display = "none"
  }
}
// When the user clicks on the button, scroll to the top of the document
function gotoTop() {
  // document.body.scrollTop = 0; // For Safari
  // document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  scrollTo(0, 1000)
}

// Element to move, time in ms to animate
function scrollTo(element, duration) {
  var e = document.documentElement
  if (e.scrollTop === 0) {
    var t = e.scrollTop
    ++e.scrollTop
    e = t + 1 === e.scrollTop-- ? e : document.body
  }
  scrollToC(e, e.scrollTop, element, duration)
}

// Element to move, element or px from, element or px to, time in ms to animate
function scrollToC(element, from, to, duration) {
  if (duration <= 0) return
  if (typeof from === "object") from = from.offsetTop
  if (typeof to === "object") to = to.offsetTop

  scrollToX(element, from, to, 0, 1 / duration, 20, easeOutCuaic)
}

function scrollToX(element, xFrom, xTo, t01, speed, step, motion) {
  if (t01 < 0 || t01 > 1 || speed <= 0) {
    element.scrollTop = xTo
    return
  }
  element.scrollTop = xFrom - (xFrom - xTo) * motion(t01)
  t01 += speed * step
  setTimeout(function () {
    scrollToX(element, xFrom, xTo, t01, speed, step, motion)
  }, step)
}

function easeOutCuaic(t) {
  t--
  return t * t * t + 1
}
