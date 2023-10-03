<script lang="ts" setup>
  import { ISchema } from '~/server/models/types/IItem';

  const itemStore = useItemStore();
  const items = computed(() => itemStore.dataItem);

  onMounted(async () => {
    await itemStore.getItem();
  });
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-toolbar color="pink">
            <v-toolbar-title> Data Item </v-toolbar-title>
            <v-spacer />
            <v-btn icon to="/add_item">
              <v-icon>mdi-plus</v-icon>
            </v-btn>
          </v-toolbar>

          <v-card-text>
            <v-text-field label="Search" variant="outlined" density="compact" color="pink" />
            <v-table>
              <thead>
                <tr>
                  <th class="text-left">Name</th>
                  <th class="text-left">Cost Price</th>
                  <th class="text-left">Price</th>
                  <th class="text-left">Quantity</th>
                  <th class="text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in items as ISchema[]">
                  <td>{{ item.name }}</td>
                  <td>{{ item.cost_price }}</td>
                  <td>{{ item.selling_price }}</td>
                  <td>{{ item.quantity }}</td>
                  <td class="text-center">
                    <v-btn icon variant="plain" density="compact" color="info" class="mr-1">
                      <v-icon size="sm">mdi-pencil</v-icon>
                    </v-btn>
                    <v-btn icon variant="plain" density="compact" color="error">
                      <v-icon size="sm">mdi-delete</v-icon>
                    </v-btn>
                  </td>
                </tr>
              </tbody>
            </v-table>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped></style>
