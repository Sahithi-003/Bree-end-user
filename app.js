const express = require("express");
const app = express();
const Bree = require("/home/sahiM/Desktop/bree-zemoso-int/bree/src");

const bree = new Bree({
  mysqlDatabase: {
    driverUrl: "mysql://root:Sahithi@231@127.0.0.1:3306/bree",
    jobInterval: 10000,
    maxJobs: 2,
    port: 5000,
  },
});
bree.start();
bree.put(
  {
    name: "job3",
    time: null,
    data: '{"jobName" : "Job3"}',
    isRecurringJob: false,
  }
);

bree.put(
  {
    name: "job4",
    time: null,
    data: '{"jobName" : "Job4"}',
    isRecurringJob: false,
  }
)
