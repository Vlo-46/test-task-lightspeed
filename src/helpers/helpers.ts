import {IProduct} from "@/components/ProductList/core/interface";
import Swal from 'sweetalert2'

const cart_products = process.env.VUE_APP_LOCALSTORAGE_CART_ITEMS;

export const ADD_TO_CART = (product: IProduct) => {
    const product_item = {
        id: product.id,
        name: product.name,
        price: product.price,
        img: product.originalImageUrl
    };
    let array = [];

    const local_item = localStorage.getItem(cart_products);

    if (local_item) {
        array = JSON.parse(local_item);
    }

    for (let i = 0; i < array.length; i++) {
        if (array[i].id === product_item.id) {
            const index = array.indexOf(array[i]);
            array.splice(index, 1)
        }
    }
    array.push(product_item);
    localStorage.setItem(cart_products, JSON.stringify(array))

    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Продукт добавлен в корзину ",
        showConfirmButton: false,
        timer: 1500
    });

    window.postMessage({type: 'cartCountChanged', count: array.length}, '*');
}

export const REMOVE_FROM_CART = (id: number) => {
    let array = [];
    const cart_items = localStorage.getItem(cart_products);

    if (cart_items) {
        array = JSON.parse(cart_items)
    }

    for (let i = 0; i < array.length; i++) {
        if (array[i].id === id) {
            const index = array.indexOf(array[i]);
            array.splice(index, 1)
        }
    }
    localStorage.setItem(cart_products, JSON.stringify(array))
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Продукт удален из корзины ",
        showConfirmButton: false,
        timer: 1500
    });

    window.postMessage({type: 'cartCountChanged', count: array.length}, '*');
}

export const CHECK_BASKET_PRODUCT = (id: number) => {
    let array = []
    const cart_items = localStorage.getItem(cart_products);

    if (cart_items) {
        array = JSON.parse(cart_items)
    }

    return !!array.find((item: IProduct) => item.id === id);
}

export const BUY_PRODUCTS = () => {
    Swal.fire("Спасибо, Ваш заказ принят ");
}