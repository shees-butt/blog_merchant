<template>
 <div>
    <v-navigation-drawer v-model="drawer" app class="compact-drawer">
      <v-list>
        <v-list-item @click="toggleDrawer">
          <v-list-item-icon>
            <v-icon>mdi-menu</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{title}}</v-list-item-title>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item @click="navigateTo('users')">
          <v-list-item-icon>
            <v-icon>mdi-account</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Users</v-list-item-title>
        </v-list-item>
        <v-list-item @click="navigateTo('posts')">
          <v-list-item-icon>
            <v-icon>mdi-file-document</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Posts</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="indigo-darken-1" class="compact-app-bar">
      <v-app-bar-nav-icon @click="toggleDrawer"></v-app-bar-nav-icon>

      <v-toolbar-title class="ml-0 pl-3">
        {{title}}
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  
  props: {
    title: String,
  },
  data() {
    return {
      drawer: false,
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

<style>
/* Reduce padding and margin for the navigation drawer */
.compact-drawer {
  padding-top: 8px; /* Adjust as needed */
}

/* Reduce padding and margin for the app bar */
.compact-app-bar {
  margin-top: 0;
  padding: 6px 16px; /* Adjust as needed */
}
</style>
