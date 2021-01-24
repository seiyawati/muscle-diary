import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core'
import DateRangeIcon from '@material-ui/icons/DateRange'
import firebase from '../../plugins/firebase'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}))

const Navbar = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <DateRangeIcon className={classes.menuButton} />
          <Typography variant="h5" className={classes.title}>
            Muscle Diary
          </Typography>
          <Button color="inherit" onClick={() => firebase.auth().signOut()}>
            <Typography variant="subtitle1" className={classes.title}>
              ログアウト
            </Typography>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar
