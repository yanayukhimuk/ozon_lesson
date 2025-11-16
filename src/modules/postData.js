const postData = () => {
    return fetch('https://test-e6b54-default-rtdb.firebaseio.com/goods', {
        method: 'POST',
        body: JSON.stringify({
            title: "Игра Onrush (PS4 Sony)",
            price: 1794,
            sale: true,
            img: "https://cdn1.ozone.ru/multimedia/c400/1023547851.jpg",
            category: "Игры и софт"
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then(response => response.json())
}

export default postData