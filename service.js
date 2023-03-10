const Bree = require("/home/sahiM/Desktop/bree-zemoso-int/bree/src");
const bree = new Bree({
  mysqlDatabase: {
    driverUrl: "mysql://root:Sahithi@231@127.0.0.1:3306/bree",
    jobInterval: 10000,
    maxJobs: 5,
  },

});
async function addJob(time, name, data,status) {
  try {
    const job = {
      name:"jobs",
      worker: {
        workerData: {
          time: time,
          name: name,
          data: data,
          status: status
        },
      },
    };
    bree.add(job);
    bree.start(job.name);
    if (job.worker.workerData.status === 'completed') {
      bree.remove(job.name);
    }
  } catch (err) {
    throw new Error("Could not add job: " + err.message);
  }
}

module.exports = addJob;
