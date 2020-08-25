import React from 'react'
import "./VideoHeader.css";
import CameraAltOutlinedIcon from '@material-ui/icons/CameraAltOutlined';
import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined';

function VideoHeader() {
    return (
        <div className="videoHeader">
            <ArrowBackIosOutlinedIcon />
            <h3>Reels</h3>
            <CameraAltOutlinedIcon />
        </div>
    )
}

export default VideoHeader
