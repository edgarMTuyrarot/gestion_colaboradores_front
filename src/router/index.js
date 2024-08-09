import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";
import HomeView from "../views/HomeView.vue";
import RegistrarseView from "../views/RegistrarseView.vue";
import AgentesView from "@/views/AgentesView.vue";
import AltaAgentes from "@/views/AltaAgentes.vue";
import SinPermisos from "../views/SinPermisos.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: { requiresAuth: true },
    },
    {
      path: "/login",
      name: "login",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: LoginView,
    },
    {
      path: "/registro",
      name: "registro",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: RegistrarseView,
    },
    {
      path: "/agentes",
      name: "agentes",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: AgentesView,
    },
    {
      path: "/altasAgentes",
      name: "altasAgentes",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: AltaAgentes,
      meta: { requiresAuth: true, soloSups: true },
    },
    {
      path: "/sinpermisos",
      name: "sinPermisos",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: SinPermisos,
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    const usuario = localStorage.getItem("user");
    if (!usuario) {
      next({
        path: "/login",
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
