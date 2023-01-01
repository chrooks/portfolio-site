gsap.registerPlugin(ScrollTrigger);

console.log("Testing JS functionality");

gsap.utils.toArray("experience-body").array.forEach(experienceBody => {
    let hover = gsap.to(experienceBody, {
        duration: 1,
        color: "blue"
    });
    experienceBody.addEventListener('mouseenter', () => hover.play())
    experienceBody.addEventListener('mouseleave', () => hover.reverse())
    console.log("Hover event registered to experience body")
});