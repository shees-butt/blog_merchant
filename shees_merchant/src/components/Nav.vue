<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app>
      <v-list>
        <v-list-item @click="toggleDrawer">
          <v-list-item-icon>
            <v-icon>mdi-menu</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Your Dashboard</v-list-item-title>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item v-for="item in items" :key="item" @click="navigateTo(item)">
          <v-list-item-icon>
            <v-icon>mdi-{{ item }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ item }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="primary">
      <v-app-bar-nav-icon @click="toggleDrawer"></v-app-bar-nav-icon>

      <v-toolbar-title class="ml-0 pl-3">
        Your Dashboard
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container>
        <!-- Two tabs for "Users" and "Posts" -->
        <v-tabs v-model="tab" color="primary">
          <v-tab key="users">Users</v-tab>
          <v-tab key="posts">Posts</v-tab>
        </v-tabs>

        <!-- Content for the selected tab goes here -->
        <v-row v-if="tab === 'users'">
          <!-- Content for the "Users" tab -->
          <v-col>
            <v-card flat>
              <!-- Add your content for "Users" here -->
            </v-card>
          </v-col>
        </v-row>

        <v-row v-if="tab === 'posts'">
          <!-- Content for the "Posts" tab -->
          <v-col>
            <v-card flat>
              <!-- Add your content for "Posts" here -->
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      items: ['web', 'shopping', 'videos', 'images', 'news'],
      tab: 'users', // Set the default tab to "Users"
    };
  },
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer;
    },
    navigateTo(tab) {
      this.tab = tab; // Set the selected tab when a navigation item is clicked
    },
  },
};
</script>
