import getData from "./getData.js"
import renderCart from "./renderCart.js"
import { priceFilter, checkBoxFilter } from "./filters.js"

const filter = () => {
    const minInput = document.getElementById('min')
    const maxInput = document.getElementById('max')
    const checkBoxInput = document.getElementById('discount-checkbox')
    const checkBoxSpan = document.querySelector('.filter-check_checkmark')

    minInput.addEventListener('input', () => {
        getData().then((data) => {
            renderCart(priceFilter(checkBoxFilter(data, checkBoxInput.checked), minInput.value, maxInput.value))
        })
    })

    maxInput.addEventListener('input', () => {
        getData().then((data) => {
            renderCart(priceFilter(checkBoxFilter(data, checkBoxInput.checked), minInput.value, maxInput.value))
        })
    })

    checkBoxInput.addEventListener('change', () => {
        if (checkBoxInput.checked) {
            checkBoxSpan.classList.add('checked')
        } else {
            checkBoxSpan.classList.remove('checked')
        }

        getData().then((data) => {
            renderCart(priceFilter(checkBoxFilter(data, checkBoxInput.checked), minInput.value, maxInput.value))
        })
    })
}

export default filter