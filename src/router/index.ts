import { createRouter, createWebHistory } from 'vue-router';
import Products from "@/pages/PageProducts.vue";
import Detail from "@/pages/PageDetail.vue";
import Cart from "@/pages/PageCart.vue";
import Categories from "@/pages/PageCategories.vue";
import CategoriesDetail from "@/pages/PageCategoriesDetail.vue";

const routes = [
    {
        path: '/',
        name: 'Products',
        component: Products
    },
    {
        path: '/categories',
        name: 'Categories',
        component: Categories
    },
    {
        path: '/categories/:categoryId',
        name: 'Categories Detail',
        component: CategoriesDetail
    },
    {
        path: '/product/:productId',
        name: 'Product Detail',
        component: Detail
    },
    {
        path: '/cart',
        name: 'Shopping Cart',
        component: Cart
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
