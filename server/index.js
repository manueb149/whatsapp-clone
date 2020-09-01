require('dotenv').config();
const { app, PORT } = require('./src');

app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
});