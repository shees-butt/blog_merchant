<template>
  <div >
    <Nav title="Admin Dashboard" :isAdmin="true"></Nav>
    <v-container class="d-flex justify-center h-screen" >
      <v-row>
        <v-col cols="12">
        <v-table>
          <thead>
            <tr>
              <th class="text-left">Post ID</th>
              <th class="text-left">Post Title</th>
              <th class="text-left">Description</th>
              <th class="text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user of users" :key="user.id">
              <td>{{ user.id }}</td>
              <td>{{ user.title }}</td>
              <td>{{ user.description }}</td>
              <td>
                <v-btn color="red" text @click="deletePost(user.id)"
                  >Delete Post</v-btn
                >
              </td>
            </tr>
          </tbody>
        </v-table>
        </v-col>
        <!-- Post Card -->
        <!-- <v-col cols="12" sm="4" v-for="user of users" :key="user.id">
          <v-card class="mx-auto" max-width="400" elevation="12">
            <v-card-title class="text-h5">{{ user.name }}</v-card-title>
            <v-card-text>
              {{ user.email }}
            </v-card-text>
            <v-card-actions>
              <v-btn color="red" text @click="deletePost(user.id)"
                >Delete Post</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col> -->
      </v-row>
    </v-container>

    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import Nav from "@/components/Nav.vue";

import axios from "axios";

export default {
  name: "UserList",

  data() {
    return {
      users: [],
    };
  },

  components: {
    Nav,
    Footer,
  },

  methods: {
    async getUsers() {
      // Get token from local storage
      const userToken = localStorage.getItem("userToken");
      try {
        const response = await axios.get("http://10.0.10.211:3300/api/posts", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userToken}`,
          },
        });
        this.users = response.data.data;
      } catch (error) {
        console.error(error);
      }
    },

    async deletePost(userId) {
      // Get token from local storage
      const userToken = localStorage.getItem("userToken");
      try {
        await axios.delete(`http://10.0.10.211:3300/api/deletepost/${userId}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userToken}`,
          },
        });
        // After successful deletion, you can remove the deleted post from the local posts array.
        this.users = this.users.filter((user) => user.id !== userId);
        console.log(`Post with ID ${userId} deleted.`);
      } catch (error) {
        console.error(`Error deleting post with ID ${userId}:`, error);
      }
    },
  },

  mounted() {
    this.getUsers();
  },
};
</script>

