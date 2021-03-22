import Vue from "vue";
import VueRouter from "vue-router";

import HomePage from "@/views/HomePage";

import ContactListPage from "@/views/ContactListPage";
import ContactInfoPage from "@/views/ContactInfoPage";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage
  },
  {
    path: "/contact-list",
    name: "ContactList",
    component: ContactListPage
  },
  {
    path: "/contact-info",
    name: "ContactInfo",
    props: true,
    component: ContactInfoPage
  },
  {
    path: "*",
    redirect: { name: "Home" }
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
