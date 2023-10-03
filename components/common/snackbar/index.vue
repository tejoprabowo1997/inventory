<script lang="ts" setup>
  const snackbarStore = useSnackbarStore();

  const snackbar = computed(() => snackbarStore.getShow);
  const type = computed(() => snackbarStore.getType);
  const text = computed(() => snackbarStore.getText);
</script>

<template>
  <v-snackbar v-model="snackbar" :timeout="2000" :color="type">
    {{ text }}
    <template v-slot:actions>
      <v-btn color="white" variant="text" @click="snackbarStore.hideSnackbar()"> X </v-btn>
    </template>
  </v-snackbar>
</template>

<style scoped></style>
