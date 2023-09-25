import { IUser } from './../models/user_model'
declare namespace Express {
   interface Request {
      user?: IUser // Define the 'user' property here with the appropriate type
   }
}
