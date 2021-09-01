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
    currentStore: {},
    stores: stores,
    API_HOST: window.location.hostname == 'localhost' ? 'http://127.0.0.1:9527/' : '',
    setStore: (stores) => {
        api.stores = stores;
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
        const res = await axios.get(api.API_HOST+`store`);
        const data = res.data.data
        api.setStore(data);
        console.log(api.stores)
        return data
        // const stores = await axios.get(url+"/stores" , { params: { token: this.token}})
        //     .then(response => {
        //         const employees = response.data.data.employees;
        //         this.setState({ employees });
        //     })
        //     .catch(error => {
        //         this.setState({ toDashboard: true });
        //         console.log(error);
        //     });
    },
    deleteStore: async (store) => {
        const res = await axios.delete(api.API_HOST+`store/delete`, { data: store});
        console.log(res);
        // api.stores.splice(params.id, 1);
    },
    updateStore: async (store) => {
        const res = await axios.put(api.API_HOST+`store/update`, { data: store });
        console.log(res);
        // for(let i = 0; i < api.stores.length; i++) {
        //     if(api.stores[i].id === store.id) {
        //         api.stores[i] = store;
        //         break;
        //     }
        // }
    },
    addStore: async (store) => {
        const res = await axios.post(api.API_HOST+`store/add`, { data: store });
        console.log(res)
        // api.stores.push(store);
    },
    setCurrentStore: (store) => {
        for(let i = 0; i < api.stores.length; i++) {
            if(api.stores[i].id === store.id) {
                api.currentStore = store;
                break;
            }
        }
    },
    getCurrentStore: () => {
        return api.currentStore;
    }
}