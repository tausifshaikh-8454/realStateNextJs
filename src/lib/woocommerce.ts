import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

const api = new WooCommerceRestApi({
    url: process.env.PRODUCTS || '' ,
    consumerKey: process.env.CONSU_KEY!,
    consumerSecret: process.env.CONSU_SECRET!
});

export default api;