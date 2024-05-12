

export const FormatDate = (inputString) => {
    const inputDate = new Date(inputString)
    return `${inputDate.getDate().toString().padStart(2, '0')}.${(inputDate.getMonth() + 1).toString().padStart(2, '0')}.${inputDate.getFullYear()} ${inputDate.getHours().toString().padStart(2, '0')}:${inputDate.getMinutes().toString().padStart(2, '0')}`;
}