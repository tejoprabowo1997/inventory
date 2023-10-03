<script lang="ts" setup>
  const itemStore = useItemStore();
  const snackbarStore = useSnackbarStore();

  const name = ref('');
  const costPrice = ref('');
  const sellingPrice = ref('');
  const quantity = ref('');

  const convertToRupiah = (angka: string) => {
    if (!angka) return '';

    var rupiah = '';
    var angkarev = angka.toString().split('').reverse().join('');
    for (var i = 0; i < angkarev.length; i++) if (i % 3 == 0) rupiah += angkarev.substr(i, 3) + '.';
    return (
      'Rp. ' +
      rupiah
        .split('', rupiah.length - 1)
        .reverse()
        .join('')
    );
  };

  const createItem = async () => {
    // trim validation
    name.value = name.value.trim();
    costPrice.value = costPrice.value.trim();
    sellingPrice.value = sellingPrice.value.trim();
    quantity.value = quantity.value.trim();

    if (!name.value) return snackbarStore.showSnackbar({ text: 'Name is required', type: 'error' });
    if (!costPrice.value) return snackbarStore.showSnackbar({ text: 'Cost Price is required', type: 'error' });
    if (!sellingPrice.value) return snackbarStore.showSnackbar({ text: 'Selling Price is required', type: 'error' });
    if (!quantity.value) return snackbarStore.showSnackbar({ text: 'Quantity is required', type: 'error' });

    const response = await itemStore.createItem({
      name: name.value,
      cost_price: costPrice.value,
      selling_price: sellingPrice.value,
      quantity: quantity.value,
    });

    if (response.success) {
      snackbarStore.showSnackbar({ text: `Item ${response.data.name} created successfully`, type: 'success' });
      name.value = '';
      costPrice.value = '';
      sellingPrice.value = '';
      quantity.value = '';
    } else {
      snackbarStore.showSnackbar({ text: response.message || 'Error while save item', type: 'error' });
    }
  };
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-toolbar color="pink">
            <v-toolbar-title> Add Item </v-toolbar-title>
            <v-spacer />
            <v-btn to="/dashboard">Back</v-btn>
          </v-toolbar>

          <v-card-text>
            <v-row>
              <v-col cols="12">
                <v-text-field v-model="name" label="Name" variant="outlined" density="compact" color="pink" hide-details />
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="costPrice"
                  :label="`Cost Price ${convertToRupiah(costPrice)}`"
                  type="number"
                  variant="outlined"
                  density="compact"
                  color="pink"
                  hide-details
                />
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="sellingPrice"
                  :label="`Selling Price ${convertToRupiah(sellingPrice)}`"
                  type="number"
                  variant="outlined"
                  density="compact"
                  color="pink"
                  hide-details
                />
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="quantity" label="Quantity" type="number" variant="outlined" density="compact" color="pink" hide-details />
              </v-col>
            </v-row>
          </v-card-text>

          <v-card-actions>
            <v-btn color="pink" block @click="createItem">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped></style>
