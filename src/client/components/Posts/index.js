const fetch = require('node-fetch');

// const api = async (uri) => {
//     const res = await fetch(uri);
//     return await res.json();
// }

// api('https://localhost:5050/blog').then((data) => {
//     console.log(data);
// }).catch(err => {console.log(err)})

fetch('https://localhost:5050/blog')
.then(res => {console.log(res)})
.catch(err => {console.log(err)})