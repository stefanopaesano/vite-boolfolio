
import { createRouter, createWebHistory } from 'vue-router';

import indexpage from './pages/indexpage.vue';
import ProjectsPage from './pages/ProjectsPage.vue';
import ContactPage from './pages/ContactPage.vue';
const router = createRouter({
history: createWebHistory(),
routes: [
    {
    path: '/',
    name: 'Home',
    component: indexpage
    },
    {
    path: '/Project',
    name: 'projects.index',
    component: ProjectsPage
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactPage

    }

]
});
export { router };