import { Request, Response, Router } from "express";
import { createItem, deleteItem, getAllItems, getItemById, updateItem } from "../controllers/item.controller";

const router = Router();

router.get("/:id", getItemById);

router.get("/", getAllItems);

router.post("/", createItem);

router.put("/:id", updateItem);

router.delete("/:id", deleteItem);

export { router };