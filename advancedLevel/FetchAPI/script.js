"use strict";

// for GET
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json));

// for POST
fetch('https://jsonplaceholder.typicode.com/posts', {
    // 2 обязательных
    method: 'POST',
    body: JSON.stringify({ name: 'Alex' }),
    headers: {
        'Content-type': 'application/json'
    }
})
    .then(response => response.json())
    .then(json => console.log(json));