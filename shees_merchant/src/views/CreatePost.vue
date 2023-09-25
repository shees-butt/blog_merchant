<template>
  <div>
    <Nav title="User Dashboard" :isUser="true"></Nav>
    <div class="h-screen">
      <p class="text-h4 font-weight-bold text-center mt-10 mb-10">
        Create Your Blog Post
      </p>
      <form @submit.prevent="createPost">
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

          <!-- You can add an image upload field here if needed -->
          <!-- <v-file-input v-model="image" label="Upload an image"></v-file-input> -->

          <v-btn type="submit" color="indigo darken-1" dark block tile>
            Publish Post
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
import axios from "axios"; // Import Axios

export default {
  name: "CreatePost",

  components: {
    Nav,
    Footer,
  },

  data() {
    return {
      title: "",
      description: "",
      // image: "", // If you want to add an image, uncomment this line
    };
  },

  methods: {
    async createPost() {
      try {
        // Get token from local storage
        const userToken = localStorage.getItem("userToken");
        // const userId = localStorage.getItem("userId")
        // Create an object containing the data to send
        const dataToSend = {
          title: this.title,
          description: this.description,
          // image: this.image, // If you want to include an image
        };

        // Send a POST request to the API endpoint using Axios
        const response = await axios.post(
          "http://10.0.10.211:3300/api/createpost",
          dataToSend,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${userToken}`,
            },
          }
        );

        // Clear input values after successful post creation
        this.title = "";
        this.description = "";

        console.log(response.data.post); // Log the response data
      } catch (error) {
        console.error("Error sending POST request:", error);
      }
    },
  },
};
</script>
