<template>
  <div>
    <v-navigation-drawer v-model="drawer" app class="compact-drawer">
      <v-list>
        <v-list-item @click="toggleDrawer">
          <v-row no-gutters align="center">
            <v-col cols="auto">
              <v-list-item-icon>
                <v-icon>mdi-menu</v-icon>
              </v-list-item-icon>
            </v-col>

            <!-- <v-col>
              <v-list-item-title>{{ title }}</v-list-item-title>
            </v-col> -->
          </v-row>
        </v-list-item>

        <v-divider></v-divider>
        <!-- for route to user dashnboard -->
        <div v-if="isUser">
          <v-list-item>
            <router-link to="/userdashboard" class="text-decoration-none">
              <v-list-item-content class="d-flex align-center">
                <v-icon>mdi-account</v-icon>
                <span class="ml-2">User Dashboard</span>
              </v-list-item-content>
            </router-link>
          </v-list-item>
        </div>

        <!-- for route to admin dashboard -->
        <div v-if="isAdmin">
          <v-list-item>
            <router-link to="/admindashboard" class="text-decoration-none">
              <v-list-item-content class="d-flex align-center">
                <v-icon>mdi-account</v-icon>
                <span class="ml-2">Admin Dashboard</span>
              </v-list-item-content>
            </router-link>
          </v-list-item>
        </div>

        <!-- Users if condition -->
        <div v-if="isAdmin">
          <v-list-item>
            <router-link to="/userlist" class="text-decoration-none">
              <v-list-item-content class="d-flex align-center">
                <v-icon>mdi-account</v-icon>
                <span class="ml-2">Users</span>
              </v-list-item-content>
            </router-link>
          </v-list-item>
        </div>

        <!-- Posts if Condition -->

        <div v-if="isAdmin">
          <v-list-item>
            <router-link to="/postlist" class="text-decoration-none">
              <v-list-item-content class="d-flex align-center">
                <v-icon>mdi-file-document</v-icon>
                <span class="ml-2">Posts</span>
              </v-list-item-content>
            </router-link>
          </v-list-item>
        </div>

         <!-- For Admin Create User if condition -->
        <div v-if="isAdmin">
          <v-list-item>
            <router-link to="/" class="text-decoration-none">
              <v-list-item-content class="d-flex align-center">
                <v-icon>mdi-account</v-icon>
                <span class="ml-2">Create User</span>
              </v-list-item-content>
            </router-link>
          </v-list-item>
        </div>

        <!-- Create Post if Condition -->
        <div v-if="isUser">
          <v-list-item>
            <router-link to="/createpost" class="text-decoration-none">
              <v-list-item-content class="d-flex align-center">
                <v-icon>mdi-file-document</v-icon>
                <span class="ml-2">Create Post</span>
              </v-list-item-content>
            </router-link>
          </v-list-item>
        </div>

        <!-- For admin Create Post if Condition -->
        <div v-if="isAdmin">
          <v-list-item>
            <router-link to="/createpost" class="text-decoration-none">
              <v-list-item-content class="d-flex align-center">
                <v-icon>mdi-file-document</v-icon>
                <span class="ml-2">Create Post</span>
              </v-list-item-content>
            </router-link>
          </v-list-item>
        </div>

        <!-- View Post Side Bar if Condition -->
        <div v-if="isUser">
          <v-list-item>
            <router-link to="/viewpost" class="text-decoration-none">
              <v-list-item-content class="d-flex align-center">
                <v-icon>mdi-file-document</v-icon>
                <span class="ml-2">View Post</span>
              </v-list-item-content>
            </router-link>
          </v-list-item>
        </div>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="indigo-darken-1" class="compact-app-bar">
      <v-app-bar-nav-icon @click="toggleDrawer"></v-app-bar-nav-icon>

      <v-toolbar-title class="ml-0 pl-3">
        {{ title }}
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <!-- Logout Button -->
      <v-btn @click="logout" color="white">Logout</v-btn>
    </v-app-bar>
  </div>
</template>



<script>
import axios from "axios"; // Import Axios
export default {
  props: {
    title: String,

    isAdmin: Boolean,

    isUser: Boolean,
  },

  data() {
    return {
      drawer: false,

      tab: "users", // Set the default tab to "Users"
    };
  },

  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer;
    },

    navigateTo(tab) {
      this.tab = tab; // Set the selected tab when a navigation item is clicked
    },
    async logout() {
      try {
        // Get token fron local storage
        const userToken = localStorage.getItem("userToken");

        // Headers

        const headers = {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userToken}`,
        };

        // Send a POST request to the logout API endpoint using Axios
        const response = await axios.post(
          "http://10.0.10.211:3300/api/logout",
          {},
          {
            headers,
          }
        );

        console.log(response.data); // Log the response data

        if (response.status === 200) {
          //  Remove the user token from localStorage
          localStorage.removeItem("userToken");
          // Handle the successful logout, for example, navigate to the login page
          this.$router.push({ name: "login" });
        } else {
          // Handle other status codes or errors
        }
      } catch (error) {
        console.error("Error sending POST request:", error);
      }
    },
  },
};
</script>



<style>
/* Reduce padding and margin for the navigation drawer */

.compact-drawer {
  padding-top: 8px;

  /* Adjust as needed */
}

/* Reduce padding and margin for the app bar */

.compact-app-bar {
  margin-top: 0;

  padding: 6px 16px;

  /* Adjust as needed */
}
</style>