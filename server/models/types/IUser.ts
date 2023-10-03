import { Document } from 'mongoose';

export interface ISchema extends Document {
  name: string;
  email: string;
  phone: string;
  password: string;
  role: 'DEVELOPER' | 'ADMIN' | 'USER';
}

export interface IMethods {
  countUser(): Promise<{ success: boolean; message?: string; data?: any }>;
  createUser(data: { name: string; email: string; phone: string; password: string; role: string }): Promise<{ success: boolean; message?: string; data?: any }>;
  findUser(data: { email: string }): Promise<{ success: boolean; message?: string; data?: any }>;
}
