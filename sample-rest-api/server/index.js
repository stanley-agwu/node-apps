import express from 'express';
import bodyParser from 'body-parser';

import usersRoutes from './routes/users.js'

const app = express();
const PORT = 4000;

app.use(bodyParser.json());
app.use('/users', usersRoutes)

app.get('/', (req, res) => res.send("Hello from the Home Side!"));

app.listen(PORT, () => {
    console.log(`Server running on port: http://localhost:${PORT}`)
})
