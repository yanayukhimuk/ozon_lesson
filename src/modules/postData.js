const postData = async (cart) => {
    const response = await fetch('https://test-e6b54-default-rtdb.firebaseio.com/goods.json', {
        method: 'POST',
        body: JSON.stringify(cart),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    return await response.json()
}

export default postData