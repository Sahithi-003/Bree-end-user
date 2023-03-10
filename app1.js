const express = require("express");
const bodyParser = require('body-parser')
const addJobContoller = require('./controller')
var router = express.Router();
const jobs = require("../bree-zemoso-int/bree/src/model/jobs");
const controllerHandler = require('./router');
const app = express();
const Bree = require("/home/sahiM/Desktop/bree-zemoso-int/bree/src");
const path = require('path');

const jobName = 'send SMS';
const jobConfig = {
  // id: Math.random(),
  name: jobName,
  worker: path.join(__dirname, `sendSMS.js?jobName=${jobName}`),
  // rest of the job configuration
};
const timestamp = new Date().toISOString().replace(/:/g, '-').replace(/\./g, '-');

// Append the timestamp to the file name
const fileName = `${jobConfig.name}${timestamp}.js`;

const bree = new Bree({
  mysqlDatabase: {
    driverUrl: "mysql://root:Sahithi@231@127.0.0.1:3306/bree",
    jobInterval: 10000,
    maxJobs: 5,
  },
  // jobs: [jobConfig],
  worker: path.join(__dirname, 'jobs', 'worker.js'),
  // jobs: [
    // {
    //   name: "dummy",
    //   worker: {
    //     workerData: {
    //       name: "Mark",
    //     },
    //   },
    //   interval: "6s",
    // },
  // ],
});




  bree.start();


// console.log("jobs------");
// app.use(bodyParser.json());;
// const controller = controllerHandler;
// console.log("post method hit");
// app.post('/api/user', controller(addJobContoller, (req, res, next) => [req.body.data.time, req.body.data.name, req.body.data.data,req.body.data.status]));
// app.get("/:universalURL", (req, res) => {
//   res.send("404 URL NOT FOUND");
// });

// app.listen(5000, () => console.log("listening on port 5000"));