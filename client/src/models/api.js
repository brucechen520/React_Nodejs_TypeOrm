import axios from 'axios';
let stores = [];
// [{
//     id: '1',
//     title: '小秘苑燒肉餐酒',
//     address: '新北市板橋區中山路一段285號1樓',
//     phone: '+886289531810',
//     owner: 'Mr. Wang'
// },{
//     id: '2',
//     title: '成真咖啡 新北環球板車店',
//     address: '新北市板橋區縣民大道二段七號二樓',
//     phone: '0289699996',
//     owner: 'Mr. Lee'
// },{
//     id: '3',
//     title: '摩斯漢堡 台北站前店',
//     address: '台北市中正區忠孝西路一段50號',
//     phone: '0223709317',
//     owner: 'Mr. Mos'
// }];

export const api = {
    API_HOST: 'http://13.58.213.176:9527/',
    $http: axios,
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
        console.log(data)
        return data
    },
    deleteStore: async (store) => {
        const res = await api.$http.delete(api.API_HOST+`store/delete`, { data: store});
        console.log(res);
    },
    updateStore: async (store) => {
        const res = await api.$http.put(api.API_HOST+`store/update`, { data: store });
        console.log(res);
    },
    addStore: async (store) => {
        const res = await api.$http.post(api.API_HOST+`store/add`, { data: store });
        console.log(res)
    },
}