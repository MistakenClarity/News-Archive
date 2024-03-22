import express from "express";
import { Image } from "../models/imageModel.js";
import { readdir } from 'node:fs/promises';
import 'dotenv/config'

const router = express.Router();

router.get("/", async (request, response) => {
    try {
        const images = await Image.find({});
        var fileNames = [];
        const files = await readdir(process.env.PATH_FRONTEND + "/frontend/public/images");
        for (const file of files) {
            fileNames.push("images/" + file);
        };

        return response.status(200).json({ images, fileNames });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message })
    }
});

router.post("/", async (request, response) => {
    try {
        const { name, url, source, platform, note } = request.body;
        const newImage = await Image.create({ name, url, source, platform, note });
        response.status(201).json({ newImage })
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// router.post("/edit", async (req, res) => {
//     try {
//         const img = await Image.updateMany({}, { $set: { "new_field": 1 } }, false, true)
//     } catch (error) {
//         console.log("not")
//     }
// })

export default router;