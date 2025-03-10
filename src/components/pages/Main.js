import React, { Component } from 'react';
import { connect } from 'react-redux';

import Greating from '../sections/Greating';
import MiniCard from '../common/MiniCard';
import { Slider, SliderItem}  from '../elems/Slider';
import Triangles from '../elems/Triangles';

import slideHealth from '../../assets/img/slider/health.png';
import slideBeauty from '../../assets/img/slider/beauty.png';
import slideDelab from '../../assets/img/slider/delab.png';
import slideFito from '../../assets/img/slider/fito.png';

import imgCard from '../../assets/img/cards/delabLab.jpg';

class Main extends Component {
  render() {
    return (
      <div className="main">
        <Greating/>
        <Slider dots autoplay={true}>
          <SliderItem _id="0" img={slideHealth} title="Здоровье"  link="health"/>
          <SliderItem _id="1" img={slideBeauty} title="Красота" active  link="beauty"/>
          <SliderItem _id="2" img={slideDelab} title="О нас" link="contacts"/>
          <SliderItem _id="3" img={slideFito} title="Фитокафе" link="fitokafe"/>
        </Slider>
        <MiniCard
          title="Новости"
          subtitle="GolfTeam Tournament 2019"
          img={imgCard}
          width="700"
          link="читать дальше >"
          text="Мы, в DELAB, уверены, что качественно проведённые выходные-залог успешной недели! Поэтому наше воскресенье прошло на турнире GolfTeam Tournament 2019, партнёрами которого мы являемся! Мы погрузились в спортивную атмосферу и мир гольфа, наслаждались представлением, которое устроили детки вместе с Питер Пеном и дарили полезные подарки! Желаем всем участникам чемпионского здоровья и достижения новых вершин!"
        />
        <Triangles/>
      </div>
    );
  }
}

export default connect(null, null)(Main);