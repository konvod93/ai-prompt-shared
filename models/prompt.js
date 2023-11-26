import { Schema, model, models } from 'mongoose';

const PromptSchema = new Schema({
    creator: {
        type: Schema.Type.ObjectId,
        ref: "User",
    },
    prompt: {
        type: String,
        required: [true, 'Prompt is required.'] 
    },
    tag: {
        type: String,
    }
})