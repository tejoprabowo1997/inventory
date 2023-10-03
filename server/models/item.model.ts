import { ISchema, IMethods } from '~/server/models/types/IItem';
import { Model, Schema, model } from 'mongoose';

class ItemModel implements IMethods {
  private readonly model: Model<ISchema>;

  constructor() {
    const itemModelSchema = new Schema<ISchema>(
      {
        name: {
          type: String,
          required: true,
        },
        cost_price: {
          type: Number,
          required: true,
        },
        selling_price: {
          type: Number,
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
      },
      {
        timestamps: {
          createdAt: 'created_at',
          updatedAt: 'updated_at',
        },
      },
    );
    this.model = model<ISchema>('Item', itemModelSchema);
  }

  async createItem(data: { name: string; cost_price: number; selling_price: number; quantity: number }) {
    try {
      const item = await this.model.create(data);
      return {
        success: true,
        message: 'Item created successfully',
        data: item,
      };
    } catch (e) {
      return {
        success: false,
        message: 'Item created failed',
        data: e,
      };
    }
  }

  async getItem() {
    try {
      const item = await this.model.find();
      return {
        success: true,
        message: 'Item get successfully',
        data: item,
      };
    } catch (e) {
      return {
        success: false,
        message: 'Item get failed',
        data: e,
      };
    }
  }
}

export default new ItemModel();
