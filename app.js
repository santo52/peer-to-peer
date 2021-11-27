const express = require('express')
const cors = require('cors')


const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(cors());


const { 
    query,
    totalized,
    getTimestamp,
    saveTimestamp 
} = require('./utils');

var numberList = []
var ipConnected = []

app.post("/api/config", (req, res) => {
    numberList = req.body.numbers || []
    ipConnected = req.body.ip || []
    res.json({ numbers: numberList, ip: ipConnected });
})

app.get("/api/config", async (req, res) => {
    res.json({ numbers: numberList, ip: ipConnected });
})

app.post("/api/number/sum", async (req, res) => {
    
    const savedTimestamp = await getTimestamp()
    if(req.body.timestamp && req.body.timestamp == savedTimestamp) {
        return res.json({ total: 0 });
    }

    const timestamp = req.body.timestamp || new Date().getTime()
    saveTimestamp(timestamp)

    let result = []
    for(ip of ipConnected) {
        const res = await query({ url: `http://${ip}/api/number/sum`, method: 'post', body: { timestamp }})
        result.push(res)
    }

    const arrayNumbers = result.concat(numberList)
    return res.json({ total: totalized(arrayNumbers) });
})


module.exports = app