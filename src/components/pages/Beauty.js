import React, { Component } from 'react'

import SignUp from './../common/SignUp'
import Card from './../common/Card'

import cardImg1 from './../../assets/img/beauty.jpg'

class Beauty extends Component {
  render() {
    return (
      <div className="beauty">
        <div className="container">
          <Card
            img={cardImg1}
            title="Красота"
            subtitle="Составляющие красоты, какие они?"
            text="В первую очередь – это здоровая, ухоженная кожа. Хотите получить рекомендации - профессиональный косметолог подберёт комплекс процедур, который соответствует именно вашему типу кожи и позаботится о вашем лице. А визажист подскажет, какие продукты должны быть в вашей косметичке."
          />
          <SignUp
            title='Консультация специалиста в зоне «Красота»'
          />
        </div>
      </div>
    );
  }
}

export default Beauty;