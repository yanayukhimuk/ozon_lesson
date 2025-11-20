import getData from "./getData.js"
import renderGoods from "./renderGoods.js"

const load = () => {

    const counter = document.querySelector('.counter')
    const cart = localStorage.getItem('cart') ?
        JSON.parse(localStorage.getItem('cart')) : []

    counter.textContent = +cart.length

    getData().then((data) => {
        localStorage.setItem('goods', JSON.stringify(data))
        renderGoods(data)
    })
}

export default load