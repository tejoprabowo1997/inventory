import { ISchema } from '~/server/models/types/IItem';

export const useItemStore = defineStore('itemStore', {
  persist: true,
  state: () => ({
    items: [],
  }),

  getters: {
    dataItem(state) {
      return state.items;
    },
  },

  actions: {
    async createItem(data: { name: string; cost_price: string; selling_price: string; quantity: string }) {
      return await useApi('/api/item/add', 'POST', data);
    },

    async getItem() {
      const response = await useApi('/api/item', 'GET');
      this.items = response.data;
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useItemStore, import.meta.hot));
}
