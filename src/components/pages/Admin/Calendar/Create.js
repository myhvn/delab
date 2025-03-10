import React from 'react';
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import moment from 'moment';

import {
  Form, Input, Button, Upload, Icon, DatePicker,TimePicker, InputNumber, message
} from 'antd';

import { addNewEventIntoCalendar, resetCE } from '../../../../actions';
// import DraftEditor from './CalendarEditor';
import DraftEditor from './Editor';

import configUrl from '../../../../settings'

const { RangePicker } = DatePicker;

class AddPost extends React.Component {
  state = {
    checkTitle: true,
    checkLocation: false,
    checkDates: true,
    checkTime: true,
    checkImg: true,
    imageUrl: null,
    loading: false,
    descriptionEditor: null,
    descriptionHtml: null
  }

  onPriceChange = value => {
    this.setState({
      priceValue: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {
          let promise = new Promise( (resolve, reject) => {
            const sendPostData = {
              title: values.title,
              location: values.location,
              // description: values.description,
              description: this.state.descriptionHtml,
              editor: this.state.descriptionEditor,
              cover: values.cover[0].response.fileLocation,
              price: values.price,
              dates: {
                start: moment(values['dates'][0]._d).format('YYYY-MM-DD'),
                end: moment(values['dates'][1]._d).format('YYYY-MM-DD')
              },
              time: {
                start: values.timeStart._d,
                end: values.timeEnd ? values.timeEnd._d: null
              }
            }

            resolve(sendPostData)

            throw new Error('O_o')
          });

          promise.then((sendPostData) => {
            this.props.sendData( sendPostData )
          })
          promise.then(() => {
            this.props.form.resetFields();
          })
        }
    });
  };

  normFile = e => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  handleChange = e => {
    this.setState(
      {
        checkNick: e.target.checked,
      },
      () => {
        this.props.form.validateFields(['nickname'], { force: true });
      },
    );
  }

  beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }

    return isJpgOrPng && isLt2M;
  }

  uploadImg = info => {
    if (info.file.status === 'uploading') {
      this.setState({ loadingImg: true });
      return;
    }

    if (info.file.status === 'done') {
      this.getBase64(info.file.originFileObj, imageUrl =>
        this.setState({
          imageUrl,
          loading: false,
        }),
      );
    }
  }

  getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }

  getDescriptionEditor = ( data ) => {
    const { rawData, htmlData} = data
    this.setState({
      descriptionEditor: JSON.stringify(rawData),
      descriptionHtml: JSON.stringify(htmlData)
    })
    console.log(rawData,
      htmlData)
  }

  render() {
    const { isCreated } = this.props;
    const { getFieldDecorator } = this.props.form;
    const { postDATA } = this.props

    if( isCreated ){
      return (<Redirect to="/admin/calendar" />);
    }

    return (
      <>
      <div className="admin-post-title-edit">Создать/Отредактировать</div>

      <Button className="admin-alt-btn-close-editing" onClick={this.props.resetCE} shape="circle" >
        <Link to={`/admin/calendar/`}>
          <Icon type="close" />
        </Link>
      </Button>
      <Form  onSubmit={this.handleSubmit}>

        <Form.Item
          hasFeedback={true}
          label={
            <>
              <span><Icon type="pic-center" />&emsp;</span>
              <span>Заголовок</span>
            </>
            }
        >
          {getFieldDecorator('title', {
            initialValue: postDATA ? postDATA[0].title : '',
            rules: [
              {
                required: this.state.checkTitle,
                message: 'Ведите название мероприятия',
              },
            ],
          })(<Input placeholder="Название мероприятия" />)}
        </Form.Item>

        <Form.Item
          hasFeedback={true}
          label={
            <>
              <span><Icon type="environment" />	&emsp;</span>
              <span>Локация</span>
            </>
            }
        >
          {getFieldDecorator('location', {
            initialValue: postDATA ? postDATA[0].location : '',
            rules: [
              {
                required: this.state.checkLocation,
                message: 'Введите место проведения',
              },
            ],
          })(<Input placeholder="Место проведения" />)}
        </Form.Item>

        <Form.Item
          hasFeedback={true}
          label={
            <>
              <span><Icon type="message" />&emsp;</span>
              <span>Цена</span>
            </>
            }
        >
          {getFieldDecorator('description', {
            initialValue: postDATA ? postDATA[0].description : ''
          })(
            <div>
              <span><Icon type="message" />&emsp;</span>
              <span>Описание: </span>
              <DraftEditor dataDescriptionEditor={this.getDescriptionEditor} />
            </div>
            // <TextArea
            //   placeholder="Пару слов о мероприятии"
            //   autoSize={{ minRows: 3, maxRows: 6 }}
            // />
          )}
        </Form.Item>

        <Form.Item
          label={
            <>
              <span><Icon type="money-collect" />&emsp;</span>
              <span>Цена</span>
            </>
            }
        >
          {getFieldDecorator('price', {
            initialValue: 0,
            rules: [{
              type: 'number'
            }],
          })(
            <InputNumber
              step={50}
              min={0}
              max={10000}
              formatter={value => `₴ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            />
          )}
        </Form.Item>

        <Form.Item
          hasFeedback={true}
          label={
            <>
              <span><Icon type="calendar" />	&emsp;</span>
              <span>Дата</span>
            </>
            }
        >
          {
            getFieldDecorator('dates', {
              rules: [{
                required: this.state.checkDates,
                message: 'Введите дату проведения' }]
              })(
              <RangePicker
                ranges={{
                  Today: [moment(), moment()],
                  'This Month': [moment().startOf('month'), moment().endOf('month')],
                }}
              />
          )}
        </Form.Item>

        <Form.Item
          label={
            <>
              <span><Icon type="picture" />	&emsp;</span>
              <span>Картинка</span>
            </>
            }
        >
          {getFieldDecorator('cover', {
            rules: [{
              required: this.state.checkImg,
              message: 'Загрузите картинку'
            }],
            valuePropName: 'fileList',
            getValueFromEvent: this.normFile,
          })(
            <Upload
              name="file"
              listType="picture-card"
              className="avatar-uploader"
              showUploadList={false}
              beforeUpload={this.beforeUpload}
              onChange={this.uploadImg}
              action={`${configUrl.apiPath}/private/upload/`}
              multiple={false}
            >
              {
                this.state.imageUrl ?
                  <img src={this.state.imageUrl} alt="avatar" style={{ width: '100%' }} /> :
                  <div>
                    <Icon type={this.state.loadingImg ? 'loading' : 'plus'} />
                    <div className="ant-upload-text">Upload</div>
                  </div>
              }
            </Upload>
          )}
        </Form.Item>

        <Form.Item
          hasFeedback={true}
          label={
            <>
              <span><Icon type="clock-circle" />	&emsp;</span>
              <span>Время - Начало</span>
            </>
            }
        >
            {getFieldDecorator('timeStart', {
              rules: [{
                type: 'object',
                required: this.state.checkTime,
                message: 'Введите время начала мероприятия!' }],
            })(
              <TimePicker
                minuteStep={15}
                defaultOpenValue={moment('18:00', 'HH:mm')}
                format='HH:mm'
          />
      )}
        </Form.Item>

        <Form.Item
          hasFeedback={true}
          label={
            <>
              <span><Icon type="history" />	&emsp;</span>
              <span>Время Заверш.</span>
            </>
            }
        >
            {getFieldDecorator('timeEnd', {
              rules: [{
                type: 'object',
                message: 'Введите время конца мероприятия!' }],
            })(
              <TimePicker
                minuteStep={15}
                defaultOpenValue={moment('20:00', 'HH:mm')}
                format='HH:mm'
          />
      )}
        </Form.Item>

        <Form.Item >
          <Button type="primary" htmlType="submit">Ок</Button>
          <Button type="primary" onClick={this.props.resetCE} style={{marginLeft: '20px'}}>
            <Link to={`/admin/calendar/`}>Отмена</Link>
          </Button>
        </Form.Item>

      </Form>
      </>
    );
  }
}

const mapStateToProps = ( state ) => ({
  postDATA: state.admin.calendar.editingPost,
  isCreated: state.admin.calendar.isCreated
})
const mapDispacthToProps = ( dispatch ) => ({
  sendData: ( data ) => dispatch( addNewEventIntoCalendar(data) ),
  resetCE: () => dispatch( resetCE() )
})

const Create = Form.create({ name: 'validate_other' })(AddPost);

export default connect(mapStateToProps, mapDispacthToProps )(Create);