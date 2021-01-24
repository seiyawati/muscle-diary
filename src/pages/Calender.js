import * as React from 'react'
import {
  Container,
  Paper,
  Link,
  IconButton,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  Grid,
} from '@material-ui/core'
import { EditingState, ViewState, IntegratedEditing } from '@devexpress/dx-react-scheduler'
import {
  Scheduler,
  Resources,
  MonthView,
  Appointments,
  Toolbar,
  DateNavigator,
  AppointmentTooltip,
  AppointmentForm,
  ConfirmationDialog,
  // CurrentTimeIndicator,
  // EditRecurrenceMenu,
  // DragDropProvider,
  // WeekView,
  // ViewSwitcher,
  TodayButton,
} from '@devexpress/dx-react-scheduler-material-ui'
import {
  // TimeTableCell,
  Appointment,
  AppointmentContent,
  FlexibleSpace,
  Navbar,
} from '../components/Organisms'
import { withRouter } from 'react-router-dom'
import { addtoDB, fetchData, deletefromDB } from '../contexts/Appointments'
// import { addUser } from '../contexts/Users'
import firebase from '../plugins/firebase'
import YouTubeIcon from '@material-ui/icons/YouTube'

var Cuser

const appointments = [
  // {
  //   id: 0,
  //   title: '腕立て伏せ(1/2)',
  //   startDate: new Date(2021, 0, 20, 21, 0),
  //   endDate: new Date(2021, 0, 20, 21, 5),
  //   url: 'https://youtu.be/JDc-xApip7k',
  //   tagId: 4,
  // },
  // {
  //   id: 1,
  //   title: '腕立て伏せ(2/2)',
  //   startDate: new Date(2021, 0, 20, 21, 0),
  //   endDate: new Date(2021, 0, 20, 21, 5),
  //   url: 'https://youtu.be/MutTO8nsXLE',
  //   tagId: 4,
  // },
  // {
  //   id: 2,
  //   title: '腹筋(1/2)',
  //   startDate: new Date(2021, 0, 20, 21, 0),
  //   endDate: new Date(2021, 0, 20, 21, 5),
  //   url: 'https://youtu.be/YIm51_aCja4',
  //   tagId: 2,
  // },
  // {
  //   id: 3,
  //   title: '腹筋(2/2)',
  //   startDate: new Date(2021, 0, 23, 21, 0),
  //   endDate: new Date(2021, 0, 23, 21, 5),
  //   // startDate: '2021-01-23T21:00',
  //   // endDate: '2021-01-23T21:05',
  //   url: 'https://youtu.be/0F2uBW_wh3Y',
  //   tagId: 2,
  // },
  // {
  //   id: 4,
  //   title: '腕立て伏せ(1/2)',
  //   startDate: new Date(2021, 0, 17, 21, 0),
  //   endDate: new Date(2021, 0, 17, 21, 5),
  //   url: 'https://youtu.be/JDc-xApip7k',
  //   tagId: 4,
  // },
  // {
  //   id: 5,
  //   title: '腕立て伏せ(1/2)',
  //   startDate: new Date(2021, 0, 14, 21, 0),
  //   endDate: new Date(2021, 0, 14, 21, 5),
  //   url: 'https://youtu.be/JDc-xApip7k',
  //   tagId: 4,
  // },
  // {
  //   id: 6,
  //   title: 'スクワット(1/2)',
  //   startDate: new Date(2021, 0, 14, 21, 0),
  //   endDate: new Date(2021, 0, 14, 21, 5),
  //   url: 'https://youtu.be/xGnfPpjki34',
  //   tagId: 1,
  // },
  // {
  //   id: 7,
  //   title: '背筋(1/2)',
  //   startDate: new Date(2021, 0, 12, 21, 0),
  //   endDate: new Date(2021, 0, 12, 21, 5),
  //   url: 'https://youtu.be/CuuBp4Dkgz0',
  //   tagId: 3,
  // },
  // {
  //   id: 8,
  //   title: '腕立て伏せ(1/2)',
  //   startDate: new Date(2021, 0, 12, 21, 0),
  //   endDate: new Date(2021, 0, 12, 21, 5),
  //   url: 'https://youtu.be/JDc-xApip7k',
  //   tagId: 4,
  // },
]

