AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 700, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});
window.onload =  () => {
  let range = document.getElementById("range")
  range.addEventListener("input", function (event) {
    let col_size = event.target.value;
    document.querySelectorAll(".row .col").forEach(col => {
      var size, size_as_text;
      switch (Number(col_size)) {
        case 1:
          size = 2;
          size_as_text = "XS";
          break;
        case 2:
          size = 3;
          size_as_text = "S";
          break;
        case 3:
          size = 4;
          size_as_text = "M";
          break;
        case 4:
          size = 6;
          size_as_text = "L";
          break;
        case 5:
          size = 12;
          size_as_text = "XL";
      }
      col.className = "col col-" + size;
      document.getElementById("size").innerText = size_as_text
    })
  })
}