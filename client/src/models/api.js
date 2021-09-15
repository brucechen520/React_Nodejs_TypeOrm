import axios from 'axios';

// window.addEventListener("beforeunload", function() { debugger; }, false)
export const api = {
    API_HOST: 'http://13.58.213.176:9527/',
    $http: axios,
    init: () => {
        api.$http.defaults.headers = {
            'Content-Type': 'application/json'
        }
    },
    get: async (params) => {
        try {
            console.log(123)
        } catch (err) {
            console.error(err);
            throw new Error(err);
        }
    },
    post: async (params) => {

    },
    delete: async (params) => {

    },
    getStore: async (params) => {
        const res = await api.$http.get(api.API_HOST+`store`);
        const data = res.data.data
        // console.log(data)
        return data
    },
    deleteStore: async (store) => {
        const res = await api.$http.delete(api.API_HOST+`store/delete`, { data: store});
        // console.log(res);
        return res;
    },
    updateStore: async (store) => {
        const res = await api.$http.put(api.API_HOST+`store/update`, { data: store });
        // console.log(res);
        return res;
    },
    addStore: async (store) => {
        const res = await api.$http.post(api.API_HOST+'store/add', { data: store });
        // console.log(res);
        return res;
    },
}