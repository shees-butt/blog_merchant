<template>
  <div>
    <Nav></Nav>
    <div class="h-screen">
      <p class="text-h4 font-weight-bold text-center mt-10 mb-10">
        Edit Your Post
      </p>
      <form @submit.prevent="editPost">
        <v-responsive class="mx-auto" max-width="80vw">
          <v-text-field
            outlined
            dense
            color="blue"
            v-model="title"
            label="Blog Title Here"
            type="input"
          ></v-text-field>

          <v-textarea
            outlined
            dense
            color="blue"
            v-model="description"
            label="Description"
            rows="14"
          ></v-textarea>

          <v-btn type="submit" color="indigo darken-1" dark block tile>
            Edit Post
          </v-btn>
        </v-responsive>
      </form>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import Nav from "@/components/Nav.vue";
import axios from "axios";

export default {
  name: "EditPost",

  components: {
    Nav,
    Footer,
  },

  data() {
    return {
      title: "", // To store the new title
      description: "", // To store the new description
      postId: 0, // To store the ID of the post being edited
    };
  },

  methods: {
    async getPostDetails() {
      // Replace postId with the actual ID of the post you want to edit
      const postId = 1; // Replace with the actual post ID

      try {
        const userToken = localStorage.getItem("userToken");
        const response = await axios.get(
          `http://10.0.10.211:3300/api/posts/${postId}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${userToken}`,
            },
          }
        );

        if (response.status === 200) {
          const postData = response.data.data;
          this.postId = postData.id; // Set the post ID
          this.title = postData.title; // Set the current title
          this.description = postData.description; // Set the current description
        } else {
          // Handle other status codes or errors
        }
      } catch (error) {
        console.error("Error getting post details:", error);
      }
    },

    async editPost() {
      try {
        const userToken = localStorage.getItem("userToken");
        const dataToSend = {
          title: this.title,
          description: this.description,
        };

        // Send a PUT request to the API endpoint using Axios to edit the post
        const response = await axios.put(
          `http://10.0.10.211:3300/api/editpost/${this.postId}`,
          dataToSend,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${userToken}`,
            },
          }
        );
        console.log(response.data.post); // Log the response data
      } catch (error) {
        console.error("Error sending PUT request:", error);
      }
    },
  },

  mounted() {
    this.getPostDetails();
  },
};
</script>