const appointments2 = [
  {
    id: 0,
    title: '腕立て伏せ(1/2)',
    startDate: new Date(2021, 0, 20, 21, 0),
    endDate: new Date(2021, 0, 20, 21, 5),
    tagId: 4,
  },
]

const movie_list = [
  {
    movieId: 0,
    title: 'シーズン1 腕立て伏せ(1/2)',
    url: 'https://youtu.be/JDc-xApip7k',
    tagId: 4,
  },
  {
    movieId: 1,
    title: 'シーズン1 腕立て伏せ(2/2)',
    url: 'https://youtu.be/MutTO8nsXLE',
    tagId: 4,
  },
  {
    movieId: 2,
    title: 'シーズン1 腹筋(1/2)',
    url: 'https://youtu.be/YIm51_aCja4',
    tagId: 2,
  },
  {
    movieId: 3,
    title: 'シーズン1 腹筋(2/2)',
    url: 'https://youtu.be/0F2uBW_wh3Y',
    tagId: 2,
  },
  {
    movieId: 4,
    title: 'シーズン1 スクワット(1/2)',
    url: 'https://youtu.be/xGnfPpjki34',
    tagId: 1,
  },
  {
    movieId: 5,
    title: 'シーズン1 スクワット(2/2)',
    url: 'https://youtu.be/xRSKJK1X9bk',
    tagId: 1,
  },
  {
    movieId: 6,
    title: 'シーズン1 背筋(1/2)',
    url: 'https://youtu.be/CuuBp4Dkgz0',
    tagId: 3,
  },
  {
    movieId: 7,
    title: 'シーズン1 背筋(2/2)',
    url: 'https://youtu.be/mUl4gocyEfk',
    tagId: 3,
  },
  {
    movieId: 8,
    title: 'シーズン1 サーキット(1/2)',
    url: 'https://youtu.be/BJlkS4DkBHE',
    tagId: 5,
  },
  {
    movieId: 9,
    title: 'シーズン1 サーキット(2/2)',
    url: 'https://youtu.be/pVNFPz_I8E0',
    tagId: 5,
  },
]

const tags = [
  {
    text: 'スクワット',
    id: 1,
    color: '#7E57C2',
  },
  {
    text: '腹筋',
    id: 2,
    color: '#FF7043',
  },
  {
    text: '背筋',
    id: 3,
    color: '#E91E63',
  },
  {
    text: '腕立て伏せ',
    id: 4,
    color: '#FFA726',
  },
  {
    text: 'サーキット',
    id: 5,
    color: '#AB47BC',
  },
]

movie_list

const resources = [
  {
    fieldName: 'tagId',
    title: 'タグ',
    instances: tags,
  },
]

const conf_messages = {
  deleteButton: '削除',
  cancelButton: 'キャンセル',
  confirmDeleteMessage: '本当に削除しますか？',
}

const appo_form_messages = {
  detailsLabel: 'タイトル',
  moreInformationLabel: '',
}

const Header = ({ appointmentData, ...restProps }) => {
  return (
    <AppointmentTooltip.Header {...restProps} appointmentData={appointmentData}>
      <Link href={appointmentData.url}>
        <IconButton>
          <YouTubeIcon />
        </IconButton>
      </Link>
    </AppointmentTooltip.Header>
  )
}

// const TextEditor = (props) => {
//   console.log('====================================')
//   console.log(props)
//   console.log('====================================')
//   // eslint-disable-next-line react/destructuring-assignment
//   if (props.type === 'multilineTextEditor') {
//     return null
//   }
//   if (props.type === 'titleTextEditor') {
//     console.log('====================================')
//     console.log(props.placeholder)
//     console.log('====================================')
//     // Object.assign(props, { placeholder: 'タイトル' })
//     return <AppointmentForm.TextEditor {...props} placeholder="タイトル" />
//   }
//   return <AppointmentForm.TextEditor {...props} />
// }

