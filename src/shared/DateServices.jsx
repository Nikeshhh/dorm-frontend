

export const FormatDate = (inputString, withTime = true) => {
    const inputDate = new Date(inputString)
    let resultString = `${inputDate.getDate().toString().padStart(2, '0')}.${(inputDate.getMonth() + 1).toString().padStart(2, '0')}.${inputDate.getFullYear()}`;
    if (withTime) {
        resultString = resultString + ` ${inputDate.getHours().toString().padStart(2, '0')}:${inputDate.getMinutes().toString().padStart(2, '0')}`;
    }
    return resultString;
}