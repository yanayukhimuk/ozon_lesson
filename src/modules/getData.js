const getData = async () => {
    const response = await fetch('https://test-e6b54-default-rtdb.firebaseio.com/goods.json')
    return await response.json()
}

export default getData