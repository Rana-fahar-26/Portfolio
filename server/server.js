import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Portfolio API system active' });
});

app.listen(PORT, () => {
  console.log(`[API Engine] Running on http://localhost:${PORT}`);
});
