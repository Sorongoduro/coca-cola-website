const hamburguer = document.querySelector('.hamburguer')
const slideMenu = document.querySelector('.hamburguer-slide')
const cartItem = document.querySelector('.cart-item')

let clickOnMenu = hamburguer.addEventListener('click', function () {
    hamburguer.classList.toggle('active')
    slideMenu.classList.toggle('active')
    cartItem.classList.toggle('visible')
})

const faq = document.querySelector('.faq')
const faqIcon = document.querySelector('.faq-icon')
const faqSVG = document.querySelector('.faq-svg')
const faqExit = document.querySelector('.faq-exit')
const goBack = document.querySelector('.go-back')
const footer = document.querySelector('footer')

if (window.matchMedia("(max-width: 1980px)").matches) {
    window.onscroll = () => { scrollDocument() }
    let scrollDocument = () => {

        if (document.body.scrollTop >= 4200 || document.documentElement.scrollTop >= 4200) {
            faqSVG.classList.remove('faq-bg-animation-rev')
            faqSVG.classList.add('faq-bg-animation')
        } else if (window.pageYOffset < 4200) {
            faqSVG.classList.remove('faq-bg-animation')
            faqSVG.classList.add('faq-bg-animation-rev')
        }


        if (document.body.scrollTop >= 4100 || document.documentElement.scrollTop >= 4100) {
            goBack.classList.remove('down-animation-rev')
            goBack.classList.add('down-animation')
        } else if (window.pageYOffset < 4100) {
            goBack.classList.remove('down-animation')
            goBack.classList.add('down-animation-rev')
        }
    }
}

if (window.matchMedia("(max-width: 1440px)").matches) {
    window.onscroll = () => { scrollDocument() }
    let scrollDocument = () => {

        if (document.body.scrollTop >= 4000 || document.documentElement.scrollTop >= 4000) {
            faqSVG.classList.remove('faq-bg-animation-rev')
            faqSVG.classList.add('faq-bg-animation')
        } else if (window.pageYOffset < 4000) {
            faqSVG.classList.remove('faq-bg-animation')
            faqSVG.classList.add('faq-bg-animation-rev')
        }



        if (document.body.scrollTop >= 3900 || document.documentElement.scrollTop >= 3900) {
            goBack.classList.remove('down-animation-rev')
            goBack.classList.add('down-animation')
        } else if (window.pageYOffset < 3900) {
            goBack.classList.remove('down-animation')
            goBack.classList.add('down-animation-rev')
        }
    }
}

if (window.matchMedia("(max-width: 1024px)").matches) {
    window.onscroll = () => { scrollDocument() }
    let scrollDocument = () => {

        if (document.body.scrollTop > 5880 || document.documentElement.scrollTop > 5880) {
            faqSVG.classList.remove('faq-bg-animation-rev')
            faqSVG.classList.add('faq-bg-animation')
        } else if (window.pageYOffset < 5880) {
            faqSVG.classList.remove('faq-bg-animation')
            faqSVG.classList.add('faq-bg-animation-rev')
        }
    }
} 

if (window.matchMedia("(max-width: 768px)").matches) {
    window.onscroll = () => { scrollDocument() }
    let scrollDocument = () => {

        if (document.body.scrollTop > 6750 || document.documentElement.scrollTop > 6750) {
            faqSVG.classList.remove('faq-bg-animation-rev')
            faqSVG.classList.add('faq-bg-animation')
        } else if (window.pageYOffset < 6750) {
            faqSVG.classList.remove('faq-bg-animation')
            faqSVG.classList.add('faq-bg-animation-rev')
        }
    }
} 

if (window.matchMedia("(max-width: 425px)").matches || window.matchMedia("(max-width: 375px)").matches || window.matchMedia("(max-width: 320px)").matches) {
    window.onscroll = () => { scrollDocument() }
    let scrollDocument = () => {

        if (document.body.scrollTop > 9700 || document.documentElement.scrollTop > 9700) {
            faqIcon.classList.remove('down-animation-rev')
            faqIcon.classList.add('down-animation')
        } else if (window.pageYOffset < 9700) {
            faqIcon.classList.add('down-animation-rev')
            faqIcon.classList.remove('down-animation')
        }
    }
} 


faqIcon.addEventListener('click', () => {
    faq.classList.remove('oov')
})


faqExit.addEventListener('click', () => {
    faq.classList.add('oov')

})


