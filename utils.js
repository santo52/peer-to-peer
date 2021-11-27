const fs = require('fs')
const axios = require('axios')

function query({ method, url, body }) {
    const headers = { headers: { 'Content-Type' : 'application/json'  }}
    return axios[method](url, body, headers).then(res => res.data.total).catch(_err => [])
}

function totalized(array) {
    return array.reduce((initial, value) => (value + initial), 0)
}

async function getTimestamp() {
    return new Promise(resolve => {
        fs.readFile('../timestamp', 'utf8' , (err, data) => {
            if (err) return resolve('')
            resolve(data)
        })
    })
}

async function saveTimestamp( value ) {
    return new Promise(resolve => {
        fs.writeFile('../timestamp', String(value), _err => resolve(true))
    })
}

module.exports = {
    query,
    totalized,
    getTimestamp,
    saveTimestamp
}