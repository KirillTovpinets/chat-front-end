export interface UserInterface{
  _id: string;
  firstname: string;
  lastname: string;
  email: string;
  roomId: Record<number, string>;
}