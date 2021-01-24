import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { ButtomNavigation } from '@material-ui/core'
// import DateRangeIcon from '@material-ui/icons/DateRange'
// import firebase from '../../plugins/firebase'

const styles = {
  navroot: {
    position: "fixed",
    bottom: 0,
    width: "100%",
  },
  btnroot:{
    color:'#000',
  },
  selected:{
    color:'#f00 !important',
  },
};

    <BottomNavigation>
        {'Copyright © '}
            <Link color="inherit" href="">
            ©︎生姜焼き
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
    </BottomNavigation>
  );
}