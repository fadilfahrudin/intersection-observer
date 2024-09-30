import  animatedOnScroll  from "./modules/intersection-observer.js";

document.addEventListener('DOMContentLoaded', () => {
    animatedOnScroll.observe(document.getElementById('targetOne'))
    animatedOnScroll.observe(document.getElementById('targetTwo'))
    animatedOnScroll.observe(document.getElementById('targetThree'))
})