import moment from "moment"

export const getDayAndMonth = (time) => {
    const date = moment.unix(time).format('DD/MM')
    return date
}
    