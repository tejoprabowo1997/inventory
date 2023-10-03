export const useSnackbarStore = defineStore('snackbarStore', {
  state: () => ({
    show: false,
    type: '',
    text: '',
  }),

  getters: {
    getShow(state) {
      return state.show;
    },

    getType(state) {
      return state.type;
    },

    getText(state) {
      return state.text;
    },
  },

  actions: {
    showSnackbar(data: { type: string; text: string }) {
      this.show = true;
      this.type = data.type;
      this.text = data.text;
    },

    hideSnackbar() {
      this.show = false;
      this.type = '';
      this.text = '';
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useSnackbarStore, import.meta.hot));
}
