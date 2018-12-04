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
          <Typography className={classes.heading}>Middleware</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
        <Typography>
             Plugins/methods that change the request or the response object before they get handled by the application.
          </Typography>
          <Typography>
            app.use mounts the specified middleware function at the specified path... The middleware function is executed when then base
            of the requested path matches [path] (the 1st argument that is passed to use).
          </Typography>
          
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>
            Body-Parser
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
        <Typography>
            Middleware that parses the body of an incoming request and populates req.body; Prior to express v4, it was built in, but now must be installed separately
        </Typography>
        <Typography>
            Provides the following parsers: JSON body parser, Raw body parser, Text body parser, URL-encoded form body parser
        </Typography>
        <Typography>
            URLencoded -- Only parses urlencoded bodies and only looks at requests where "Content-type" header matches the type.
            The object that is returned (in req.body) will contain key-value pair. The value can be a string or an array when extended:false, or any type when extended:true

            urlencoded tells body parser to extract data from the form request and add them to req.body
        </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>
            Cookie-Parser
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
        <Typography>
            Middleware that parses the header of a cookie and populates req.cookie
        </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  )
}

export default withStyles(styles)(Aboutaccoridion)
