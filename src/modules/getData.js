const getData = () => {
    return fetch('https://test-e6b54-default-rtdb.firebaseio.com/goods')
        .then((response) => {
            return response.json()
        })
}

export default getData