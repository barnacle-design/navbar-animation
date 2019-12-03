const animatedTags = document.querySelectorAll("h2, h3, p, section img, a.button");

// fade out on load

animatedTags.forEach(tag => {
    tag.style.opacity = 0;
})

const fadeIn = function() {
    // loop through all animated tags
    // see if its in the window

    let delay = 0.25;

    animatedTags.forEach(tag => {
        const tagTop = tag.getBoundingClientRect().top;
        const tagBottom = tag.getBoundingClientRect().bottom;

        // console.log(tagTop, tagBottom);

        if (tagTop < window.innerHeight && tagBottom > 0) {
            tag.style.animation = `fadein 1s ${delay}s both`;
            delay = delay + 0.25;
        } else {
            tag.style.opacity = 0;
            tag.style.animation = "";
        }
    })
}

// on load and scroll
fadeIn();
document.addEventListener("scroll", function () {
    fadeIn();
})

// on browser resize
window.addEventListener("resize", function () {
    fadeIn();
})