import UserModel from '~/server/models/user.model';

export default defineEventHandler(async (event) => {
  const data = await readBody(event);
  return await UserModel.createUser(data);
});
