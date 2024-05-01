import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { getItem, getItems, insertCar } from "../services/item.service";

const getItemById = async ({ params }: Request, res: Response) => {
    try {
        const { id } = params;
        const response = await getItem(id);
        res.send(response);
    } catch (error) {
        handleHttp(res, "ERROR_GET_ITEM");
    }
};

const getAllItems = async (req: Request, res: Response) => {
    try {
        const response = await getItems();
        res.send(response);
    } catch (error) {
        handleHttp(res, "ERROR_GET_ITEMs", error);
    }
};

const createItem = async ({ body }: Request, res: Response) => {
    try {
        const response = await insertCar(body);
        res.send(response);
    } catch (error) {
        handleHttp(res, "ERROR_CREATE_ITEM", error);
    }
};

const updateItem = (req: Request, res: Response) => {
    try {
        
    } catch (error) {
        handleHttp(res, "ERROR_UPDATE_ITEM");
    }
};

const deleteItem = (req: Request, res: Response) => {
    try {
        
    } catch (error) {
        handleHttp(res, "ERROR_DELETE_ITEM");
    }
};

export {
    getItemById,
    getAllItems,
    createItem,
    updateItem,
    deleteItem
};