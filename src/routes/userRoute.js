import express from "express"
import {getUser,create,update,deleteUser} from "../controller/userController.js";

const route=express.Router();

route.post("/create",create);
route.get("/getUser",getUser);
route.put("/update/:id",update);
route.delete("/deleteUser/:id",deleteUser)

export default route;