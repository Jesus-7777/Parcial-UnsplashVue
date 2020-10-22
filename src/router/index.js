import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue';
import Login from '@/views/Login.vue';
import Tags from '@/views/tags/Tag.vue';
import CreateTag from '@/views/tags/CreateTag.vue';
import EditTag from '@/views/tags/EditTag.vue'

const routes = [{
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            requireAuth: true
        }
    },
    {
        path: '/login',
        name: 'Login',
        component: Login

    },
    {
        path: '/tags',
        name: 'Tags',
        component: Tags,
        meta: {
            requireAuth: true,
        }

    },
    {
        path: '/tags/create',
        name: 'CreateTag',
        component: CreateTag,
        meta: {
            requireAuth: true
        }
    },
    {
        path: '/tags/:id/edit',
        name: 'EditTag',
        component: EditTag,
        meta: {
            requireAuth: true
        }
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requireAuth)) {
        //La ruta requiere autenticacion
        const token = localStorage.getItem('token');
        if (!token) {
            next('/login')
        }
    }
    next()
});

export default router