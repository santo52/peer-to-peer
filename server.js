const app = require('./app')
const port = 80
app.listen(port, () => {
    console.log(`🚀Server ready at http://localhost:${port}`);
});