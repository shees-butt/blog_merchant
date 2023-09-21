<template>
  <div>
    <Nav title="Admin Dashboard"></Nav>
    <v-container class="text-center mt-5">
      <h1 class="admin-heading">Admin Panel</h1>
    </v-container>
    <v-container class="fill-height d-flex justify-center align-center mb-16">
      <v-row>
        <!-- Users Card -->
        <v-col cols="12" sm="3">
          <v-card class="mx-auto" max-width="400" elevation="6">
            <!-- Add elevation for shadow -->
            <v-img
              src="https://media.istockphoto.com/id/1426070859/photo/human-resources-and-management-concept-employees-must-complete-the-online-survey-form-answer.jpg?s=2048x2048&w=is&k=20&c=nv3khIGFmi_oM4qhp_CPhJnVEPIBrbzikJuLx03Avck="
              alt="User Image"
              cover
              height="250"
            ></v-img>
            <v-card-title class="text-h5">Users</v-card-title>
            <v-card-text>
              Explore user data and manage user accounts.
            </v-card-text>
            <v-card-actions>
              <router-link to="/userlist">
                <v-btn color="primary" text>Go to Users</v-btn>
              </router-link>
            </v-card-actions>
          </v-card>
        </v-col>

        <!-- Posts Card -->
        <v-col cols="12" sm="3">
          <v-card class="mx-auto" max-width="400" elevation="6">
            <!-- Add elevation for shadow -->
            <v-img
              src="https://images.unsplash.com/photo-1456324504439-367cee3b3c32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Post Image"
              cover
              height="250"
            ></v-img>
            <v-card-title class="text-h5">Posts</v-card-title>
            <v-card-text>
              Explore post data and manage blog posts.
            </v-card-text>
            <v-card-actions>
              <router-link to="/postlist">
                <v-btn color="primary" text>Go to Posts</v-btn>
              </router-link>
            </v-card-actions>
          </v-card>
        </v-col>

        <!-- Users Card -->
        <v-col cols="12" sm="3">
          <v-card class="mx-auto" max-width="400" elevation="12"> <!-- Add elevation for shadow -->
            <v-img
              src="https://media.istockphoto.com/id/1166843563/photo/hand-of-businesswoman-using-laptop-with-icon-social-media-and-social-network-online-marketing.webp?s=2048x2048&w=is&k=20&c=jXW5jcxo8vn9zhSj2aZWJskNI6l1N7tGCas_IRMBkWI="
              alt="User Image"
              cover
              height="250"
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

        <!-- Users Register Card -->
        <v-col cols="12" sm="3">
          <v-card class="mx-auto" max-width="400" elevation="12"> <!-- Add elevation for shadow -->
            <v-img
              src="https://images.unsplash.com/photo-1517817748493-49ec54a32465?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="User Image"
              cover
              height="250"
            ></v-img>
            <v-card-title class="text-h5">Create User</v-card-title>
            <v-card-text>
              Explore user data and manage user accounts.
            </v-card-text>
            <v-card-actions>
              <router-link to="/">
                <v-btn color="primary" text>Register</v-btn>
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