// const BooleanEditor = ({ ...props }) => {
//   console.log('====================================')
//   console.log(props)
//   console.log('====================================')

//   return null
// }

// const RecurrenceLayout = ({ ...props }) => {
//   console.log('====================================')
//   console.log(props)
//   console.log('====================================')

//   return null
// }

const SelectComponent = ({ onFieldChange, appointmentData, ...restProps }) => {
  console.log('====================================')
  console.log(appointmentData, restProps)
  console.log('====================================')
  const onChange = React.useCallback((movieId) => onFieldChange({ movieId }), [onFieldChange])
  const changeStartDate = React.useCallback((startDate) => onFieldChange({ startDate }), [
    onFieldChange,
  ])
  const changeEndDate = React.useCallback((endDate) => onFieldChange({ endDate }), [onFieldChange])
  return (
    <div>
      <FormControl>
        <InputLabel id="menu">今日はどのメニュー？</InputLabel>
        <Select
          labelId="menu"
          id="demo-customized-select"
          value={0}
          onChange={onChange}
          // input={<BootstrapInput />}
        >
          {movie_list.map((movie) => (
            <MenuItem key={movie.movieId} value={movie.movieId}>
              {movie.title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Grid>
        <AppointmentForm.DateEditor
          value={appointmentData.startDate}
          onValueChange={changeStartDate}
        />
        <AppointmentForm.DateEditor value={appointmentData.endDate} onValueChange={changeEndDate} />
      </Grid>
    </div>
  )
}

// const BasicLayout = ({ onFieldChange, appointmentData, ...restProps }) => {
//   // const onCustomFieldChange = (nextValue) => {
//   //   onFieldChange({ tagId: nextValue })
//   // }

//   console.log('====================================')
//   console.log(restProps.booleanEditorComponent, 'boolean')
//   console.log(restProps.dateEditorComonent, 'date editor')
//   console.log(restProps.labelComponent, 'label')
//   console.log(restProps.resourceEditorComponent, 'resource editor')
//   console.log(restProps.selectComponent, 'select')
//   console.log(restProps.textEditorComponent, 'text editor')
//   console.log('====================================')

//   // const selectoption = [
//   //   { id: 1, text: 'hoge' },
//   //   { id: 2, text: 'fuga' },
//   // ]

//   return (
//     <AppointmentForm.BasicLayout
//       appointmentData={appointmentData}
//       onFieldChange={onFieldChange}
//       {...restProps}
//       selectComponent={SelectComponent}
//       // booleanEditorComponent={BooleanEditor}
//       // textEditorComponent={() => null}
//       // booleanEditorComponent={() => null}
//     ></AppointmentForm.BasicLayout>
//   )
// }

// const DayScaleCell = (props) => (
//   <MonthView.DayScaleCell {...props} style={{ textAlign: 'center', fontWeight: 'bold' }} />
// )

// propsはコンポーネントが生成されるときに親から渡されるオブジェクト. 不変
// stateはコンポーネント内で保持されるオブジェクト, 可変
class Calender extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: appointments,
    }
    /** 
    fetchData().then(
      (value) => {
        console.log('value', appointments2)
        console.log('value', appointments)
        // console.log('value', value)
        this.setState({
          data: value,
        })
      },
      (error) => {
        console.error('error:', error.message)
      }
    )
    */
  }

  componentDidMount() {
    console.log('componentDidMount now!')

    Cuser = firebase.auth().currentUser.uid
    console.log('USER:', Cuser)
    /** 
    db.collection('users')
      .where('uid', '==', Cuser)
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.empty) {
          console.log('重複するusername無し:', querySnapshot)
          this.validation.username = true
          addUser(Cuser)
        } else {
          console.log('重複するusername有り', querySnapshot)
          this.validation.username = false
        }
      })
      .catch((err) => {
        console.log(err)
      })
      */
    fetchData(Cuser).then(
      (value) => {
        console.log('value', appointments2)
        this.setState({
          data: value,
        })
      },
      (error) => {
        console.error('error:', error.message)
      }
    )
  }

  // commitに変更があったか, に関するイベントハンドラ
  // Calenderインスタンスにバインドする
  commitChanges = ({ added, changed, deleted }) => {
    console.log('監視中2', added)
    this.setState((state) => {
      let { data } = state
      if (added) {
        // const startingAddedId = data.length > 0 ? data[data.length - 1].id + 1 : 0
        // data = [...data, { id: startingAddedId, ...added }]
        console.log('ADDED!!!')
        addtoDB({ ...added }, Cuser, movie_list)
        // console.log({ id: startingAddedId, ...added })
      }
      if (changed) {
        // map：配列を展開して, それぞれに関数を適用する
        //     それぞれの要素がユニークなキーを持ってないとバグる
        // appointの中で, 変更があったものは変更を反映, そうでないものはそのままにしてdataを返す
        data = data.map((appointment) =>
          changed[appointment.id] ? { ...appointment, ...changed[appointment.id] } : appointment
        )
      }
      if (deleted !== undefined) {
        console.log('削除対象あり')
        // console.log('ALLDATA', data)
        var _ = require('lodash')
        const alldata = data
        data = data.filter((appointment) => appointment.id !== deleted)
        // console.log('DATA', data)
        // lodashの差集合により削除するデータを求める
        const deldata = _.difference(alldata, data)
        // console.log('DELDATA', deldata)
        deldata.map((appointment) => deletefromDB(appointment.id))
      }
      fetchData(Cuser).then(
        (value) => {
          console.log('value', appointments2)
          this.setState({
            data: value,
          })
        },
        (error) => {
          console.error('error:', error.message)
        }
      )
      return { data }
    })
  }

  render() {
    const { data } = this.state
    return (
      <Container>
        <Navbar />
        <Paper>
          {/* <Paper classNeme={}> */}
          <Scheduler
            data={data}
            // locale={'ja-JP'}
          >
            <EditingState onCommitChanges={this.commitChanges} />
            <ViewState
            // defaultCurrentDate="2018-07-17"
            />

            <MonthView
            // 一つ一つのセルの背景を決められる
            // timeTableCellComponent={TimeTableCell}
            // dayScaleCellComponent={DayScaleCell}
            />

            {/* <WeekView/> */}

            <Toolbar flexibleSpaceComponent={FlexibleSpace} />
            <DateNavigator />
            <TodayButton />

            {/* 繰り返さないとき 削除の時の確認も必要 */}
            <IntegratedEditing />
            <ConfirmationDialog ignoreCancel messages={conf_messages} />

            <Appointments
              appointmentComponent={Appointment}
              appointmentContentComponent={AppointmentContent}
            />
            {/* アポクリックで、表示するモーダル */}
            <AppointmentTooltip
              showCloseButton
              showDeleteButton
              showOpenButton
              headerComponent={Header}
              // contentComponent={Content}
              // commandButtonComponent={CommandButtonTooltip}
            />

            {/* アポを編集するフォームが出る これに何を載せるか考えたい */}
            <AppointmentForm
              basicLayoutComponent={SelectComponent}
              // textEditorComponent={TextEditor}
              // commandButtonComponent
              // booleanEditorComponent={BooleanEditor}
              recurrenceLayoutComponent={() => null}
              resourceEditorComponent={() => null}
              messages={appo_form_messages}
            />

            <Resources data={resources} />

            {/* ドラッグドロップ必要か？ */}
            {/* <DragDropProvider /> */}

            {/* <CurrentTimeIndicator
            // updateInterval={}
            /> */}

            {/* <ViewSwitcher/> */}
          </Scheduler>
        </Paper>
      </Container>
    )
  }
}

export default withRouter(Calender)
