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
bree.start();
bree.put(
    {
      name: "job6",
      time: null,
      data: '{"jobName" : "Job6"}',
      isRecurringJob: false,
    }
);


