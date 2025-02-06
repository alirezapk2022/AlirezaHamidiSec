"use strict";

// Get the modal
var modal = document.getElementById("contact-modal");

// Get the link that opens the modal
var link = document.getElementById("contact-link");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the link, open the modal
link.onclick = function (event) {
  event.preventDefault();
  document.body.classList.add("modal-open");
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  document.body.classList.remove("modal-open");
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    document.body.classList.remove("modal-open");
    modal.style.display = "none";
  }
};
