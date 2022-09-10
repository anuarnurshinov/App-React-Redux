import * as axios from 'axios'

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '9734b6fb-34b4-495c-9e45-98554746f519'
        // 'API-KEY': '5efc0056-47b7-4874-8c6c-a121788f1bc4'
    }
})
let unPacking = response => response.data


export const usersAPI = {
    getUsers(currentPage = 1, pagesSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pagesSize}`)
            .then(unPacking)
    },
    postFollow(userID) {
        return instance.post(`follow/${userID}`)
            .then(unPacking)
    },
    deleteFollow(userID) {
        return instance.delete(`follow/${userID}`)
            .then(unPacking)
    },
}

export const profileAPI = {
    getUserProfile(userId) {
        return instance.get(`profile/${userId}`)
            .then(unPacking)
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
            .then(unPacking)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {
            status: status
        })
            .then(unPacking)

    },
    sendPhoto(image) {
        let formData = new FormData();
        formData.append('image', image);
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(unPacking)
    },
    sendProfileInformation(data) {
        return instance.put('profile', data)
            .then(unPacking)
    },
}

export const authAPI = {
    getAuthData() {
        return instance.get(`auth/me`)
            .then(unPacking)
    },
    getAuthorized(formData) {
        return instance.post(`auth/login`, formData)
            .then(unPacking)
    },
    deleteAuthorization() {
        return instance.delete(`auth/login`)
            .then(unPacking)
    },
}

export const dialogsAPI = {
    getAllDialogs() {
        return instance.get('dialogs')
            .then(unPacking)
    },
    startChat(userId) {
        return instance.put(`dialogs/${userId}`)
            .then(unPacking)
    },
    getMessages(userId) {
        return instance.get(`dialogs/${userId}/messages`)
            .then(unPacking)
    },
    sendMessage(message, userId) {
        return instance.post(`dialogs/${userId}/messages`, {
            body: message
        })
            .then(unPacking)
    }
}