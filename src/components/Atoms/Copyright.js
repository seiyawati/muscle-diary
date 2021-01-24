import { Typography, Link } from '@material-ui/core'

const Copyright = () => (
  <Typography variant="body2" color="textSecondary" align="center">
    {'Copyright © '}
    <Link color="inherit" href="">
      生姜焼き
    </Link>{' '}
    {new Date().getFullYear()}
    {'.'}
  </Typography>
)

export default Copyright
