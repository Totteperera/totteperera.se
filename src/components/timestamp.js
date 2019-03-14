import React from "react"
import moment from "moment"

const TimeStamp = ({ date }) => {
    const minutesDiff = moment().diff(moment(date), 'minutes')
    const isRecent = minutesDiff < 1
    const dateString = isRecent ? 'Just now' : `${minutesDiff} minutes ago`

    return (
        <span>{dateString}</span>
    )
}

export default TimeStamp