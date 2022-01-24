const hamburguer = document.querySelector('.hamburguer')
const slideMenu = document.querySelector('.hamburguer-slide')
const cartItem = document.querySelector('.cart-item')


let = clickOnMenu = hamburguer.addEventListener('click', function () {
    hamburguer.classList.toggle('active')
    slideMenu.classList.toggle('active')
    cartItem.classList.toggle('visible')

})

const sum = document.querySelector('.sum')
const sub = document.querySelector('.sub')
let price = document.querySelector('.price')
let result = document.querySelector('.changing-num')

result.textContent = 1


let addCart = () => {
    if (result.textContent < 20) {
        result.textContent++
    }


}

let removeCart = () => {
    if (result.textContent > 1) {
        result.textContent--
    }
}


let total = parseInt(price.textContent)
let array = [price.textContent]
let clonArray = []
clonArray.push(array)
parsedPrice = parseInt(clonArray[0])
let sumQuantity = () => {
    if (result.textContent <= 20 && price.textContent < parsedPrice * 20) {
        total = parsedPrice + total
        price.textContent = total
    }
}

let subQuantity = () => {
    if (result.textContent >= 1 && price.textContent > parsedPrice) {
        total = total - parsedPrice
        price.textContent = total
    }
}

sum.addEventListener('click', (e) => {
    if (e) {
        addCart()
        sumQuantity()
        // let originalArray = [price]
        // let cloneArray = []
        // cloneArray.push(originalArray[0])
        // cloneArray[0].textContent = price.textContent
        // price.textContent = price.textContent + cloneArray[0].textContent
        // result.textContent++
    }
})


sub.addEventListener('click', (e) => {
    if (e) {
        removeCart()
        subQuantity()
    }
})

const faq = document.querySelector('.faq')
const faqIcon = document.querySelector('.faq-icon')
const faqSVG = document.querySelector('.faq-svg')
const faqExit = document.querySelector('.faq-exit')



if (window.matchMedia("(max-width: 1980px)").matches || window.matchMedia("(max-width: 1440px)").matches) {
    window.onscroll = () => { scrollDocument() }
    let scrollDocument = () => {

        if (document.body.scrollTop > 75 || document.documentElement.scrollTop > 75) {
            faqSVG.classList.remove('faq-bg-animation-rev')
            faqSVG.classList.add('faq-bg-animation')
        } else if (window.pageYOffset < 75) {
            faqSVG.classList.remove('faq-bg-animation')
            faqSVG.classList.add('faq-bg-animation-rev')
        }

    }
}
if (window.matchMedia("(max-width: 1024px)").matches) {
    window.onscroll = () => { scrollDocument() }
    let scrollDocument = () => {

        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            faqSVG.classList.remove('faq-bg-animation-rev')
            faqSVG.classList.add('faq-bg-animation')
        } else if (window.pageYOffset < 200) {
            faqSVG.classList.remove('faq-bg-animation')
            faqSVG.classList.add('faq-bg-animation-rev')
        }



    }
}
if (window.matchMedia("(max-width: 768px)").matches) {
    window.onscroll = () => { scrollDocument() }
    let scrollDocument = () => {

        if (document.body.scrollTop > 210 || document.documentElement.scrollTop > 210) {
            faqSVG.classList.remove('faq-bg-animation-rev')
            faqSVG.classList.add('faq-bg-animation')
        } else if (window.pageYOffset < 210) {
            faqSVG.classList.remove('faq-bg-animation')
            faqSVG.classList.add('faq-bg-animation-rev')
        }
    }
}

if (window.matchMedia("(max-width: 425px)").matches || window.matchMedia("(max-width: 375px)").matches || window.matchMedia("(max-width: 320px)").matches) {
    window.onscroll = () => { scrollDocument() }
    let scrollDocument = () => {

        if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
            faqIcon.classList.remove('down-animation-rev')
            faqIcon.classList.add('down-animation')
        } else if (window.pageYOffset < 250) {
            faqIcon.classList.add('down-animation-rev')
            faqIcon.classList.remove('down-animation')
        }

    }
} 

if (window.matchMedia("(max-width: 375px)").matches || window.matchMedia("(max-width: 320px)").matches) {
    window.onscroll = () => { scrollDocument() }
    let scrollDocument = () => {

        if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
            faqIcon.classList.remove('visible')
        } else if (window.pageYOffset < 400) {
            faqIcon.classList.add('visible')
        }
    }
}

if (window.matchMedia("(max-width: 320px)").matches || window.matchMedia("(max-width: 320px)").matches) {
    window.onscroll = () => { scrollDocument() }
    let scrollDocument = () => {
        if (document.body.scrollTop > 530 || document.documentElement.scrollTop > 530) {
            faqIcon.classList.remove('visible')
        } else if (window.pageYOffset < 530) {
            faqIcon.classList.add('visible')
        }
    }
}

faqIcon.addEventListener('click', () => {
    faq.classList.remove('oov')
})

faqExit.addEventListener('click', () => {
    faq.classList.add('oov')
})

