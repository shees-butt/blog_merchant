<template>
  <div>
    <Nav></Nav>
    <v-container class="h-screen mt-3" v-if="post">
      <!-- Title -->
      <h1 class="text-2xl font-semibold mb-4">{{ post.title }}</h1>

      <!-- Content -->
      <p class="mb-4">{{ post.description }}</p>

      <!-- Comment Section -->
      <div class="mb-4">
        <!-- Display Comments Here -->
        <div
          class="mb-2"
          v-for="(comment, index) in post.comments"
          :key="index"
        >
          <strong>{{ comment.user }}:</strong>
          <p>{{ comment.text }}</p>
          <v-btn @click="deleteComment(comment.id)" color="red" dark
            >Delete</v-btn
          >
        </div>
      </div>

      <!-- Post Comment -->
      <div class="mb-4">
        <textarea
          v-model="newComment"
          class="w-full h-16 border border-gray-300 rounded p-2"
          placeholder="Write your comment here..."
        ></textarea>
      </div>
      <v-btn @click="postComment" color="indigo" dark tile type="submit"
        >Add Comment</v-btn
      >
    </v-container>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import Nav from "@/components/Nav.vue";
import axios from "axios";

export default {
  name: "PostDetails",

  components: { Footer, Nav },

  data() {
    return {
      post: null,
    };
  },

  computed: {
    posttId() {
      return this.$route.params.id;
    },
  },

  mounted() {
    const userToken = localStorage.getItem("userToken");
    const userId = localStorage.getItem("userId");
    axios
      .get(`http://10.0.10.211:3300/api/posts/${this.posttId}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userToken} ${userId}`,
        },
      })

      .then((response) => {
        this.post = response.data;
      })

      .catch((error) => {
        console.error("There was an error fetching the product details", error);
      });
  },
};
</script>

<style scoped></style>
