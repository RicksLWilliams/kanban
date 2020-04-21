import mongoose from "mongoose"
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId

const Task = new Schema({
  title: { type: String, required: true },
  creatorEmail: { type: String, required: true },
  //boardId: { type: ObjectId, ref: 'Board', required: true },
  listId: { type: ObjectId, ref: 'List', required: true }
  //, comments[] // or should I a create comments
}, { timestamps: true, toJSON: { virtuals: true } })


export default Task
