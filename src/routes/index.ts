import { Router } from "express";
import { readdirSync } from "fs";
import { join } from "path";

const PATH_ROUTER = __dirname;
const router = Router();

const cleanFileName = (fileName: string) => {
    const file = fileName.split('.').shift();
    return file;
}

const importRouters = async () => {
    const files = readdirSync(PATH_ROUTER);
    const promises = files.map(async (fileName) => {
        const cleanName = cleanFileName(fileName);
        if (cleanName !== "index") {
            const { router: moduleRouter } = await import(`./${cleanName}`);
            router.use(`/${cleanName}`, moduleRouter);
        }
    });
    await Promise.all(promises);
}

importRouters();

export { router };