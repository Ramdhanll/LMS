import { Response } from 'express'
import userModel from '../models/user_model'

// get user by id
export const getUserById = async (id: string, res: Response) => {
   const user = await userModel.findById({ _id: id })

   res.status(201).json({
      status: 'success',
      user,
   })
}
