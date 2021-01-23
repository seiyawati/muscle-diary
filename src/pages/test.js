import React from 'react'
import { Label, Input, Button } from 'reactstrap'
import { db } from '../plugins/firebase'

class Create extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'aaa',
    }
    this.OnSubmit = this.OnSubmit.bind(this)
  }
  //登録ボタンが押されたら
  OnSubmit(string) {
    db.collection('users')
      .add({
        name: string.name,
      })
      .then((doc) => {
        console.log(`${doc.id}をDBに追加したよ!`)
      })
      .catch((error) => {
        console.log(error)
      })
    print('clicked')
  }

  render() {
    return (
      <div className="container">
        <h3 className="text-center my-5">新規作成</h3>
        <Label for="name">氏名</Label>
        <Input type="text" name="name" id="name" />
        <Input type="email" email="email" id="email" />
        <Button type="submit" onclick={this.OnSubmit}>
          登録
        </Button>
      </div>
    )
  }
}

export default Create
