const request = require('postman-request')

const BASE_URL = 'https://coca-cola-api2.herokuapp.com'




let getAllProducts = (callback) => {
    request(`${BASE_URL}/productos`, (err, res, body) => {
        let parseProduct = JSON.parse(body)
        callback(parseProduct)
    })
}


// const getFilteredProducts = (callback) => {
//     request(`${BASE_URL}/productos`, (err, res, body) => {
//         const filteredProducts = JSON.parse(body).filter(el => el.type == 'Zero')
//         console.log(filteredProducts)
//         callback(filteredProducts)
//     })

// }


let singleProduct = (id, callback) => {
    request(`${BASE_URL}/comprar/${id}`, (err, res, body) => {
        const parseProducts = JSON.parse(body)
        callback(parseProducts)
    })

}



// const productos = [
//     {
//         id: 1,
//         nombre: 'Coca-Cola 250ml',
//         precio: 80
//     },
//     {
//         id: 2,
//         nombre: 'Coca-Cola 350ml',
//         precio: 120
//     },
//     {
//         id: 3,
//         nombre: 'Coca-Cola 500ml',
//         precio: 120
//     },
//     {
//         id: 4,
//         nombre: 'Coca-Cola 1 lt',
//         precio:  200
//     },
//     {
//         id: 5,
//         nombre: 'Coca-Cola 1.5 lt',
//         precio: 250
//     },
//     {
//         id: 6,
//         nombre: 'Coca-Cola 2.25 lt',
//         precio: 300
//     }
// ]



module.exports = {
    getAllProducts,
    singleProduct
}