import express from 'express';

const app = express();
const PORT = process.env.PORT || ${{ values.port }};

app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    service: '${{ values.name }}',
    timestamp: new Date().toISOString()
  });
});

// Main API endpoint
app.get('/api/v1/status', (req, res) => {
  res.json({
    service: '${{ values.name }}',
    description: '${{ values.description }}',
    version: '1.0.0',
    owner: '${{ values.owner }}'
  });
});

app.listen(PORT, () => {
  console.log(`${{ values.name }} is running on port ${PORT}`);
});
