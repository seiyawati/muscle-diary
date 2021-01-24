import React, { useContext } from 'react'
// import { withRouter } from 'react-router'
import { AuthContext } from '../../auth/AuthProvider'
import Copyright from './Copyright'
import { Button, TextField, FormControlLabel, Checkbox, Grid, Link, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const Form = () => {
  const { emailLogin } = useContext(AuthContext)
  // AuthContextからsignup関数を受け取る
  const handleSubmit = (event) => {
    event.preventDefault()
    const { email, password } = event.target.elements
    emailLogin(email.value, password.value, history)
  }

  const useStyles = makeStyles((theme) => ({
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    multilineColor: {
      color: 'red',
    },
  }))

  const classes = useStyles()

  return (
    <form className={classes.form} noValidate onSubmit={handleSubmit}>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="email"
        label="現在ご利用できません。"
        name="email"
        autoComplete="email"
        autoFocus
        InputProps={{
          className: classes.multilineColor,
        }}
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="password"
        label="現在ご利用できません。"
        type="password"
        id="password"
        autoComplete="current-password"
        InputProps={{
          className: classes.multilineColor,
        }}
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
  )
}

export default Form
