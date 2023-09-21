<template>
  <div>
    <Nav title="User Dashboard"></Nav>
    <v-container class="text-center mt-5">
      <h1 class="admin-heading">User Panel</h1>
    </v-container>
    <v-container class="fill-height d-flex justify-center align-center mb-16">
      <v-row>
        <!-- Users Card -->
        <v-col cols="12" sm="6">
          <v-card class="mx-auto" max-width="400" elevation="12"> <!-- Add elevation for shadow -->
            <v-img
              src="https://media.istockphoto.com/id/1166843563/photo/hand-of-businesswoman-using-laptop-with-icon-social-media-and-social-network-online-marketing.webp?s=2048x2048&w=is&k=20&c=jXW5jcxo8vn9zhSj2aZWJskNI6l1N7tGCas_IRMBkWI="
              alt="User Image"
              cover
              height="300"
            ></v-img>
            <v-card-title class="text-h5">Create Post</v-card-title>
            <v-card-text>
              Explore user data and manage user accounts.
            </v-card-text>
            <v-card-actions>
              <router-link to="/createpost">
                <v-btn color="primary" text>Create</v-btn>
              </router-link>
            </v-card-actions>
          </v-card>
        </v-col>

        <!-- Posts Card -->
        <v-col cols="12" sm="6">
          <v-card class="mx-auto" max-width="400" elevation="12"> <!-- Add elevation for shadow -->
            <v-img
              src="https://images.unsplash.com/photo-1531564701487-f238224b7ce3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
              alt="Post Image"
              cover
              height="300"
            ></v-img>
            <v-card-title class="text-h5">View Posts</v-card-title>
            <v-card-text>
              Explore post data and manage blog posts.
            </v-card-text>
            <v-card-actions>
              <router-link to="/viewpost">
                <v-btn color="primary" text>View</v-btn>
              </router-link>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <Footer></Footer>
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Nav,
    Footer
  },
};
</script>
