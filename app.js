const express = require('express')
const app = express()
const productos = require('./utils/productos')
const path = require('path')
const port = process.env.PORT || 3000



app.set('views', path.join(__dirname, 'views'))

app.use(express.static(path.join(__dirname, 'public')))

app.set('view engine', 'ejs')


app.get('', (req, res) => {
    productos.getAllProducts((data) => {
        let original = []
        let light = []
        let zero = []
        data.forEach(element => {
            if (element.type == 'Zero') {
                zero.push(element)
            } else if (element.type == 'Light') {
                light.push(element)
            } else {
                original.push(element)
            }
        })
        res.render('index', {
            title: 'Coca-Cola Argentina No-Oficial',
            zero,
            light,
            original
        })
    });

})

// app.get('', (req, res) => {
//     productos.getOriginal((productos) => {
//         res.render('index', {
//             title: 'Oficial',
//             original: productos,
//             zero: productos,
//             light: productos
//         })
//     })
// })
// res.render('index', {
//     title: 'Oficial',
// productos: productos

// })

app.get('/admin', (req, res) => {
    res.render('./pages/admin')
})


app.get('/comprar/:id', (req, res) => {
    const id = req.params.id
    productos.singleProduct(id, (productos) => {
        res.render('./pages/buy', {
            title: 'Coca-Cola Argentina No-Oficial',
            productos
        })
    })
})


app.listen(port, () => {
    console.log('Escuchando en el puerto ' + port)
})