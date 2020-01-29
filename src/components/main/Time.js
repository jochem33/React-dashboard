import React from "react"

import Clock from "../sub/Clock"
import SubTime from "../sub/SubTime"


function Time() {
    return (
        <div className="dashboardComponent gridItemTime">
            <h1>Time</h1>
            <Clock width="100"/>
            <SubTime />
        </div>
    )
}

export default Time