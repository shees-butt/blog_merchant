<template>
  <div>
    <Nav></Nav>
    <v-container class="mt-3 mb-3">
      <v-table class="h-screen">
        <thead>
          <tr>
            <th class="text-left">No</th>
            <th class="text-left">User Name</th>
            <th class="text-left">Email</th>
            <th class="text-left">Password</th>
            <th class="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in users" :key="user.id">
            <td>{{ index + 1 }}</td>
            <!-- No Column -->
            <td>{{ user.userName }}</td>
            <!-- User Name Column -->
            <td>{{ user.email }}</td>
            <!-- Email Column -->
            <td>{{ user.password }}</td>
            <!-- Password Column -->
            <td class="text-center">
              <!-- Center the content of the "Actions" column -->
              <v-btn @click="editUser(user)" color="primary" class="mr-2"
                >Edit</v-btn
              >
              <v-btn @click="deleteUser(user)" color="error">Delete</v-btn>
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
      users: [
        {
          id: 1,
          userName: "user1",
          email: "user1@example.com",
          password: "password1",
        },
        {
          id: 2,
          userName: "user2",
          email: "user2@example.com",
          password: "password2",
        },
        {
          id: 3,
          userName: "user3",
          email: "user3@example.com",
          password: "password3",
        },
        // Add more user objects as needed
      ],
    };
  },
  methods: {
    editUser(user) {
      // Implement edit functionality for the selected user
      console.log("Edit user:", user);
    },
    deleteUser(user) {
      // Implement delete functionality for the selected user
      console.log("Delete user:", user);
    },
  },
};
</script>
