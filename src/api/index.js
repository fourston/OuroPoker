import axios from 'axios';
import urls from './urls';
import { AsyncStorage } from 'react-native';

function api(server = 'stomp', url, ...rest) {
    const api_config = {
        url: null,
        data: null,
        method: null,
        upload: null,
    };

    api_config.url = urls(server, url, ...rest);

    const call = async () => {
        const { url, data, method, upload } = api_config;
        console.log('url', url, 'data', data, 'method', method);
        const token = await AsyncStorage.getItem('userToken');

        const auth = token ? { Authorization: `Bearer ${token}` } : {};

        const axios_config = {
            method,
            url,
            headers: Object.assign(
                {
                    // 'Content-Type': upload ? 'multipart/form-data' : 'application/json',
                    // 'Access-Control-Allow-Origin': '*'
                },
                auth,
            ),
        };

        if (data) {
            if (['post', 'put', 'patch'].indexOf(method) >= 0) {
                axios_config.data = data;
            }

            if (method === 'get') {
                axios_config.params = data;
            }
        }
        return axios(axios_config);
    };

    return {
        get() {
            api_config.method = 'get';
            return call();
        },
        post() {
            api_config.method = 'post';
            return call();
        },
        put() {
            api_config.method = 'put';
            return call();
        },
        delete() {
            api_config.method = 'delete';
            return call();
        },
        method(method) {
            if (!(method in this)) {
                throw new Error('method is not supported');
            }

            return this[method]();
        },
        data(data) {
            api_config.data = data;
            console.log('data--', data);
            return this;
        },
        upload(data) {
            api_config.method = 'post';
            api_config.data = data;
            api_config.upload = true;
            return call();
        },
    };
}

const avatar = (uuid) => urls('profile', 'account_avatar', uuid);

export default api;
export { urls, avatar };
