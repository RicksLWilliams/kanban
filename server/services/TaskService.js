import { dbContext } from "../db/DbContext"
import { BadRequest } from "../utils/Errors"

class TaskService {

  async getAll(userEmail) {
    return await dbContext.Tasks.find({ creatorEmail: userEmail }).populate("creator", "name picture")
  }

  async getById(id, userEmail) {
    let data = await dbContext.Tasks.findOne({ _id: id, creatorEmail: userEmail })
    if (!data) {
      throw new BadRequest("Invalid ID or you do not own this task")
    }
    return data

  }
  async getTaskCommentsByTaskId(taskId, userEmail) {
    return await dbContext.Comments.find({ taskId: taskId, creatorEmail: userEmail }).populate("creator", "name picture")
  }

  async create(rawData) {
    //let data = await dbContext.Lists.create(rawData)
    //return data
    return await dbContext.Tasks.create(rawData)
  }

  async edit(id, userEmail, update) {
    let data = await dbContext.Tasks.findOneAndUpdate({ _id: id, creatorEmail: userEmail }, update, { new: true })
    if (!data) {
      throw new BadRequest("Invalid ID or you do not own this task");
    }
    return data;
  }

  async delete(id, userEmail) {
    let data = await dbContext.Tasks.findOneAndRemove({ _id: id, creatorEmail: userEmail });
    if (!data) {
      throw new BadRequest("Invalid ID or you do not own this task");
    }
  }



}

export const taskService = new TaskService()