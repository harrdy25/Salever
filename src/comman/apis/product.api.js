import { deleteRequest, getRequest, postRequest, updateRequest } from "../request"

export const getAllProductDetails = () => {
    return getRequest('products');
}

export const postAllProductDetails = (data) => {
    return postRequest('products', data);
}

export const deleteProductDetails = (id) => {
    return deleteRequest('products/', id)
}
export const updateAllProductItem = (id, data) => {
    return updateRequest('products/', id, data)
}