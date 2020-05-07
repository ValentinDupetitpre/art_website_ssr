import React from 'react'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

import './dropdownBar.css'

function DropdownBar(props)  { 

    return(
        <ExpansionPanel className="expansion" >
            <ExpansionPanelSummary className="title" expandIcon={<ExpandMoreIcon />}>
            <h4>{props.title}</h4>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                {props.children}
            </ExpansionPanelDetails>
        </ExpansionPanel>
    )
}

export default DropdownBar