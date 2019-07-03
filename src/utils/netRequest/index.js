import internalJsonP from 'jsonp';

export default class NetRequest {
    static jsonp(option) {
        return new Promise((resolve, reject) => {
            internalJsonP(option.url, {
                param: 'callback'
            }, function(err, res) {
                if(res.status === '1') {
                    resolve(res);
                } else {
                    reject(res.message);
                }
            })
        })
    }
}