import React from 'react';
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import moment from 'moment';

import DraftEditor from './Editor';
import {
  Form, Input, Button, Upload, DatePicker, TimePicker, InputNumber, message, Icon
} from 'antd';

import { updateEventCalendar, resetCE } from '../../../../actions';

import configUrl from '../../../../settings'

const { RangePicker } = DatePicker;

class UpdatePost extends React.Component {
  state = {
    checkTitle: true,
    checkLocation: true,
    checkDates: true,
    checkTime: true,
    checkImg: false,
    descriptionHtml: null,
    descriptionEditor: null,
  }

  // componentDidMount () {
  //   const { editingData } = this.props

  //   editingData && this.setState({
  //     descriptionHtml: editingData.description,
  //     descriptionEditor: editingData.editor
  //   })
  // }

  getDescriptionEditor = ( data ) => {
    const { rawData, htmlData} = data
    this.setState({
      descriptionEditor: JSON.stringify(rawData),
      descriptionHtml: JSON.stringify(htmlData)
    })
    console.log(rawData,
      htmlData)
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
        let promise = new Promise((resolve, reject) => {
          const sendPostData = {
            ...this.props.editingData,
            title: values.title,
            location: values.location,
            // description: values.description,
            description: this.state.descriptionHtml,
            editor: this.state.descriptionEditor,
            cover: values.cover ?
              values.cover[0].response.fileLocation :
              this.props.editingData.cover,
            price: values.price,
            dates: {
              start: moment(values['dates'][0]._d).format('YYYY-MM-DD'),
              end: moment(values['dates'][1]._d).format('YYYY-MM-DD')
            },
            time: {
              start: values.timeStart._d,
              end: values.timeEnd ? values.timeEnd._d : null
            },
            updated_at: new Date()
          }

          resolve(sendPostData)

          throw new Error('O_o')
        });

        promise.then((sendPostData) => {
          this.props.sendData(sendPostData)
        })
        promise.then(() => {
          this.props.form.resetFields()
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

  render() {
    const { getFieldDecorator } = this.props.form;
    const { editingData, isUpdated } = this.props


    if (isUpdated) {
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
        <Form onSubmit={this.handleSubmit}>
          <Form.Item
            hasFeedback={true}
            label="Заголовок "
          >
            {getFieldDecorator('title', {
              initialValue: editingData ? editingData.title : '',
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
            label="Локация "
          >
            {getFieldDecorator('location', {
              initialValue: editingData ? editingData.location : '',
              rules: [
                {
                  message: 'Введите место проведения',
                },
              ],
            })(<Input placeholder="Место проведения" />)}
          </Form.Item>

          <Form.Item
            hasFeedback={true}
            label="Описание"
          >
            {getFieldDecorator('description', {
              initialValue: editingData ? editingData.editor : ''
            })(
              // <TextArea
              //   placeholder="Пару слов о мероприятии"
              //   autoSize={{ minRows: 3, maxRows: 6 }}
              // />
              <div>
                <span><Icon type="message" />&emsp;</span>
                <span>Описание: </span>
                <DraftEditor
                  dataDescriptionEditor={this.getDescriptionEditor}
                  primaryData={editingData ? editingData.editor : ''}
                />
              </div>
            )}
          </Form.Item>

          <Form.Item
            label="Цена "
          >
            {getFieldDecorator('price', {
              initialValue: editingData ? editingData.price : 0,
              rules: [{
                type: 'number'
              }],
            })(
              <InputNumber
                step={100}
                min={0}
                max={10000}
                formatter={value => `₴ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                // parser={value => value.replace(/\$\s?|()/g, '')}
              />
            )}
          </Form.Item>

          <Form.Item
            hasFeedback={true}
            label="Дата"
          >
            {
              getFieldDecorator('dates', {
                initialValue: editingData ?
                  [
                    moment( editingData.dates.start, 'YYYY/MM/DD'),
                    moment( editingData.dates.end, 'YYYY/MM/DD')
                  ] : null,
                rules: [{
                  required: this.state.checkDates,
                  message: 'Введите дату проведения'
                }]
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
            label="Картинка "
          >
            {getFieldDecorator('cover', {
              rules: [{
                required: this.state.checkImg,
                message: 'Загрузите картинку',
              }],
              valuePropName: 'fileList',
              getValueFromEvent: this.normFile,
            })(
              <Upload
                name="file"
                listType="picture-card"
                className="avatar-uploader"
                action={`${configUrl.apiPath}/private/upload/`}
                showUploadList={false}
                beforeUpload={this.beforeUpload}
                onChange={this.uploadImg}
              >
                {
                  this.state.imageUrl ?
                  <img src={this.state.imageUrl} alt="avatar" style={{ width: '100%' }} /> :
                  <img src={editingData && editingData.cover} alt="avatar" style={{ width: '100%' }} />
                }
              </Upload>
            )}
          </Form.Item>

          <Form.Item
            hasFeedback={true}
            label="Время - Начало"
          >
            {getFieldDecorator('timeStart', {
              initialValue: editingData ? moment(moment(editingData.time.start).format('HH:mm'), 'HH:mm' ) : null,
              rules: [{
                type: 'object',
                required: this.state.checkTime,
                message: 'Введите время начала мероприятия!'
              }],
            })(
              <TimePicker
                minuteStep={15}
                format='HH:mm'
              />
            )}
          </Form.Item>

          <Form.Item
            hasFeedback={true}
            label="Время Заверш."
          >
            {getFieldDecorator('timeEnd', {
              initialValue: editingData && editingData.time.end ?
                moment(moment(editingData.time.end).format('HH:mm'), 'HH:mm') : null,
              rules: [{
                type: 'object',
                message: 'Введите время конца мероприятия!'
              }],
            })(
              <TimePicker
                minuteStep={15}
                format='HH:mm'
              />
            )}
          </Form.Item>

          <Form.Item >
            <Button type="primary" htmlType="submit">Ок</Button>
            <Button type="primary" onClick={this.props.resetCE} style={{ marginLeft: '20px' }}>
              <Link to={`/admin/calendar/`}>Отмена</Link>
            </Button>
          </Form.Item>

        </Form>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  editingData: state.admin.calendar.editingPost,
  isUpdated: state.admin.calendar.isUpdated
})

const mapDispacthToProps = (dispatch) => ({
  sendData: (data) => dispatch(updateEventCalendar(data)),
  resetCE: () => dispatch( resetCE() )
})

const Update = Form.create({ name: 'validate_other' })(UpdatePost);

export default connect(mapStateToProps, mapDispacthToProps)(Update);