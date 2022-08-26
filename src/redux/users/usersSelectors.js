export const getUsers = (state) => {
    return (state.usersPage.users);
}
export const getPageSize = (state) => {
    return (state.usersPage.pageSize);
}
export const getTotalUsersCount = (state) => {
    return (state.usersPage.totalUsersCount);
}
export const getCurrentPage = (state) => {
    return (state.usersPage.currentPage);
}
export const getGalleryPosition = (state) => {
    return (state.usersPage.galleryPosition);
}
export const getIsFetching = (state) => {
    return (state.usersPage.isFetching);
}


