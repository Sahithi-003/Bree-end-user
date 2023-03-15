const express = require("express");
const app = express();
const Bree = require("/home/sahiM/Desktop/bree-zemoso-int/bree/src");
const TimezoneConverter = require("./utils/timezone-converter");

const bree = new Bree({
  mysqlDatabase: {
    driverUrl: "mysql://root:Sahithi@231@127.0.0.1:3306/bree",
    jobInterval: 10000,
    maxJobs: 2,
    port: 5002,
  },
});
bree.start();
bree.put(
  {
    name: "send MAIL",
    time: "* * * * *",
    data: '{"emailTo": "LDP","emailFrom": "Dhanraj","emailMessage": "Hey! How are you?"}',
    isRecurringJob: true,
    isActive: false,
  },
);

