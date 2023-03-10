const express = require("express");
const app = express();
const Bree = require("/home/sahiM/Desktop/bree-zemoso-int/bree/src");

const bree = new Bree({
  mysqlDatabase: {
    driverUrl: "mysql://root:Sahithi@231@127.0.0.1:3306/bree",
    jobInterval: 10000,
    maxJobs: 2,
    port: 5006,
  },
});
app.get("/heartbeat", (req, res) => {
  res.status(200).send("Application is running");
});
bree.start();
bree.put(
  // [
    {
      name: "job6",
      time: null,
      data: '{"jobName" : "Job6"}',
      isRecurringJob: false,
    }
  // ]
  // {
  //   name: "job5",
  //   time: null,
  //   data: '{"jobName" : "Job5"}',
  //   isRecurringJob: false,
  // },
  //   {
  //     name: "job3",
  //     time: null,
  //     data: '{"jobName" : "Job3"}',
  //     isRecurringJob: false,
  //   },
  //   {
  //     name: "job4",
  //     time: null,
  //     data: '{"jobName" : "Job4"}',
  //     isRecurringJob: false,
  //   },
  //   {
  //     name: "job6",
  //     time: null,
  //     data: '{"jobName" : "Job6"}',
  //     isRecurringJob: false,
  //   },
  // {
  //   name: "send MAIL",
  //   time: "* * * * *",
  //   data: '{"emailTo": "LDP","emailFrom": "Dhanraj","emailMessage": "Hey! How are you?"}',
  //   isRecurringJob: true,
  //   isActive: false,
  // },
  // {
  //   name: "dummy",
  //   time: "*/2 * * * *",
  //   data: '{"emailTo": "LDP","emailFrom": "Dhanraj","emailMessage": "Hey! How are you?"}',
  //   isRecurringJob: true,
  // },
);



// bree.stop();
app.listen(5006, () => console.log("listening on port 5000"));
