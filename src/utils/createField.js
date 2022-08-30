

export const createFieldForForm = (method, fieldName, value, message, errors, placeholder) => {
    return <input {...method(fieldName, {
        required: {
            value: value,
            message: message,
        }
    })} placeholder={errors[fieldName] ? errors[fieldName][message] : placeholder} />
}