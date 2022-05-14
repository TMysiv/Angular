import {IUser} from "./user.interface";

export interface IUserDetails extends IUser {
  phone: string,
  website: string,
  company: ICompany
}

interface ICompany {
  name: string,
  catchPhrase: string,
  bs: string
}

