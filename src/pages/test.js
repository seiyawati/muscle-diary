import React from 'react'
import { Input, Button } from '@material-ui/core'
import { db } from '../plugins/firebase' // eslint-disable-line

class Create extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'aaa',
    }
    this.OnSubmit = this.OnSubmit.bind(this)
  }
  //登録ボタンが押されたら
  OnSubmit() {
    db.collection('users')
      .add({
        name: 'aaa',
      })
      //.then((doc) => {
      //  console.log(`${doc.id}をDBに追加したよ!`)
      //})
      .catch((error) => {
        console.log(error)
      })
    // print('aaa')
  }

  render() {
    return (
      <div className="container">
        <h3 className="text-center my-5">新規作成</h3>
        <Input type="text" name="name" id="name" />
        <Input type="email" email="email" id="email" />
        <Button type="submit" onClick={this.OnSubmit}>
          登録
        </Button>
      </div>
    )
  }
}

export default Create
