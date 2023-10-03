import ItemModel from '~/server/models/item.model';

export default defineEventHandler(async (event) => {
  const data = await readBody(event);
  return await ItemModel.createItem(data);
});
