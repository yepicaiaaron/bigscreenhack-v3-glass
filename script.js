document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    // Evolution Section - Scroll Reveal Logic
    const timeline = gsap.timeline({
        scrollTrigger: {
            trigger: ".evolution-section",
            start: "top top",
            end: "+=2000",
            scrub: 1,
            pin: true,
        }
    });

    // Initial state: Filmmaker track is full width
    // Scroll State 2: Builder panel slides in to cover the right half
    timeline.to(".builder-panel", {
        x: 0, 
        duration: 1,
        ease: "power2.inOut"
    });

    // Make the Filmmaker track shrink to the left half
    timeline.to(".filmmaker-panel", {
        width: "50%",
        duration: 1,
        ease: "power2.inOut"
    }, "<");

    // Scroll State 3: The Convergence message appears
    timeline.to(".convergence-msg", {
        opacity: 1,
        y: -50,
        duration: 0.5,
        ease: "power1.out"
    });

    // Add simple fade-in for events and judges
    gsap.utils.toArray(".event-card").forEach(card => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: "top 90%",
            },
            y: 50,
            opacity: 0,
            duration: 0.8
        });
    });

    gsap.utils.toArray(".judge").forEach((judge, i) => {
        gsap.from(judge, {
            scrollTrigger: {
                trigger: ".judges-grid",
                start: "top 80%",
            },
            y: 30,
            opacity: 0,
            duration: 0.6,
            delay: i * 0.1
        });
    });
});