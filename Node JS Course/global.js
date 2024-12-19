//---------------------------------//
/* Understanding the global object */
//---------------------------------//
// console.log(global);

//-----------------------------------------------//
/* This object has several of its own properties */
//-----------------------------------------------//
// global.setTimeout(() => {
//     console.log('In the timeout.')
// }, 3000);

// const int = setInterval(() => {
//     console.log("In the interval");
// }, 1000);

//-------------------------------------------------------------//
/* These gets the absolute path of the current folder and file */
//-------------------------------------------------------------//
// console.log(__dirname);
// console.log(__filename);

//-----------------------------------------------------------------------//
/* We are can't access the things in the Browser, 
but that is okay because we are using Node.js to do stuff on the backend */
//-----------------------------------------------------------------------//
// console.log(document.querySelector);