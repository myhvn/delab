import React, { Component } from 'react'

import SignUp from './../common/SignUp'
import Card from './../common/Card'

import cardImg1 from './../../assets/img/cards/imidg.jpg';

const WrappedText = () => (
  <div className="health-wrapped-text">
    Не экспериментируйте! Посетите нашу Зону здоровья. Высококвалифицированные диетологи и нутрициологи проконсультируют вас по вопросам питания и подберут витаминный комплекс с учетом индивидуальных особенностей организма.
    <br/>
    Стройность, легкость, изящество и здоровье – выбирайте спутников правильно!
  </div>
)
class Health extends Component {
  render() {
    return (
      <div className="health" style={{ transition: '.5s'}}>
        <div className="container" style={{ transition: '.5s' }}>
          <Card
            img={cardImg1}
            title="Здоровье"
            subtitle="Как правильно сбалансировать свой рацион?"
            text={WrappedText()}
          />
          <SignUp/>
        </div>
      </div>
    );
  }
}

export default Health;