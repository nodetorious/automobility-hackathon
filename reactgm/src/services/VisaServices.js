import axios from 'axios'
class VisaServices {
    static MerchantSearch(data, onSuccess, onError) {
        const url = 'http://localhost:8080/api/visa/merchantsearch'
        const config = {
            method: 'POST',
            data: data
        }
        // axios.defaults.withCredentials=true
        axios(url, config)
            .then(onSuccess)
            .catch(onError)
    }

    static MerchantLocator(data, onSuccess, onError) {
        const url = 'http://localhost:8080/api/visa/merchantlocator'
        const config = {
            method: 'POST',
            data: data
        }
        // axios.defaults.withCredentials=true
        axios(url, config)
            .then(onSuccess)
            .catch(onError)
    }

    static QueueInsights(data, onSuccess, onError) {
        const url = 'http://localhost:8080/api/visa/queueinsights'
        const config = {
            method: 'POST',
            data: data
        }
        // axios.defaults.withCredentials=true
        axios(url, config)
            .then(onSuccess)
            .catch(onError)
    }

    // static getAddressById(id,onSuccess,onError){
    //     const url=`/node-api/server.js/api/address/${id}`
    //     const config={
    //         method:'GET'
    //     }
    //     axios.defaults.withCredentials=true
    //     axios(url,config)
    //         .then(onSuccess)
    //         .catch(onError)
    // }

    // static postAddress(data,onSuccess,onError){
    //     const url='/node-api/server.js/api/address/'
    //     const config={
    //         method:'POST',
    //         data:data
    //     }
    //     axios.defaults.withCredentials=true
    //     axios(url,config)
    //         .then(onSuccess)
    //         .catch(onError)
    // }

    // static deleteAddress(id,onSuccess,onError){
    //     const url=`/node-api/server.js/api/address/${id}`
    //     const config={
    //         method:'DELETE'
    //     }
    //     axios.defaults.withCredentials=true
    //     axios(url,config)
    //         .then(onSuccess)
    //         .catch(onError)
    // }

    // static updateAddress(data,onSuccess,onError){
    //     const url='/node-api/server.js/api/address/'
    //     const config={
    //         method:'PUT',
    //         data:data
    //     }
    //     axios.defaults.withCredentials=true
    //     axios(url,config)
    //         .then(onSuccess)
    //         .catch(onError)
    // }
}

export default VisaServices