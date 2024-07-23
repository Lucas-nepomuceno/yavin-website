function userScroll() {
    const navbar = document.querySelector('.navbar');
    const toTopButton = document.getElementById('to-top')

    window.addEventListener('scroll', () => {
        if(window.scrollY > 50) {
            navbar.classList.add('navbar-sticky');
            toTopButton.classList.add('show')
            
        } else {
            navbar.classList.remove('navbar-sticky');
            toTopButton.classList.remove('show')
        }
    })
}

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function incrementStats() {
    const counters = document.querySelectorAll('.counter');

    counters.forEach((counter) => {
        counter.innerText = 0;

        const updateCounter = () => {
            const target = +counter.getAttribute('data-target');
            const c = +counter.innerText;

            const increment = target/250;

            if(c < target) {
                counter.innerText = Math.ceil(c + increment)
                setTimeout(updateCounter, 1)
            } else {
                counter.innerText = target
            }

        }

        updateCounter()
    })
    
}

//Event Listeners
document.addEventListener('DOMContentLoaded', userScroll)
document.addEventListener('DOMContentLoaded', incrementStats)
const button = document.getElementById('to-top');
button.addEventListener('click', scrollToTop)
