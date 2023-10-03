import UserModel from "~/server/models/user.model";

export default defineEventHandler(async (event) => {
  return await UserModel.countUser();
});
