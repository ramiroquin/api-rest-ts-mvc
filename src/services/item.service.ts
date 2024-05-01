import { Car } from "../interfaces/car.interface";
import itemModel from "../models/item.model";

const insertCar = async (item: Car) => {
    const responseInsert = await itemModel.create(item);
    return responseInsert;
};

const getItems = async () =>  {
    const responseItems = await itemModel.find();
    return responseItems;
};

const getItem = async (id: string) =>  {
    const responseItem = await itemModel.findOne({_id: id});
    return responseItem;
};

export { insertCar, getItems, getItem };