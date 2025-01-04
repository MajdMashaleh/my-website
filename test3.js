//toggle icon nvbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = ()=> {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

//scroll section
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    //sticky header
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    //animate sections on scroll
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a');

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            //active section for animation on scroll
            sec.classList.add('show-animate');
        } else {
            sec.classList.remove('show-animate');
        }
    });
};
//scroll section
window.onscroll = ()=> {
    //sticky header
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    //remove toggle icon and nvbar when click on link (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    //animation footer on scroll
    let footer = document.querySelector('footer');

    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
}

document.addEventListener('DOMContentLoaded', () => {
    let lightmodeicon = document.querySelector('#lightmode-icon');
    let sunIcon = document.querySelector('#sun-icon');
    let moonIcon = document.querySelector('#moon-icon');

    if (lightmodeicon) {
        lightmodeicon.onclick = () => {
            document.body.classList.toggle('lightmode');
            if (document.body.classList.contains('lightmode')) {
                sunIcon.style.display = 'none';
                moonIcon.style.display = 'block';
            } else {
                sunIcon.style.display = 'block';
                moonIcon.style.display = 'none';
            }
        };

        // Set initial state based on current mode
        if (document.body.classList.contains('lightmode')) {
            sunIcon.style.display = 'none';
            moonIcon.style.display = 'block';
        } else {
            sunIcon.style.display = 'block';
            moonIcon.style.display = 'none';
        }
    }
});


//animation on scroll

ScrollReveal({ 
    reset: true,
    duration: 2000,
    distance: '80px',
    delay: 200
 });

ScrollReveal().reveal('.home-content, .heading' , { origin: 'top'});
ScrollReveal().reveal('.home-imgHover , .education-box , .skills-box , .portfolio-box , .contact from input-box', { origin: 'bottom'});
ScrollReveal().reveal(' .home-content h1 , .about-img img ,.home-sci ', { origin: 'left'});
ScrollReveal().reveal('.home-content p ,.home-content h3 , .about-content', { origin: 'right'});


    // Form submission functionality for email
    const form = document.getElementById('contact-form');
    const successMessage = document.getElementById('success-message');

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the default form submission

            const formData = new FormData(form);

            fetch(form.action, {
                method: 'POST',
                body: formData,
            })
            .then(response => response.text())
            .then(result => {
                if (result === 'Success') {
                    successMessage.style.display = 'block';
                    form.reset(); // Reset the form fields
                } else {
                    alert('There was an error sending your message. Please try again later.');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('There was an error sending your message. Please try again later.');
            });
        });
    }

    //optionas 
    document.addEventListener("DOMContentLoaded", () => {
        const viewButtons = document.querySelectorAll(".view-btn");
        const optionsSections = document.querySelectorAll(".options-section");
        const backButtons = document.querySelectorAll(".back-btn");
    
        viewButtons.forEach((btn) => {
            btn.addEventListener("click", (e) => {
                e.preventDefault();
                const targetId = btn.getAttribute("href").replace("#", "");
                optionsSections.forEach((section) => {
                    section.classList.remove("active");
                });
                document.getElementById(targetId).classList.add("active");
            });
        });
    
        backButtons.forEach((btn) => {
            btn.addEventListener("click", (e) => {
                e.preventDefault();
                optionsSections.forEach((section) => {
                    section.classList.remove("active");
                });
            });
        });
        
    });
    

    
    