const addJob = require("./service");

async function addJobContoller(time, name, data,status) {
  console.log("from controller&**********************");
  return await addJob(time, name, data,status);
}

module.exports = addJobContoller;
