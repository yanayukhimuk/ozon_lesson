import getData from "./getData.js"
import renderCart from "./renderCart.js"
import { categoryFilter } from "./filters.js"

const catalog = () => {
    const btnCatalog = document.querySelector('.catalog-button > button')
    const mdlCatalog = document.querySelector('.catalog')
    const mdlCatalogItems = document.querySelectorAll('.catalog li')

    let isOpen = false

    btnCatalog.addEventListener('click', () => {
        isOpen = !isOpen

        if (isOpen) {
            mdlCatalog.style.display = 'block'
        }
        else {
            mdlCatalog.style.display = ''
        }
    })

    mdlCatalogItems.forEach(item => {
        item.addEventListener('click', () => {
            const text = item.textContent

            getData().then((data) => {
                renderCart(categoryFilter(data, text))
            })
        })
    })
}

export default catalog