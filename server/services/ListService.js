import { dbContext } from "../db/DbContext"
import { BadRequest } from "../utils/Errors"

class ListService {

  //need :
  //get
  //post
  //put
  //delete
  async getAll(userEmail) {
    return await dbContext.Lists.find({ creatorEmail: userEmail }).populate("creator", "name picture")
  }

  async getById(id,userEmail) {
    let data = await dbContext.Lists.findOne({ _id: id, creatorEmail: userEmail })
    if (!data) {
      throw new BadRequest("Invalid ID or you do not own this board")
    }
    return data
    
  }

  //getListsTaskByListId
  async getListsTaskByListId(listId, userEmail) {
    let data = await dbContext.Tasks.find({ listId: listId, creatorEmail: userEmail })
    if (!data) {
      throw new BadRequest("Invalid ID or you do not own this list")
    }
    return data
  }

  async create(rawData) {
    //let data = await dbContext.Lists.create(rawData)
    //return data
    return await dbContext.Lists.create(rawData)
  }

  async edit(id, userEmail, update) {
    let data = await dbContext.Lists.findOneAndUpdate({ _id: id, creatorEmail: userEmail }, update, { new: true })
    if (!data) {
      throw new BadRequest("Invalid ID or you do not own this list");
    }
    return data;
  }

  async delete(id, userEmail) {
    let data = await dbContext.Lists.findOneAndRemove({ _id: id, creatorEmail: userEmail });
    if (!data) {
      throw new BadRequest("Invalid ID or you do not own this list");
    }
  }

}

export const listService = new ListService()

