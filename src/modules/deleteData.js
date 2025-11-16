const deleteData = () => {
    return fetch('https://test-e6b54-default-rtdb.firebaseio.com/goods/23', {
        method: 'DELETE'
    })
        .then(response => response.json())
}

export default deleteData