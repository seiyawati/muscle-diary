import { Button } from '@material-ui/core'
import { Link, withRouter } from 'react-router-dom'
import firebase from '../plugins/firebase'

const NotFound = () => (
  <article>
    <h1>404 お探しのページは見つかりませんでした.</h1>
    <Link to="/">Homeに戻る</Link>
    <Button onClick={ () => firebase.auth().signOut() }>ログアウト</Button>
  </article>
)

export default withRouter(NotFound)
