import { Document } from 'mongoose';

export interface ISchema extends Document {
  name: string;
  cost_price: number;
  selling_price: number;
  quantity: number;
}

export interface IMethods {
  createItem(data: { name: string; cost_price: number; selling_price: number; quantity: number }): Promise<{ success: boolean; message?: string; data?: any }>;
  getItem(): Promise<{ success: boolean; message?: string; data?: any }>;
}
