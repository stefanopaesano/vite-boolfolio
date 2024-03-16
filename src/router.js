
import { createRouter, createWebHistory } from 'vue-router';

import indexpage from './pages/indexpage.vue';
import ProjectsPage from './pages/ProjectsPage.vue';

const router = createRouter({
history: createWebHistory(),
routes: [
    {
    path: '/',
    name: 'Home',
    component: indexpage
    },
    {
    path: '/blog',
    name: 'projects.index',
    component: ProjectsPage
    },
]
});
export { router };