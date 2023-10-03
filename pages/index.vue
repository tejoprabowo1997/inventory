<script lang="ts" setup>
  const authStore = useAuthStore();
  const snackbarStore = useSnackbarStore();

  const dialogInfoAddUser = ref(false);
  const dialogAddUser = ref(false);
  const nameRegister = ref('');
  const emailRegister = ref('');
  const phoneRegister = ref('');
  const passwordRegister = ref('');
  const passwordConfirmationRegister = ref('');

  const email = ref('');
  const password = ref('');

  const createUser = async () => {
    const data = {
      name: nameRegister.value,
      email: emailRegister.value,
      phone: phoneRegister.value,
      password: passwordRegister.value,
      passwordConfirmation: passwordConfirmationRegister.value,
      firstAccount: true,
    };

    const createUser = await authStore.createUser(data);

    if (!createUser.success) {
      return snackbarStore.showSnackbar({
        text: createUser.message || 'Terjadi kesalahan',
        type: 'error',
      });
    }

    snackbarStore.showSnackbar({
      text: 'Berhasil membuat akun, silahkan login!',
      type: 'success',
    });
    dialogAddUser.value = false;
  };

  const login = async () => {
    const response = await authStore.login({ email: email.value, password: password.value });
    const router = useRouter();
    if (response.success) {
      await router.push('/dashboard');
    } else {
      snackbarStore.showSnackbar({
        text: response.message || 'Terjadi kesalahan',
        type: 'error',
      });
    }
  };

  onMounted(async () => {
    const countUser = await authStore.countUser();
    if (countUser.success) {
      if (countUser.data === 0) {
        dialogInfoAddUser.value = true;
      }
    }
  });
</script>

<template>
  <v-container>
    <v-row v-if="!dialogAddUser" justify="center" align="center" style="height: 100vh">
      <v-col cols="12" sm="8" md="8" lg="6" xl="6">
        <v-card color="grey-lighten-4">
          <v-toolbar color="pink">
            <v-toolbar-title> Masuk ke <span class="font-weight-bold">Sistem Inventory</span> </v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-row>
              <v-col cols="12">
                <v-text-field v-model="email" label="Email" variant="outlined" hide-details density="compact" color="pink" />
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="password" label="Password" variant="outlined" hide-details density="compact" color="pink" />
              </v-col>
            </v-row>
          </v-card-text>
          <v-divider />
          <v-card-actions>
            <v-btn block color="pink" @click="login"> Masuk </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-row v-else justify="center" align="center" style="height: 100vh">
      <v-col cols="12" sm="8" md="8" lg="6" xl="6">
        <v-card>
          <v-toolbar color="pink" class="text-center">
            <v-toolbar-title> Buat Akun Pertama Anda </v-toolbar-title>
          </v-toolbar>

          <v-card-text>
            <v-row>
              <v-col cols="12">
                <v-text-field v-model="nameRegister" label="Nama" variant="outlined" density="compact" color="pink" hide-details />
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="emailRegister" label="Email" variant="outlined" density="compact" color="pink" hide-details />
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="phoneRegister" label="NO. WA" variant="outlined" density="compact" color="pink" hide-details />
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="passwordRegister" label="Password" type="password" variant="outlined" density="compact" color="pink" hide-details />
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="passwordConfirmationRegister"
                  label="Masukan ulang password"
                  type="password"
                  variant="outlined"
                  density="compact"
                  color="pink"
                  hide-details
                />
              </v-col>
            </v-row>
          </v-card-text>
          <v-divider />
          <v-card-actions>
            <v-btn block color="pink" @click="createUser">Buat Akun</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <v-dialog v-model="dialogInfoAddUser" persistent max-width="600">
      <v-card>
        <v-toolbar color="pink" class="text-center">
          <v-toolbar-title> INFO </v-toolbar-title>
        </v-toolbar>
        <v-card-text class="text-center"> Tidak ada user di aplikasi inventory, silahkan klik lanjutkan untuk membuat akun. </v-card-text>
        <v-divider />
        <v-card-actions>
          <v-btn
            color="pink"
            block
            @click="
              () => {
                dialogInfoAddUser = false;
                dialogAddUser = true;
              }
            "
            >Lanjutkan</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<style scoped></style>
