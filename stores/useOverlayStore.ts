export const useOverlayStore = defineStore('overlayStore', {
  state: () => ({
    show: false,
    message: '',
  }),

  getters: {
    getShow(state) {
      return state.show;
    },

    getMessage(state) {
      return state.message;
    },
  },

  actions: {
    showOverlay(data: { message: string }) {
      this.show = true;
      this.message = data.message;
    },

    hideOverlay() {
      this.show = false;
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useOverlayStore, import.meta.hot));
}
