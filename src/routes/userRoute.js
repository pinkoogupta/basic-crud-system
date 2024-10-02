import express from "express"
import {fetch} from ".src/controller/userController.js";

const route=express.Routes();

route.get("/fetch",fetch)

export default route;