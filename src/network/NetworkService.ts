/* eslint-disable no-unused-vars */
import axios from 'axios'
import Config from './Config'
import Promise from 'ts-promise'

class RESTService {
    instance = axios.create({
        baseURL: Config.baseUrl,
        timeout: 100000,
        headers: {
            Accept: 'application/json'
        }
    })

    makeRequest = (config: any) => (
        this.instance.request(config)
            .then(response => Promise.resolve(response))
    )
}

export default RESTService