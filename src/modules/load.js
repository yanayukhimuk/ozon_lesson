import getData from "./getData.js"
import renderGoods from "./renderGoods.js"

const load = () => {
    const cartBtn = document.getElementById('cart')

    getData().then((data) => {
        localStorage.setItem('goods', JSON.stringify(data))
        renderGoods(data)
    })
}

export default load