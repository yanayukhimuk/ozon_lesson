import getData from "./getData.js"
import renderCart from "./renderCart.js"

const load = () => {
    const cartBtn = document.getElementById('cart')

    getData().then((data) => {
        localStorage.setItem('goods', JSON.stringify(data))
        renderCart(data)
    })
}

export default load