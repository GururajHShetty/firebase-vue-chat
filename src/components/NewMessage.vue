<template>
  <div class="new-message">
    <form @submit.prevent="addMessage">
      <label for="new-message">New Message ( press enter to send ) :</label>
      <input type="text" name="new-message" v-model="newMessage" />
    </form>
    <p class="red-text" v-if="feedback">{{ feedback }}</p>
  </div>
</template>

<script>
import dbGod from "@/firebase/init";
export default {
  name: "NewMessage",
  props: ["name"],
  data() {
    return {
      newMessage: null,
      feedback: null
    };
  },
  methods: {
    addMessage() {
      if (this.newMessage) {
        dbGod
          .collection("messages")
          .add({
            content: this.newMessage,
            name: this.name,
            timestamp: Date.now()
          })
          .catch(err => {
            alert(err);
          });
        this.feedback = null;
        this.newMessage = null;
      } else {
        this.feedback = "You must enter some message to send";
      }
    }
  }
};
</script>
