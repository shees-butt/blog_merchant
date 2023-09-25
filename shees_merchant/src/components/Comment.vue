<template>
  <div>
    <!-- Display Comments -->
    <div v-for="comment in comments" :key="comment.id">
      <div class="comment">
        <strong>{{ comment.user }}:</strong>
        <p>{{ comment.text }}</p>
        <!-- Display delete button only if the comment belongs to the logged-in user -->
        <button @click="deleteComment(comment.id)" v-if="comment.user_id === currentUser.id">
          Delete
        </button>
      </div>
    </div>

    <!-- Add Comment Form -->
    <div>
      <textarea v-model="newComment" placeholder="Add a comment"></textarea>
      <button @click="addComment">Add Comment</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: {
    postId: Number, // ID of the post to which the comments belong
    currentUser: Object, // Information about the current user
  },
  data() {
    return {
      comments: [],
      newComment: "",
    };
  },
  mounted() {
    // Fetch comments when the component is mounted
    this.fetchComments();
  },
  methods: {
    fetchComments() {
      axios
        .get(`http://10.0.10.211:3300/api/posts/${this.postId}/comments`)
        .then((response) => {
          this.comments = response.data;
        })
        .catch((error) => {
          console.error("Error fetching comments:", error);
        });
    },
    addComment() {
      const commentData = {
        comment: this.newComment,
        post_id: this.postId,
        user_id: this.currentUser.id,
        id: 0, // Guest ID
      };

      axios
        .post("http://10.0.10.211:3300/api/create/comment", commentData)
        .then((response) => {
          const newComment = {
            id: response.data.id,
            user: this.currentUser.username, // Assuming the API doesn't return the user's name
            user_id: this.currentUser.id,
            text: this.newComment,
          };
          this.comments.push(newComment);
          this.newComment = ""; // Clear the comment input field
        })
        .catch((error) => {
          console.error("Error adding comment:", error);
        });
    },
    deleteComment(commentId) {
      axios
        .delete(`http://10.0.10.211:3300/api/comments/${commentId}`)
        .then(() => {
          this.comments = this.comments.filter((comment) => comment.id !== commentId);
        })
        .catch((error) => {
          console.error(`Error deleting comment with ID ${commentId}:`, error);
        });
    },
  },
};
</script>

<style scoped>
.comment {
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
