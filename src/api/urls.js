import config from '../config';

export default (server, url, ...rest) => {
    const HOST = config.api.host[server];

    if (!HOST) {
        throw new Error('HOST is invalid');
    }

    const PROTOCOL = config.api.protocol;
    // const PORT = config.api.port ? `:${config.api.port}` : '';
    const ROUTE = server === 'stomp' ? '' : 'api/';
    const PATH = `${PROTOCOL}://${HOST}/${ROUTE}`;

    const api_urls = {
        // auth
        register: 'register',
        login: 'login',
        login_phone: 'login/phone/sendSms',
        login_phone_code: 'login/phone',
        change_email: 'email/change',
        change_password: 'password/change',
        change_name: 'name/change',
        recovery_password: 'password/recovery',
        refreshToken: 'token',

        // profile
        profile: 'profile',
        account_avatar: (uuid) => `profile/avatar/${uuid}`,
        upload_avatar: 'profile/upload/avatar',
        chats: (uuid) => `chats${getParams(uuid)}`,
        create_chats: (uuid) => `chats/create/${uuid}`,
        blocking_chats: 'messages/blocking',
        unblocking_chats: 'messages/unblocking',
        friends: 'friends',
        blocking_friends: 'friends/blocking',
        unblocking_friends: 'friends/unblocking',
        friend: (type, uuid) => `friends/${type}/${uuid}`,
        delete_friend: (uuid) => `friends/delete/${uuid}`,
        request_friends: (uuid) => `friends/request/${uuid}`,
        complain_user: 'user/complain',
        invites: 'invites',
        users_find: 'users/find',
        users_name: (uuid) => `users/name/${uuid}`,
        exponentToken: 'user/exponentToken',
        transactions: (uuid) => `account/transactions/${uuid}?sort=asc&pageNumber=1&pageSize=1000`,

        // crypto
        account_balance: (uuid, currency) => `account/balance/${uuid}/${currency}`,
        deposit: 'deposit',
        withdrawal: (wallet, value) => `withdrawal/${wallet}/${value}/OURO`,
        transferred: (uuid, amount) => `transferred/${uuid}/${amount}/OURO`,
        account_pin: () => 'account/withdrawal/password/check',
        account_pin_update: (newValue, oldValue) =>
            `account/withdrawal/password/update?value=${newValue}&oldValue=${oldValue}`,
        account_pin_set: (value) => `account/withdrawal/password/set?value=${value}`,

        // engine
        players: 'players',

        // stomp
        broker: 'broker',
    };

    const getParams = (param) => {
        return param || param === 0 ? `/${param}` : '';
    };

    const getUrl = (urls, url) => {
        if (typeof url !== 'string') {
            return '';
        }

        const url_path = url.split('.');
        if (url_path.length > 0) {
            let result = urls;
            for (let i = 0; i < url_path.length; i++) {
                if (!(url_path[i] in result)) {
                    result = '';
                    break;
                }

                result = result[url_path[i]];
            }

            if (typeof result === 'function') {
                return `${PATH}${result(...rest).trim()}`;
            }

            if (typeof result === 'string') {
                return `${PATH}${result.trim()}`;
            }
        }
    };

    return getUrl(api_urls, url);
};
