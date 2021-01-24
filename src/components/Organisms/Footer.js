import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import YouTubeIcon from '@material-ui/icons/YouTube'
import GitHubIcon from '@material-ui/icons/GitHub'
import Copyright from '../Atoms/Copyright'
import { Grid, Link } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#2196F3',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: '#2196F3',
  },
}))

export default function SimpleBottomNavigation() {
  const classes = useStyles()

  return (
    <Grid className={classes.footer}>
      <BottomNavigation showLabels className={classes.root}>
        <Link href="https://www.youtube.com/playlist?list=PLcynJ47QaWNtO61AsyfgUKJyIGWuyY7Ir" target="_blank">
          <BottomNavigationAction label="YouTube" icon={<YouTubeIcon />} />
        </Link>
        <Link href="https://github.com/SasakiPeter/muscle_diary" target="_blank">
          <BottomNavigationAction label="GitHub" icon={<GitHubIcon />} />
        </Link>
      </BottomNavigation>
      <Copyright />
    </Grid>
  )
}
