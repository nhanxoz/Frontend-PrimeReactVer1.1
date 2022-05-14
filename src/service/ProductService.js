import axios from 'axios';

export class ProductService {
    getProductsSmall() {
        return axios.get("assets/demo/data/products-small.json").then((res) => res.data.data);
    }

    getProducts() {
        return axios.get("http://localhost:8080/apiFood/foods").then((res) => res.data.data);
    }
    deleteProduct(id) {
        const urlDelete = `http://localhost:8080/apiFood/foods/` + String(id);
        console.log(urlDelete);
        return axios.delete(urlDelete);
    }
    saveProduct(product) {
        let formData = new FormData();
        formData.append("id", null);
        formData.append("code", null);
        formData.append("name", product.name);
        formData.append("description", product.description);
        formData.append("image", product.image);
        formData.append("price", product.price);
        formData.append("category", product.category);
        formData.append("inventoryStatus", product.inventoryStatus);
        formData.append("rating", product.rating);

        return axios.post("http://localhost:8080/apiFood/foods/", product, {
            headers: {
                "Content-Type": "application/json",
            },
        });
    }
    uploadImageProduct(event) {
        let formData = new FormData();
        formData.append("file", event);
        console.log(event);
        return axios
            .post("http://localhost:8080/uploadFile", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            .then((res) => {
                console.log(res.data.downloadUri);

                return res.data.downloadUri;
            });
    }
    getProductsWithOrdersSmall() {
        return axios.get("assets/demo/data/products-orders-small.json").then((res) => res.data.data);
    }
}