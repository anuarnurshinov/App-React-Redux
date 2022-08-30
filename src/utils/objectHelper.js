export const updateObjectInArray = (items, propertyName, itemId, newObjProps) => {
    return items.map((user) => {
        if (user[propertyName] === itemId) {
            return { ...user, ...newObjProps }
        }
        return user
    })
}
