// сделаем функцию для общения с сервером
const postData = async (url, data) => {
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: data
    });

    return await res.json();
};

// создадим функцию get запросов
export const getResource = async (url) => {
    const res = await fetch(url);

    if (!res.ok) { // в ручном режиме выкидываем ошибку
        throw new Error(`Could not fetch ${url}, status ${res.status}`);
    }

    return await res.json();
};

export { postData };