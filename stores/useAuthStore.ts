export const useAuthStore = defineStore('authStore', {
  persist: true,

  actions: {
    async countUser() {
      return await useApi('/api/user/count', 'GET');
    },

    async createUser(data: {
      name: string;
      email: string;
      phone: string;
      password: string;
      passwordConfirmation: string;
      firstAccount?: boolean;
    }): Promise<{ success: boolean; error?: boolean; message?: string; data?: any }> {
      //validation trim
      if (data.name) data.name = data.name.trim();
      if (data.email) data.email = data.email.trim();
      if (data.phone) data.phone = data.phone.trim();
      if (data.password) data.password = data.password.trim();
      if (data.passwordConfirmation) data.passwordConfirmation = data.passwordConfirmation.trim();

      //validation
      if (!data.name || data.name === '') return { success: false, error: true, message: 'Nama wajib diisi!' };
      if (!data.email || data.email === '') return { success: false, error: true, message: 'Email wajib diisi!' };
      if (!data.phone || data.phone === '') return { success: false, error: true, message: 'Nomor telepon wajib diisi!' };
      if (!data.password || data.password === '') return { success: false, error: true, message: 'Password wajib diisi!' };
      if (!data.passwordConfirmation || data.passwordConfirmation === '') return { success: false, error: true, message: 'Konfirmasi password wajib diisi!' };
      if (data.password !== data.passwordConfirmation) return { success: false, error: true, message: 'Password dan konfirmasi password tidak sama!' };

      const response = await useApi('/api/user/create', 'POST', {
        name: data.name,
        email: data.email,
        phone: data.phone,
        password: data.password,
        role: data.firstAccount ? 'ADMIN' : 'USER',
      });

      return {
        success: response.success,
        error: !response.success,
        message: response.message,
        data: response.data,
      };
    },

    async login(data: { email: string; password: string }): Promise<{ success: boolean; error?: boolean; message?: string; data?: any }> {
      const response = await useApi('/api/auth/', 'POST', {
        email: data.email,
        password: data.password,
      });

      return {
        success: response.success,
        data: response.data,
      };
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot));
}
