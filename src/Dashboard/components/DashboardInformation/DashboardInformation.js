import React from 'react'
import './DashboardInformation.css'

const DashboardInformation=({username})=>{
    return(
    <div className="dashboard_info_text_container">
        <span className='dashboard_info_text_title'>
            Hello {username} welcome to VideoTalker
        </span>
        <span className='dashboard_info_text_description'>
            You can start a call calling directly a person from a list or 
            you can create or join group call.
        </span>

    </div>);

}

export default DashboardInformation
