<template>
  <div>
    <Nav></Nav>
    <div class="h-screen">
    <v-container class="text-center mt-5">
      <h1 class="admin-heading">Posts</h1>
    </v-container>
    <v-container class=" d-flex justify-center align-center">
      <v-row>
        <!-- Post Card -->
        <v-col cols="12" sm="4">
          <v-card class="mx-auto" max-width="400" elevation="6">
            <v-card-title class="text-h5">Title</v-card-title>
            <v-card-text id="halfContent">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. In ratione tempore blanditiis! Quam temporibus nihil dolor nam fuga odio doloribus, est dicta quas architecto provident culpa maxime sit accusantium molestiae!fuga odio doloribus, est dicta quas architecto provident culpa maxime sit accusantium molestiae!
            </v-card-text>
            <v-card-actions>
              <router-link to="/postdetails">
                <v-btn color="primary" text>View Post</v-btn>
              </router-link>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    </div>
    <Footer></Footer>
  </div>
</template>

<script setup>
import Footer from "@/components/Footer.vue";
import Nav from "@/components/Nav.vue";
</script>

<style scoped>
#halfContent {
 display: -webkit-box;
  -webkit-line-clamp: 4; /* Number of lines to display */
  -webkit-box-orient: vertical;
  overflow: hidden;
}

</style>