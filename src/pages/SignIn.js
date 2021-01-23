import React from 'react'
import { withRouter } from 'react-router-dom'
import firebase from '../plugins/firebase'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Paper,
  Box,
  Grid,
  Typography,
} from '@material-ui/core'
import {
  GoogleLoginButton,
  TwitterLoginButton,
  FacebookLoginButton,
} from 'react-social-login-buttons'
import { makeStyles } from '@material-ui/core/styles'
import { Copyright } from '../components/Atoms'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://star-labo.co.jp/wp-content/uploads/2020/06/topics-57.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))

const SignInSide = (props) => {
  const signInWithGoogle = () => {
    // Googleプロバイダオブジェクトのインスタンスを作成
    const provider = new firebase.auth.GoogleAuthProvider()
    // ポップアップウィンドウでログインを行う場合はsignInWithPopupを呼び出す
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((user) => {
        alert('success : ' + user.user.displayName + 'さんでログインしました')
        // console.log(props.history)
        props.history.push('/')
      })
      .catch((error) => {
        alert(error.message)
      })
  }

  const classes = useStyles()

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            ログイン
          </Typography>
          <GoogleLoginButton
            align="center"
            iconSize={'20'}
            size={'40px'}
            onClick={() => signInWithGoogle()}
          >
            <span style={{ fontSize: 16 }}>Googleでログイン</span>
          </GoogleLoginButton>
          <TwitterLoginButton align="center" iconSize={'20px'} size={'40px'}>
            <span style={{ fontSize: 16 }}>Twitterでログイン</span>
          </TwitterLoginButton>
          <FacebookLoginButton align="center" iconSize={'20px'} size={'40px'}>
            <span style={{ fontSize: 16 }}>Facebookでログイン</span>
          </FacebookLoginButton>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="メールアドレス"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="パスワード"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="パスワードを保存する"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              ログイン
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  パスワードをお忘れですか？
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {'アカウントをお持ちでない方は登録してください。'}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  )
}

export default withRouter(SignInSide)
