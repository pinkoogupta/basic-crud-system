import express from "express"
import {fetch,create} from ".src/controller/userController.js";

const route=express.Routes();

route.post("/create",create);
route.get("/fetch",fetch);

export default route;