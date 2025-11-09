import express from 'express';

const app = express();
app.use(express.json());

app.get('/api/hello', (req, res) => {
    res.json({message: "Ciao, il backend funziona!"})
})

const PORT = process.env.PORT || 3000;