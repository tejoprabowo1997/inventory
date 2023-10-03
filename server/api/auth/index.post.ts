import UserModel from '~/server/models/user.model';
import bcrypt from 'bcrypt';
import { ISchema } from '~/server/models/types/IUser';
import jwt from 'jsonwebtoken';

export default defineEventHandler(async (event) => {
  const data = await readBody(event);
  const getDataUser = await UserModel.findUser(data);
  if (!getDataUser.success) return getDataUser;
  const userData = getDataUser.data as ISchema;
  const comparePassword = await bcrypt.compare(data.password, userData.password);
  if (!comparePassword) {
    return {
      success: false,
      message: 'Password salah',
      data: null,
    };
  }

  // generate token use jwt
  const token = jwt.sign(userData._id.toString(), 'aleta-maezurra-prayasti');

  return {
    success: true,
    message: 'Login berhasil',
    data: { token },
  };
});
