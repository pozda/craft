import appConstants from 'utils/appConstants'
import Config from 'network/Config'

const key = Config.apiKey

export const getDataRequest = (id: number) => ({
    method: appConstants.apiMethods.GET,
    url: `${Config.baseUrl}${id}`
})

export const postDataRequest = (q: string) => ({
    method: appConstants.apiMethods.POST,
    url: `${Config.baseUrl}/post`,
    params: {
        q,
        key
    }
})

export const putData = (payload: object) => ({
    method: appConstants.apiMethods.POST,
    url: `${Config.baseUrl}/put`,
    params: {
        payload,
        key
    }
})

export const deleteData = (id: string) => ({
    method: appConstants.apiMethods.POST,
    url: `${Config.baseUrl}/delete`,
    params: {
        id,
        key
    }
})