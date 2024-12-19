//---------------------------------------//
/* Similar to the people.js tab, this is
one of the core systems                  */
//---------------------------------------//
const fs = require('fs');

// Reading files.

//-----------------------------------------//
/* This is an asynchronous function so it can
carry on with the code below the function. 
When the task is done, in this case reading, it would
fire back the contents in the () => {} part */
//-----------------------------------------//
// fs.readFile('./docs/blog1.txt', (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data);
// });

// Writing files.
// fs.writeFile('./docs/blog1.txt', 'hello, world', (err, data) => {
//     console.log('File was written');
// });

//---------------------------------------//
/* Just creates a new txt file for you   */
//---------------------------------------//
// fs.writeFile('./docs/blog1.txt', 'hello, world', (err, data) => {
//     console.log('File was written');
// });

// Directories.
//---------------------------------------//
/* Will make a directory for you.        */
//---------------------------------------//
// if (!fs.existsSync('./assets')) { // Does the file exist?
//     fs.mkdir('./assets', (err) => {
//         if(err) {
//             console.log(err);
//         }
//         console.log('folder created');
//     });
// } else {
//     fs.rmdir('./assets', (err) => {
//         if (err) {
//             console.log(err);
//         }
//         console.log('folder created');
//     });
// }

// Deleting Files.
// if (fs.existsSync('./docs/deleteme.txt')) {
//     fs.unlink('./docs/deleteme.txt', (err) => {
//         if (err) {
//             console.log(err);
//         }
//         console.log('file deleted');
//     });
// }