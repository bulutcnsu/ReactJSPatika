import getData from "./lib/service.js"

let userId = 7;
const response = getData(userId).then((data) =>{

   if (data) {
    console.log('All data has been taken succesfully.');
  }
});
console.log(response);