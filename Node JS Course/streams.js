const fs = require('fs');

const readStream = fs.createReadStream('./Node JS Course/docs/blog3.txt', {encoding: 'utf8'});
const writeStream = fs.createWriteStream('./Node JS Course/docs/blog4.txt');

//---------------------------------------//
/* When you get a chunk of data you fire
the callback function                    */
//---------------------------------------//
// readStream.on('data', (chunk) => {
//     console.log('-------- NEW CHUNCK -------');
//     console.log(chunk);
//     writeStream.write('\n NEW CHUNK \n');
//     writeStream.write(chunk);
// });

// Piping:
//---------------------------------------//
/* Essentially to do the above in one
simple line.                             */
//---------------------------------------//
readStream.pipe(writeStream);