/*!
=========================================================
* FoodHut Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function () {
  $(".navbar .nav-link").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        700,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});

new WOW().init();

function initMap() {
  var uluru = { lat: 37.227837, lng: -95.700513 };
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 8,
    center: uluru,
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}

// Typed animating
var type = new Typed(".typing", {
  strings: [
    "More than just a resort",
    "Bringing you closer to nature",
    "Relaxing Destination",
  ],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});

var type = new Typed(".typing__two", {
  strings: ["Web Developer", "Web Designer", "Mobile App Developer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});

var type = new Typed(".typing-3", {
  strings: ["Experiences.", "Skills"],
  typeSpeed: 110,
  backSpeed: 70,
  loop: true,
});

var type = new Typed(".typing__four", {
  strings: ["Get in Touch", "Leave a Comment"],
  typeSpeed: 110,
  backSpeed: 70,
  loop: true,
});
