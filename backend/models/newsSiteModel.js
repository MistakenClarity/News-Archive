import mongoose from "mongoose";

const newsSiteSchema = mongoose.Schema(
    {
        name: {
            type: String
        },
        url: {
            type: String
        },
        region: {
            type: String
        },
        note: {
            type: String
        }
    }, {timestamps: true}
);

export const NewsSite = mongoose.model('NewsSite', newsSiteSchema);