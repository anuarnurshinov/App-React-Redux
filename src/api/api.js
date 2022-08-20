import * as axios from 'axios'

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '9734b6fb-34b4-495c-9e45-98554746f519'
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pagesSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pagesSize}`)
            .then(response => {
                return response.data
            })
    },
    postFollow(userID) {
        return instance.post(`follow/${userID}`)
            .then(response => {
                return response.data
            })
    },
    deleteFollow(userID) {
        return instance.delete(`follow/${userID}`)
            .then(response => {
                return response.data
            })
    }
}

