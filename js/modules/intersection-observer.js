const animatedOnScroll = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('onView')
        } else {
            entry.target.classList.remove('onView')
        }
    })
},{threshold: 0.8})

export default animatedOnScroll