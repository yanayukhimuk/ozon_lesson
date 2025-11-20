import getData from "./getData.js"
import renderCart from "./renderCart.js"
import { searchFilter } from "./filters.js"

const search = () => {
    const searchInput = document.querySelector('.search-wrapper_input')

    searchInput.addEventListener('input', (event) => {
        const value = event.target.value;

        getData().then((data) => {
            renderCart(searchFilter(data, value))
        })
    })
}

export default search