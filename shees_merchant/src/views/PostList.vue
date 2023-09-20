<template>
  <div>
    <Nav></Nav>
    <v-container class="mt-3 mb-3">
      <v-table>
        <thead>
          <tr>
            <th class="text-left">No</th>
            <th class="text-left">Title</th>
            <!-- <th class="text-left">Content</th> -->
            <th class="text-center">Actions</th>
            <!-- Center the "Actions" column -->
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in desserts" :key="item.title">
            <td>{{ index + 1 }}</td>
            <!-- No Column -->
            <td>{{ item.title }}</td>
            <!-- Title Column -->
            <!-- <td>{{ item.content }}</td> -->
            <!-- Content Column -->
            <td class="text-center">
              <!-- Center the content of the "Actions" column -->
              <!-- Delete and Edit Buttons Column -->
              <v-btn @click="editItem(item)" color="primary" class="mr-2"
                >Edit</v-btn
              >
              <v-btn @click="deleteItem(item)" color="error">Delete</v-btn>
            </td>
          </tr>
        </tbody>
      </v-table>
    </v-container>

    <Footer></Footer>
  </div>
</template>
<script setup>
import Footer from "@/components/Footer.vue";
import Nav from "@/components/Nav.vue";
</script>
<script>
export default {
  data() {
    return {
      desserts: [
        {
          title: "Frozen Yogurt",
          content: "abcde",
        },
        {
          title: "Ice cream sandwich",
          content: "abcde",
        },
        {
          title: "Eclair",
          content: "abcde",
        },
        {
          title: "Cupcake",
          content: "abcde",
        },
        {
          title: "Gingerbread",
          content: "abcde",
        },
        {
          title: "Jelly bean",
          content: "abcde",
        },
        {
          title: "Lollipop",
          content: "abcde",
        },
        {
          title: "Honeycomb",
          content: "abcde",
        },
        {
          title: "Donut",
          content: "abcde",
        },
        {
          title: "KitKat",
          content: "abcde",
        },
      ],
    };
  },
};
</script>