import React, { Component } from 'react'

import Card from './../common/Card'
import Contacts from '../sections/Contacts'
import cardImg from '../../assets/img/about.jpeg'

const Blabla = () => (
  <div className="about-info-block" style={{ marginTop: '10px' }}>
    <div className="about-info-block-text">
    <h3>Создатели креативного пространства Delab, успешные предприниматели и основатели международного бизнеса.</h3>
    <br/>
    Ценность и уникальность креативного пространства заключается в предоставлении уже готовых решений для тех, кто стремится улучшить здоровье, прекрасно выглядеть и начать жить качественной и счастливой жизнью. В современном мире все люди обеспокоены тем, как начать позитивно мыслить в ключе создания прибыльного бизнеса, ищут решения для сохранения молодости и секретов долголетия. Мы знаем как решить все эти задачи! Именно в этом заключается философия создания лаборатории качественной жизни Delab.
    </div>
  </div>
)

class About extends Component {
  render() {
    return (
      <>
        <div style={{ marginTop: '40px' }} className="container">
          <Card
            title="Игорь и Валерия Харатин"
            img={cardImg}
            className="contacts-card"
            imgClass="contacts-img"
            text={Blabla()}
          />
        </div>
      <div className="about contacts">
        <Contacts />
      </div>
      </>
    )
  }
}

export default About