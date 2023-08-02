export class ReqLogin {
  email: string;
  password: string;

  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
  }
}

export interface ResLogin {
  token: string;
  profile: {
    email: string;
    name: string;
    userId: string;
  }
}

export interface ResUserList {
  email: string;
  name: string;
  userId: string;
}

export interface ReqConHistory{
  userId:string;
  before?:Date;
  count?:number;
  sort?:string;
}

export interface ResConHistory{
  messageId:string;
  senderId:string;
  reciverId:string;
  content:string;
  timeStamp:Date;
}

export class Registration {
  email: string;
  name: string;
  password: string;

  constructor(email: string, name: string, password: string) {
    this.email = email;
    this.name = name;
    this.password = password;
  }
}