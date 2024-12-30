// First task👇
// const fs = require('fs');
// const path = require('path');
// function folderExists(folderName) {
//     const folderPath = path.join(__dirname, folderName);
//     return fs.existsSync(folderPath) && fs.lstatSync(folderPath).isDirectory();
// }
// const folderName = 'example-folder'; 
// if (folderExists(folderName)) {
//     console.log(`${folderName} exists in the root directory.`);
// } else {
//     console.log(`${folderName} does not exist in the root directory.`);
// }



// Second task👇
// const express = require('express');
// const fs = require('fs');
// const path = require('path');
// const app = express();
// const PORT = 3000;
// app.get('/user-data', (_req, res) => {
//     const filePath = path.join(__dirname, 'data.json'); 
//     if (!fs.existsSync(filePath)) {
//         return res.status(404).send('Error: data.json file not found.');
//     }
//     fs.readFile(filePath, 'utf-8', (err, data) => {
//         if (err) {
//             return res.status(500).send('Error reading data.json file.');
//         }
//         try {
//             const jsonData = JSON.parse(data); 
//             res.json(jsonData);
//         } catch (parseError) {
//             res.status(500).send('Error parsing data.json file.');
//         }
//     });
// });
// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });



// Third task👇
// app.get('/random', (req, res) => {
//     const randomNumber = Math.floor(Math.random() * 100) + 1;
//     res.send(`Random number: ${randomNumber}`);
// });



// Fifth task👇
// app.get('/current-time', (req, res) => {
//     const currentTime = new Date().toISOString();
//     res.send(`Current time in ISO format: ${currentTime}`);
// });



// Sixth task👇
// app.get('/api', (req, res) => {
//     const data = [
//         { id: 1, name: "Nika", role: "Developer" },
//         { id: 2, name: "Luka", role: "Designer" },
//         { id: 3, name: "Giorgi", role: "Product Manager" },
//         { id: 4, name: "Vaso", role: "QA Engineer" }
//     ];
//     res.json(data);
// });