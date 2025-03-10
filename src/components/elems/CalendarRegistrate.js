import React from 'react';
import { connect } from "react-redux";
import  moment from 'moment'

import {
  Form as FormAnt, Input, Select, Icon, message,
AutoComplete } from 'antd';

import { addFeedback } from '../../actions'

const { Option } = Select
const { TextArea } = Input

class FormCalendarRegistrate extends React.Component {
  state = {
    checkNick: false,
    checkedSelect: this.props.markedEvent,
    dataSourceEmail: []
  };

  handleChangeEmail = value => {
    this.setState({
      dataSourceEmail:
        !value || value.indexOf('@') >= 0
          ? []
          : [`${value}@gmail.com`, `${value}@yahoo.com`, `${value}@mail.ru`, `${value}@yandex.ru`],
    });
  }

  check = () => {
    this.props.form.validateFields(err => {
      if (!err) {
        message.success(`Мы в скором времени с вами свяжемся!`);
      }
    });
  };

  handleChange = e => {
    if (this.props.setActive !== undefined) {
      this.props.setActive();
    }

    this.setState(
      {
        checkNick: e.target.checked,
      },
      () => {
        this.props.form.validateFields(['nickname'], { force: true });
      },
    );
  };

  handleChangeSelections = (value) => {
    console.log(`selected`, value)
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        let editedValues = { ...values }

        const filteredArray = this.props.data.filter(calendarPost => calendarPost._id === values.events)
        editedValues.events = filteredArray

        const concatPhone = `+38-${values.prefix[1]}-${values.phone}`
        editedValues.phone = concatPhone

        this.props.sendFeedback(editedValues)
        this.props.form.resetFields();
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form
    const { data, loaded, markedEvent } = this.props

    return (
      <>
        {
          loaded && Array.isArray(data) && (
            <div className="calendar-client-wrap">
        <FormAnt
          className="form"
          onSubmit={this.handleSubmit}
        >
          <FormAnt.Item
            // hasFeedback={true}
            className="form-item"
          >
            {
              getFieldDecorator('events', {
                initialValue: markedEvent,
                rules: [
                  {
                    required: true,
                    message: 'Выберите мероприятия',
                  },
                ],
              })(
                <Select
                  style={{ width: '100%' }}
                  placeholder={
                    <div>
                      <Icon type="sketch" style={{ color: 'rgba(0,0,0,.25)' }} />
                      <span style={{ fontSize: '14px', marginLeft: '15px'}}>Выберите мероприятие</span>
                    </div>
                    }
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  optionLabelProp="label"
                  onChange={this.handleChangeSelections}
                  size="large"
                >
                  {
                    data.map(item => (
                      <Option key={item._id} value={item._id} label={item.title.slice(0, 40)}>
                        <div className="content-in-select">
                          <span className="wrap-img-in-select" role="img" aria-label="China">
                            <img src={item.cover} alt={item.title.slice(0,10)} />
                          </span>
                          <div className="wrap-title-in-select">
                            <span className="title-in-select" style={{ textOverflow: 'clip'}}>
                              { item.title.slice(0, 45) }
                            </span>
                            <span className="title-in-select">
                              {moment(item.dates.start).format('LL')} - {moment(item.time.start).format('LT')}
                            </span>
                          </div>
                        </div>
                      </Option>
                    ))
                  }
                </Select>
              )
            }
          </FormAnt.Item>
          <FormAnt.Item
            hasFeedback={true}
            className="form-item"
          >
            {
              getFieldDecorator('name', {
                rules: [
                  {
                    required: true,
                    message: 'Пожалуйста введите свое Имя',
                  },
                ],
              })(<Input
                size="default"
                placeholder="Имя"
                addonBefore={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              />
              )
            }
          </FormAnt.Item>

          <FormAnt.Item
            hasFeedback={true}
            className="form-item"
          >
            {
              getFieldDecorator('email', {
                rules: [
                  {
                    required: true,
                    message: 'Пожалуйста введите свой Email',
                  },
                ],
              })(
              <AutoComplete
                dataSource={this.state.dataSourceEmail}
                onChange={this.handleChangeEmail}
                >
                <Input
                  size="default"
                  placeholder="Email"
                  addonBefore={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                />
              </AutoComplete>
              )
            }
          </FormAnt.Item>

          <FormAnt.Item
            hasFeedback={true}
            className="form-item"
          >
            {getFieldDecorator('phone', {
              rules: [{
                required: true,
                message: 'Введите Номер телефона'
              }],
            })(
              <Input
                type="number"
                size="default"
                addonBefore={<Icon type="phone" style={{ color: 'rgba(0,0,0,.25)' }} />}
                style={{ width: '100%' }}
                prefix="+"
              />
            )}
          </FormAnt.Item>

          <FormAnt.Item className="form-item">
            {
              getFieldDecorator('question', {
                rules: [
                  {
                    required: false
                  },
                ],
              })(<TextArea
                // style={{ display: 'none' }}
                className="form-item-textarea"
                placeholder="Ваш вопрос(необязательно)"
                autoSize={{ minRows: 4, maxRows: 6 }}
              />
              )
            }
          </FormAnt.Item>
                <FormAnt.Item className="btn-submit-item">
                  <button onClick={this.check} className="btn shutter-out-horizontal">
              Send
            </button>
          </FormAnt.Item>
        </FormAnt>
            </div>
          )
        }
      </>
    );
  }
}

const CalendarRegistrate = FormAnt.create({ name: 'dynamic_rule' })(FormCalendarRegistrate);

const mapStateToProps = (state) => ({
    data: state.admin.calendar.dataClient,
    loaded: state.admin.calendar.loaded
})


const mapDispatchToProps = (dispatch) => ({
  sendFeedback: (data) => {
    dispatch(addFeedback(data))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(CalendarRegistrate)