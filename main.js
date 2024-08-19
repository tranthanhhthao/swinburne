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
    }, 2500)
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

