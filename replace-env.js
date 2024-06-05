const fs = require('fs');
const path = require('path');

const targetPath = './src/environments/environment.ts';
const targetProdPath = path.join(__dirname, 'src/environments/environment.prod.ts');
const envConfigFile = `export const environment = {
  production: ${process.env.NODE_ENV === 'production'},
  apiUrl: '${process.env.API_URL}',
  akey: '${process.env.AKEY}'
};
`;

fs.writeFile(targetProdPath, envConfigFile, 'utf8', (err) => {
    if (err) {
      console.log('Error writing environment file', err);
    } else {
      console.log('Environment file written successfully');
    }
  });