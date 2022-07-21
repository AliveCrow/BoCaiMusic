import config from './config'
import axios from 'axios'
import {Message} from "@arco-design/web-vue";

const instance = axios.create(config)

instance.interceptors.request.use(
    config => {
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

instance.interceptors.response.use(
    response => {
        if (response.data.status === 200) {
            return response.data
        } else if (response.data.status === 500) {
            Message.error(response.data.msg)
            return Promise.reject(response)
        }
    },
    error => {
        const data = error.response.data
        if (error.response.status === 500) {
            Message.error('网络错误')
        } else if (error.response.status === 401) {
            Message.error('未认证')
        } else {
            if (data) {
                if (data.status === 401) {
                    Message.error(data.msg)
                } else if (data.status === 500) {
                    Message.error(data.msg)
                }
            } else {
                Message.error('网络错误')
            }
        }
        return Promise.reject(error)
    }
)

export default instance
