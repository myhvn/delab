import React, { Component } from 'react'

import Card from './../common/Card'
import Form from '../common/Form'

import cardImg from '../../assets/img/cards/delabLab.jpg'

const Blabla = () => (
  <div className="about-info-block">
    <div className="about-info-block-text">Что такое лаборатория качественной жизни Delab? В одном месте мы собрали все атрибуты качественной жизни:</div>
    <ul className="about-info-block-list">
      <li>- органическое фито-кафе с полезными напитками;</li>
      <li>- шоу-рум эко-товаров для повседневной жизни;</li>
      <li>- бьюти уголок с качественной косметикой;</li>
      <li>- диетологи, которые разработают для вас дорожную карту для вашего здоровья;</li>
      <li>- хаб, где комфортно поработать с вкусным кофе;</li>
      <li>- зона для образования. Мы нацелены на осознанное обучение и развитие личности!</li>
    </ul>
    <div className="about-info-block-call"> Узнать больше о бизнес-возможности и партнерстве вы можете на нашей платформе:
    <a className="about-info-block-link" href="https://www.online.delab.biz">https://www.online.delab.biz</a>
    </div>
  </div>
)

class About extends Component {
  render() {
    return (
      <div className="about">
        <div className="container">
          <Card
            title="Партнерство"
            img={cardImg}
            text={Blabla()}
            hr
          />

        <div className="contacts-container">
          <div className="contacts" style={{ paddingTop: "5px", margin: "auto"}}>
            {/* <h3> Стань нашим партнером </h3> */}
            <div className="card-title" style={{ textAlign: "center"}}>
              Стань нашим партнером
            </div>
              <Form/>
          </div>
        </div>
        </div>
      </div>
    )
  }
}

export default About