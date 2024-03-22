import express, { response } from 'express';
import { NewsSite } from '../models/newsSiteModel.js';
import { ArticleIdx } from '../models/articleIndexModel.js';
import { sortByKeywords, sortByDatePublishedOld, sortByDatePublishedNew, sortByDateAddedOld, sortByDateAddedNew } from '../queries/articleQuerys.js';
import mongoose from 'mongoose';
import fs from 'fs';

const router = express.Router()

// POST one newsSite to db
router.post('/', async (request, response) => {
    try {
        const { name, url, region, note } = request.body;
        const newNewsSite = await NewsSite.create({ name, url, region, note });
        response.status(201).json({ newNewsSite })
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// GET all newsSites from db
router.get('/', async (request, response) => {
    try {
        const newsSites = await NewsSite.find({});
        const regionalSites = await NewsSite.aggregate([
            { $sort: { name: 1 } },
            {
                $group: {
                    _id: '$region',
                    sites: {
                        $push: '$$ROOT'
                    },
                },
            },
            { $sort: { _id: 1 } }
        ]);
        const regions = await NewsSite.aggregate([
            { $unwind: '$region' },
            { $group: { _id: "$region", count: { $sum: 1 } } },
            { $sort: { _id: 1 } }
        ])
        return response.status(200).json({
            count: newsSites.length,
            regionalSites: regionalSites,
            regions: regions
        });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

router.get('/tester', async (request, response) => {
    try {
        const articleIdxs = await ArticleIdx.find();
        const result = JSON.stringify(articleIdxs, null, 4);
        fs.writeFile("ArticleIdxs.txt", result, err => {
            if (err) { console.error(err) }
            else { console.log('written') };
        });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
})

router.get('/data', async (request, response) => {
    try {
        const newssites = await NewsSite.aggregate([
            { $project: { name: '$name' } },
            { $sort: { name: 1 } }
        ]);
        const articles = await ArticleIdx.aggregate([
            { $project: { title: '$title' } }
        ]);
        return response.status(200).json({
            newssites, articles
        });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
})

router.get('/articles', async (request, response) => {
    try {
        var results;
        switch (request.query.sort) {
            case '1':
                results = await sortByKeywords();
                break;
            case '2':
                results = await sortByDatePublishedOld();
                break;
            case '3':
                results = await sortByDatePublishedNew();
                break;
            case '4':
                results = await sortByDateAddedOld();
                break;
            case '5':
                results = await sortByDateAddedNew();
                break;
            default:
                console.log("Not a valid sort key");
        }
        return response.status(200).json(results);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
})


// GET article idx by id
router.get('/articles/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const article = await ArticleIdx.findById(id)
        return response.status(200).json({ bool: "true", article: article });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
})

// GET one newsSite from db by id
router.get('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const newsSite = await NewsSite.findById(id)
        return response.status(200).json(newsSite);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// PUT update one newsSite
router.put('/:id', async (request, response) => {
    try {
        if (!request.body.name || !request.body.url || !request.body.region) {
            return response.status(400).send({
                message: "Send all required fields: name, url, region"
            })
        }
        const { id } = request.params;
        const result = await NewsSite.findByIdAndUpdate(id, request.body);
        if (!result) {
            return response.status(404).json({ message: 'NewsSite not found' });  //not activating?
        }
        return response.status(200).send({ message: 'NewsSite updated successfully' });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

//DELETE one newsSite by id
router.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const result = await NewsSite.findByIdAndDelete(id);
        if (!result) {
            return response.status(404).json({ message: 'NewsSite not found' });  //not activating?
        }
        return response.status(200).send({ message: 'NewsSite deleted successfully' });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// GET all articles by region
// router.get('/')



// POST article idx
router.post('/article', async (request, response) => {
    try {
        const { title, publisher, authors, dates, notes, keywords } = request.body;
        const newArticle = await ArticleIdx.create({ title, publisher, authors, dates, notes, keywords });
        response.status(201).json({ newArticle })
    } catch (error) {
        console.log(error.message);
        responseponse.status(500).send({ message: error.message });
    }
})

router.patch('/articles/:id', async (request, response) => {
    const { id } = request.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return response.status(404).json({ error: 'No such article' })
    }
    const article = await ArticleIdx.findByIdAndUpdate(id, { ...request.body })
    if (!article) {
        return response.status(404).json({ error: 'No such article' })
    }
    response.status(200).json(article)
})

export default router;