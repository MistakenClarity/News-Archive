import { ArticleIdx } from '../models/articleIndexModel.js';

export async function sortByKeywords() {
    const articles = await ArticleIdx.aggregate([
        { $project: { keywords: '$keywords', root: '$$ROOT' } },
        { $unwind: '$keywords' },
        { $sort: { 'dates.added': -1 } },
        {
            $group: {
                _id: '$keywords',
                articles: {
                    $push: '$root'
                },
            },
        },
        { $sort: { _id: 1 } }
    ]);
    const grouping = await ArticleIdx.aggregate([
        { $unwind: '$keywords' },
        { $group: { _id: "$keywords", count: { $sum: 1 } } },
        { $sort: { _id: 1 } }
    ])
    return { articles, grouping };
}



//articles by date (added)
export async function sortByDatePublishedOld() {
    const articles = await ArticleIdx.aggregate([
        {
            $project: {
                article: "$$ROOT",
                date: ["$dates.published"]
            }
        },
        { $unwind: "$date" },
        { $sort: { date: 1 } },
        {
            $group: {
                _id: {
                    month: { $month: "$date" },
                    year: { $year: "$date" }
                },
                articles: { $push: '$article' },
            }
        },
        { $sort: { "_id.year": 1, "_id.month": 1 } }
    ])

    const grouping = await ArticleIdx.aggregate([
        { $project: { date: ["$dates.published"] } },
        { $unwind: "$date" },
        { $group: { _id: { month: { $month: "$date" }, year: { $year: "$date" } }, count: { $sum: 1 } } },
        { $sort: { "_id.year": 1, "_id.month": 1 } }
    ]);
    return { articles, grouping };
};


//articles by date (added)
export async function sortByDatePublishedNew() {
    const articles = await ArticleIdx.aggregate([
        {
            $project: {
                article: "$$ROOT",
                date: ["$dates.published"]
            }
        },
        { $unwind: "$date" },
        { $sort: { date: -1 } },
        {
            $group: {
                _id: {
                    month: { $month: "$date" },
                    year: { $year: "$date" }
                },
                articles: { $push: '$article' },
            }
        },
        { $sort: { "_id.year": -1, "_id.month": -1 } }
    ])

    const grouping = await ArticleIdx.aggregate([
        { $project: { date: ["$dates.published"] } },
        { $unwind: "$date" },
        { $group: { _id: { month: { $month: "$date" }, year: { $year: "$date" } }, count: { $sum: 1 } } },
        { $sort: { "_id.year": 1, "_id.month": 1 } }
    ]);
    return { articles, grouping };
};

//articles by date (added, old)
export async function sortByDateAddedOld() {
    const articles = await ArticleIdx.aggregate([
        {
            $project: {
                article: "$$ROOT",
                date: ["$dates.added"]
            }
        },
        { $unwind: "$date" },
        { $sort: { date: 1 } },
        {
            $group: {
                _id: {
                    month: { $month: "$date" },
                    year: { $year: "$date" }
                },
                articles: { $push: '$article' },
            }
        },
        { $sort: { "_id.year": 1, "_id.month": 1 } }
    ])

    const grouping = await ArticleIdx.aggregate([
        { $project: { date: ["$dates.added"] } },
        { $unwind: "$date" },
        { $group: { _id: { month: { $month: "$date" }, year: { $year: "$date" } }, count: { $sum: 1 } } },
        { $sort: { "_id.year": 1, "_id.month": 1 } }
    ]);
    return { articles, grouping };
};


//articles by date (added, New)
export async function sortByDateAddedNew() {
    const articles = await ArticleIdx.aggregate([
        {
            $project: {
                article: "$$ROOT",
                date: ["$dates.added"]
            }
        },
        { $unwind: "$date" },
        { $sort: { date: -1 } },
        {
            $group: {
                _id: {
                    month: { $month: "$date" },
                    year: { $year: "$date" }
                },
                articles: { $push: '$article' },
            }
        },
        { $sort: { "_id.year": -1, "_id.month": -1 } }
    ])

    const grouping = await ArticleIdx.aggregate([
        { $project: { date: ["$dates.added"] } },
        { $unwind: "$date" },
        { $group: { _id: { month: { $month: "$date" }, year: { $year: "$date" } }, count: { $sum: 1 } } },
        { $sort: { "_id.year": 1, "_id.month": 1 } }
    ]);
    return { articles, grouping };
};