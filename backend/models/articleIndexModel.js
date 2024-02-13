import mongoose from "mongoose";

const articleIdxSchema = mongoose.Schema(
    {
        title: {
            type: String
        },
        publisher: {
            type: String
        },
        authors: [
            {type: String}
        ],
        dates: {
            published: {
                type: Date
            },
            added: {
                type: Date
            }
        },
        notes: {
            type: String
        },
        keywords: [
            {type: String}
        ]
    }, {timestamps: true}
)

export const ArticleIdx = mongoose.model('ArticleIdx', articleIdxSchema);