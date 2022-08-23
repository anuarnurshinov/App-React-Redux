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
            .then(response => response.data)
    },
    postFollow(userID) {
        return instance.post(`follow/${userID}`)
            .then(response => response.data)
    },
    deleteFollow(userID) {
        return instance.delete(`follow/${userID}`)
            .then(response => response.data)
    },
}

export const profileAPI = {
    getUserProfile(userId) {
        return instance.get(`profile/${userId}`)
            .then(response => response.data)
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
            .then(response => response.data)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {
            status: status
        })
            .then(response => response.data)

    }
}

export const authAPI = {
    getAuthData() {
        return instance.get(`auth/me`)
            .then(response => response.data)
    },
}
