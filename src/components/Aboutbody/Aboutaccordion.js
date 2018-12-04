import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
})

function Aboutaccoridion(props) {
  const { classes } = props
  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>About Me</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <ol>
            <li>My name is JJ Clements, and I love computers.</li>
            <li>Grew up an Army brat</li>
            <li>
              Graduated from the University of Wisconsin-Madison. Go Badgers!
            </li>
            <li>
              Commissioned in the Army after graduation. Went to Ranger School,
              deployed twice to Afghanistan with the 101st Airborne Division,
              spent 2 amazing years living in Seoul, and now I'm free.
            </li>
            <li>Pursuing computer stuff</li>
          </ol>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>
            Current Favorite DJs
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <ol>
            <li>Zhu</li>
            <li>Jan Blomqvist</li>
            <li>Zimmer</li>
          </ol>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  )
}

export default withStyles(styles)(Aboutaccoridion)
