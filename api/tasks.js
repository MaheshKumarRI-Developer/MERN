const dbConnect = require("../backend/utils/dbConnect");
const {createTask, getTasks, getSingleTasks, updateTask, deleteTask } = require("../backend/controller/TaskController");

module.exports = async (req, res) => {
await dbConnect();

const { method, query } = req;

switch (method) {
case "GET":
if(query.id) {
return getSingleTasks(req, res);
}
return getTasks(req, res);

case "POST":
return createTask(req, res);

case "PATCH":
return updateTask(req, res);

case "DELETE":
return deleteTask(req, res);

default:
res.setHeader("Allow", ["GET", "POST", "PATCH", "DELETE"]);
return res.status(405).end(`Method` ${method} Not Allowed`);
}
}