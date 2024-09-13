const express = require('express');
const index = express();

index.get('/', (req, res) => {
    res.send('Hello, World');
  });

index.listen(3000, () => console.log('listen on port 3000'));
