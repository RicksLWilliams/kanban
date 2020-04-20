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

  async getById(userEmail) {
    
  }

  async create(rawData) {
    //let data = await dbContext.Lists.create(rawData)
    //return data
    return await dbContext.Lists.create(rawData)
  }

}

export const listService = new ListService()

