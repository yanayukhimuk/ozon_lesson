const deleteData = () => {
    return fetch('https://test-e6b54-default-rtdb.firebaseio.com/goods/23.json', {
        method: 'DELETE'
    })
        .then(response => response.json())
}

export default deleteData