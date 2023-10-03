import { IMethods, ISchema } from '~/server/models/types/IUser';
import { Model, Schema, model } from 'mongoose';
import bcrypt from 'bcrypt';

class UserModel implements IMethods {
  private readonly model: Model<ISchema>;

  constructor() {
    const userModelSchema = new Schema<ISchema>(
      {
        name: {
          type: String,
          required: true,
        },
        email: {
          type: String,
          required: true,
        },
        phone: {
          type: String,
          required: true,
        },
        password: {
          type: String,
          required: true,
        },
        role: {
          type: String,
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

    userModelSchema.pre<ISchema>('save', async function (next) {
      this.password = await bcrypt.hash(this.password, 10);
      next();
    });

    this.model = model<ISchema>('User', userModelSchema);
  }

  public async countUser() {
    try {
      const count = await this.model.countDocuments();
      return {
        success: true,
        message: 'User count successfully',
        data: count,
      };
    } catch (e) {
      return {
        success: false,
        message: 'User count failed',
        data: e,
      };
    }
  }
  async createUser(data: { name: string; email: string; phone: string; password: string; role: string }) {
    try {
      const user = new this.model(data);
      await user.save();
      return {
        success: true,
        message: 'Create user successfully',
        data: user,
      };
    } catch (e) {
      return {
        success: false,
        message: 'Create user failed',
        data: e,
      };
    }
  }

  async findUser(data: { email: string }) {
    try {
      const user = await this.model.findOne({ email: data.email });
      return {
        success: true,
        message: 'Find user successfully',
        data: user,
      };
    } catch (e) {
      return {
        success: false,
        message: 'Find user failed',
        data: e,
      };
    }
  }
}

export default new UserModel();
