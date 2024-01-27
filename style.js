document.addEventListener("DOMContentLoaded", function() {

    const scrollDuration = 2000;
    const viewportHeight = window.innerHeight;

    // Check if the page has been refreshed
    if (performance.navigation.type === 1) {
        // Scroll to the top of the first page when the page is refreshed
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    // Scroll to the second page after a delay (your existing setTimeout code)
    setTimeout(() => {
        window.scrollTo({
            top: viewportHeight * 2,
            behavior: "smooth"
        });
    }, scrollDuration);

    gsap.registerPlugin(ScrollTrigger);

    gsap.to("#page1", {
        backgroundColor: "#000",
        scrollTrigger: {
            trigger: "#page1",
            start: "top -60%",
            end: "top -80%",
            scrub: 1,
        },
    });

    gsap.to("#para p", {
        backgroundColor: "transparent",
        duration: 0.5,
        height: "90px",
        scrollTrigger: {
            trigger: "#para",
            start: "top 18%",
            scrub: true,
        }
    });

    
    // Add your other GSAP and ScrollTrigger animations here...

    // Scroll to the top of the first page when the link is clicked
    document.querySelector('a').addEventListener('click', function(event) {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

});
