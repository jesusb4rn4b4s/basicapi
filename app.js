import express from 'express';

const PORT = 3000;
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.json("Üdvözöllek az oldalamon!")
});

app.listen(PORT, () => {
    console.log(`Fut a szerver a dagimajerniken: ${PORT}`);
});