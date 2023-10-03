import ItemModel from '~/server/models/item.model';

export default defineEventHandler(async (event) => {
  return await ItemModel.getItem();
});
