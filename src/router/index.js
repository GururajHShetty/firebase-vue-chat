import Vue from "vue";
import VueRouter from "vue-router";
import Welcome from "@/components/Welcome.vue";
import Chat from "@/components/Chat.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Welcome",
    component: Welcome
  },
  {
    path: "/Chat",
    name: "Chat",
    component: Chat,
    props: true,
    beforeEnter: function(to, from, next) {
      if (to.params.name) {
        next();
      } else {
        next({ name: "Welcome" });
      }
    }
  }
];

const router = new VueRouter({
  routes
});

export default router;
