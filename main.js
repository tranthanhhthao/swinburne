const tl = gsap.timeline({ defaults: { ease: "power1.out", duration: 0.4 } });

tl
    .to('.name h1', {
        duration: 1,
        opacity: 1, 
        y: "-50%",
        ease: 'elastic.out(1, 0.5)'
    })
    .to('.name h2', {
        duration: 1,
        opacity: 1, 
        y: "-50%",
    }, "-=0.7")
    .to('.name h3', {
        duration: 1.3,
        opacity: 1, 
        x: "-50%",
        ease: 'elastic.out(1, 0.5)'
    }, "-=0.7")
    .to('.nav', {
        duration: .6,
        opacity: 1, 
    }, "+=1")

// preloader
const buttonContact = document.getElementById('click-contact');
const buttonProjects = document.getElementById('click-projects');

const preloaderTl = gsap.timeline({ defaults: { ease: "power1.out", duration: 0.4 } });

function delayToLink(URL) {
    setTimeout(() => {
        window.location.href = URL;
    }, 2000)
}

buttonContact.addEventListener('click', () => {
    gsap.set('.preload', {
        y: '-100%',
        backgroundColor: getComputedStyle(document.body).getPropertyValue('--yellow-first'),
    })

    preloaderTl
        .to('.preload', {
            y: '0%',
            duration: 2,
            display: 'block',
            ease: 'elastic.out(1, 0.5)',
            delay: 0.3,
        })

    delayToLink('https://tranthanhhthao.github.io/swinburne-contact/')

});

buttonProjects.addEventListener('click', () => {
    gsap.set('.preload', {
        y: '100%',
        backgroundColor: getComputedStyle(document.body).getPropertyValue('--blue-bg'),
    })

    preloaderTl
        .to('.preload', {
            y: '0%',
            duration: 2,
            display: 'block',
            ease: 'elastic.out(1, 0.5)',
            delay: 0.3,
        })
    
    delayToLink('https://tranthanhhthao.github.io/swinburne-projects/')
});    

// button hover
const btnWrappers = gsap.utils.toArray('.button-wrapper');
const btns = gsap.utils.toArray('.nav');

// mouse move 
function activateMagneto(event, element) {
    let boundBox = element.getBoundingClientRect();
    const magnetoStrength = 50;

    const newX = ((event.clientX - boundBox.left)/(boundBox.width) - 0.5)
    const newY = ((event.clientY - boundBox.top)/(boundBox.height) - 0.5)

    gsap.to(element, {
        x: newX * magnetoStrength,
        y: newY * magnetoStrength,
        duration: 0.2,
        ease: 'power1.inOut'
    });                    
}

// mouse leave 
function resetMagneto(event, element) {
    gsap.to(element, {
        x: 0,
        y: 0,
        duration: 2,
        ease: 'elastic.out(1, 0.3)'
    });
}

// Add event listeners
btnWrappers.forEach(btnWrapper => {
    btnWrapper.addEventListener('mousemove', (e) => {
        activateMagneto(e, btnWrapper.querySelector('.nav'));
    });

    btnWrapper.addEventListener('mouseleave', (e) => {
        resetMagneto(e, btnWrapper.querySelector('.nav'));
    })
})