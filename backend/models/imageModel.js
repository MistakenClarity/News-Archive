import mongoose from "mongoose";

const imageSchema = mongoose.Schema(
    {
        name: { type: String },
        url: { type: String },
        source: { type: String },
        platform: { type: String },
        dimensions: { type: String },
        note: { type: String }
    }, { timestamps: true }
);

export const Image = mongoose.model('Image', imageSchema);
