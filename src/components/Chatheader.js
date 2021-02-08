import React from 'react'
import '../styles/Chatheader.css'
import NotificationsIcon from '@material-ui/icons/Notifications';
import EditLocationIcon from '@material-ui/icons/EditLocation';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import SearchIcon from '@material-ui/icons/Search';
import SendIcon from '@material-ui/icons/Send';
import HelpIcon from '@material-ui/icons/Help';


function Chatheader({ channelName }) {

    return (
        <div className="chatheader">
            <div className="chatheader__left">
                <h3>
                    <span className="chatheader__hash">
                        #
                    </span>
                    { channelName }
                </h3>
            </div>

            <div className="chatheader__right">
                <NotificationsIcon />
                <EditLocationIcon />
                <PeopleAltIcon />

                <div className="chatheader__search">
                    <input placeholder="Search"/>
                    <SearchIcon />
                </div>
                <SendIcon />
                <HelpIcon />
            </div>
        </div>
    )
}

export default Chatheader
