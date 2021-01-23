import { Link, withRouter } from 'react-router-dom'

const NotFound = () => (
  <article>
    <h1>404 お探しのページは見つかりませんでした.</h1>
    <Link to="/">Homeに戻る</Link>
  </article>
)

export default withRouter(NotFound)
