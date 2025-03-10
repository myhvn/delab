Vocablurarie
resolve - решать
reject - отклонять
fetch - получать


[1 / 4]🔍  Resolving packages...
[2 / 4]🚚  Fetching packages...
[3 / 4]🔗  Linking dependencies...
[4 / 4]📃  Building fresh packages...
✨  File Generate Done
✨  Done in 966.73s

// 1) Популярный пример (не забудьте сравнить пропсы):
componentDidUpdate(prevProps) {
  if (this.props.userID !== prevProps.userID) {
    this.fetchData(this.props.userID);
  }
}

// 2) Не является ли это мутированием стейта ?
dotsNav = (el) => (e) => {
  let x = [...this.state.dots].map(dot => { if (dot.index === el.index) { dot.index = true } });
  this.setState({ arr: x });
}

// 3) проблема была что я передавал ...el тоесть элемент с которым сравниваю, а не свой массив(!)
dotsNav = (el) => (e) => {
  let arr = this.state.dots.map(dot => {
    if (dot.index === el.index) {
      return {
        ...dot,
        index: true
      }
    } else {
      return {
        ...dot,
        index: false
      }
    }
  })
  this.setState({ dots: arr })
    // 5) Подключить картинки
    < picture >
    <source srcset="img/awesomeWebPImage.webp" type="image/webp" />
    <source srcset="img/creakyOldJPEG.jpg" type="image/jpeg" />
    <img src="img/creakyOldJPEG.jpg" alt="Alt Text!" />
    </picture >
    // 6) зделать треугольник
    clip - path: polygon(50 % 0, 0 100 %, 100 % 100 %);
  // 7) отменяет события перетаскивания и тд
  pointer - events: none;
  // 8) растануть IMG как backgraound
  object - fit: cover
  // 9) @font-face
  @font-face {
    font - family: 'Header';
    src: url('../fonts/DINNextCYRLight.eot');
    src: url('../fonts/DINNextCYRLight.otf'),
      url('../fonts/DINNextCYRLight.woff') format('woff'),
        url('../fonts/DINNextCYRLight.ttf') format('truetype');
    font - style: normal;
    font - weight: 300;
  }
// 10) ЧЕТНЫЕ ЭЛЕМЕНТЫ
  &: nth - child(2n + 1)

  // 11) REACT GOOGLE MAP
  import React from 'react'

  const GoogleMap = () => {
    return (
      <div>
        <iframe title="office_cords" src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2539.917229691663!2d30.50493021573178!3d50.4612659794769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce6900958661%3A0x94f8d40d2d7f9198!2z0YPQuy4g0JrQvtC20LXQvNGP0YbQutCw0Y8sIDEy0JEsINCa0LjQtdCyLCAwMjAwMA!5e0!3m2!1sru!2sua!4v1539690418191`} width="100%" height="550" frameBorder="0" allowFullScreen></iframe>
      </div>
    )
  }

  export default GoogleMap;

  // 12) РАБОТА С БАЗОЙ ДАННЫХ
  CRUD — акроним, обозначающий четыре базовые функции, используемые при работе с базами данных[1]: создание(англ.create), чтение(read), модификация(update), удаление(delete)

  // 13) Удаленное подключение к mongodb
  1) $ mongo - u admin - p hQycI32Kd1c 127.0.0.1: 27017 --authenticationDatabase delabspace
  2) mongo 127.0.0.1: 27017 / delabspace

  // 14) FETCH && AXIOS
  // ----------------> AXIOS
  axios.post(
    `${config.apiPath}/public/auth/login`, data
  ).then(res => {
    dispatch({ type: GET_LOGIN_RES, payload: res });
    configurateToken(res.data.token);
  })
    .catch(error => dispatch({ type: GET_LOGIN_ERR, error }));

  // ----------------> FETCH
  fetch('http://localhost:3003/auth/login',
    {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        email: this.state.login,
        password: this.state.password
      })
    }
  )
    .then(res => res.json())
    .then(res => console.log('response:', res));

  // 15) ПЕРЕНОС ДЛИННЫХ СЛОВ CSS
  overflow - wrap: break-word;
  // 16) CSS - Flex - MARGIN-top: auto
  margin: auto(margin - left, margin - top ...)

    .parent
  display: flex
    .child
  margin - left: auto // В ВЕРХНИЙ ПРАВЫЙ УГОЛ
  margin: auto // В ПО АБСОЛЮТНОМУ ЦЕНТРУ
  // 17) SORT BY DATA
  const sortByDataAction = () => {
    if (typeof Object.defineProperty === 'function') {
      try { Object.defineProperty(Array.prototype, 'sortBy', { value: sb }); } catch (e) { }
    }
    if (!Array.prototype.sortBy) Array.prototype.sortBy = sb;

    function sb(f) {
      for (var i = this.length; i;) {
        var o = this[--i];
        this[i] = [].concat(f.call(o, o, i), o);
      }
      this.sort(function (a, b) {
        for (var i = 0, len = a.length; i < len; ++i) {
          if (a[i] != b[i]) return a[i] < b[i] ? -1 : 1;
        }
        return 0;
      });
      for (var i = this.length; i;) {
        this[--i] = this[i][this[i].length - 1];
      }
      return this;
    }
  }

  sortByDataAction()

  const sortByData = costumArr.sortBy(function (o) { return new Date(o.dates) })

  // 18) Переход на скролл роуты ЛИБКА -
  react - router - hash - link
  // 19) Либко для админки визуалка для постов
  https://codex.so/editor -
  // 20) Либко для редактирования текста из админки, гиперссылок -
  quill react
  // 21) Найти свойство обьекта по значению
  function getFirstMatching(obj, value) {
    let result;
    Object.getOwnPropertyNames(obj).some(key => {
      if (obj[key] === value) {
        result = key;
        return true; // Stops the loop
      }
    });
    return result;
  }
  const x = { a: 1, b: 2, c: 3, d: 4, e: 4 };
  console.log(getFirstMatching(x, 4)); // d
  // 22) Спокойный бэкграунд в точечку
  background: url(https://html5book.ru/wp-content/uploads/2015/10/background54.png);

    // 23) Objects ->
    Object.getOwnPropertyNames(names).forEach((val) => (<>val and names[val]</>)

      // 24) Objects ->

      // 25) не первый в списке ->
      &: not(: first - of - type) { justify- content: flex - end;
}

// 26) trotling -> ("это когда мы запрос отправляется по истечении времени")
let throttlingTimer = null;

const handleSearchInput = (e) => {
  const query = e.target.value;
  console.log('input', query.length > 3, query);
  clearTimeout(throttlingTimer);
  if (query.length > 3) {
    throttlingTimer = setTimeout(
      () => {
        getData(query);
      },
      300
    );
  }
}
// 27) withRouter
withRouter() import { withRouter } from 'react-router-dom'
// 28)   static getDerivedStateFromProps(props, state) {
if (state.loaded === false) {
  return {
    name: props.user.name,
    email: props.user.email,
    loaded: true
  }
} else {
  return null
}
}

// 29) history go back
this.props.history.goBack()
// 30) fill SVG
import { ReactComponent as SvgImg } from './assets/someSvg.svg' -> <SvgImg />
// 31) Обрезать текст по высоте (...)
  .listText {
  height: calc(25px * 3);
  padding: 5px;
  overflow: hidden;
  line - height: 25px;
  text - align: justify;
  display: -webkit - box;
  -webkit - line - clamp: 3;
  -webkit - box - orient: vertical;
}
// 32) VSCode - программа для гита
git graph
// 33) управлять children из одного child
const editState = state.editState || !!openedChildrens.length

if (!!openedChildrens.length && state.editState) {
  setState(({ editState }) => {
    return {
      ...state,
      editState: false
    }
  })
}
// 34) with Router
import { withRouter } from 'react-router-dom'
export default withRouter(...)
  // 35) grid css
  .list {
  display: grid;
  grid - template - columns: 1fr 1fr 1fr;
  grid - template - rows: auto;
  grid - column - gap: 20px;
  grid - row - gap: 20px;
  align - items: end;
}
// 36) забрать массив check`нутых inputs
checkedChildren = (templateId) => {
  const { checkedTemplates } = this.state

  if (checkedTemplates.includes(templateId)) {
    this.setState({
      checkedTemplates: checkedTemplates.filter(id => id !== templateId)
    })
  } else {
    this.setState({
      checkedTemplates: [...checkedTemplates, templateId]
    })
  }
}
// 37) click outside
componentDidMount() {
  document.addEventListener('mousedown', this.handleClickOutside);
}

componentWillUnmount() {
  document.removeEventListener('mousedown', this.handleClickOutside);
}

handleClickOutside = (event) => {
  if (this.state.isActive && this.wrapperRef && !this.wrapperRef.contains(event.target)) {
    this.setState({
      isActive: false
    })
  }
}

switchEditState = () => {
  this.setState({
    isActive: true
  })
}
// 38) Затемнение
background: linear - gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)), url('./assets/aside_img.png');
// 39) Галочка
.allowed {
  height: 14px;
  width: 13px;

  right: 12px;
  border - bottom: 2px solid var(--theme - color);
  border - right: 2px solid var(--theme - color);
  content: '';
  display: block;
  margin - top: -4px;
  pointer - events: none;
  position: absolute;
  top: 50 %;
  -webkit - transform - origin: 66 % 66 %;
  -ms - transform - origin: 66 % 66 %;
  transform - origin: 66 % 66 %;
  -webkit - transform: rotate(45deg);
  -ms - transform: rotate(45deg);
  transform: rotate(45deg);
  -webkit - transition: all 0.15s ease -in -out;
  transition: all 0.15s ease -in -out;
}

// 40) ul li style COLOR LI
ul {
  list - style: none; /* Remove default bullets */
}

ul li:: before {
  content: "\2022";  /* Add content: \2022 is the CSS Code/unicode for a bullet */
  color: red; /* Change the color */
  font - weight: bold; /* If you want it to be bold */
  display: inline - block; /* Needed to add space between the bullet and the text */
  width: 1em; /* Also needed for space (tweak if needed) */
  margin - left: -1em; /* Also needed for space (tweak if needed) */
}
// 41) RADIO BUTTONS SHOW BLOCKS
document.querySelectorAll('[name=select2]').forEach(s => {
  s.addEventListener('change', function () {
    document.querySelectorAll('.someClass').forEach(d => d.classList.add('deactive'));
    document.getElementById(this.value).classList.remove('deactive');
  });
});
.deactive {
  display: none;
}
<input name="select2" value="kurtki" type="radio">Куртки
<input name="select2" value="svitshot" type="radio">Свитера
<input name="select2" value="futbolki" type="radio">Футболки
<input name="select2" value="shtani" type="radio">Штаны
<input name="select2" value="short" type="radio">Шорты

<div id='kurtki' class="someClass deactive">блок с куртками</div>
          <div id='svitshot' class="someClass deactive">блок с свитерами</div>
          <div id='futbolki' class="someClass deactive">блок с футболками</div>
          <div id='shtani' class="someClass deactive">блок со штанами</div>
          <div id='short' class="someClass deactive">блок с шортами</div>

42) Promise then
      let promise = new Promise((resolve, reject) => {
          const sendPostData = {
            title: values.title,
            location: values.location,
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

// 43) фильтр массива (из обьектов) на оригинальные значения
newArr.filter((item, i) => {
    const originalId = newArr.findIndex(x => x.name === item.name)
    return originalId === i
})
// 44) НАЙТИ ВСЕ СОВПАДЕНИЯ ПО ЗНАЧЕНИЮ ПОЛЯ
export const groupByField = (data, field) => {
    const groupedByObject = data.reduce((acc, val) => {
        const rest = Object.keys(val).reduce((newObj, key) => {
            if(key !== field){
                newObj[key] = val[key]
            }
            return newObj;
        }, {});
        if (acc[val[field]]) {
          acc[val[field]].push(rest);
        } else {;
          acc[val[field]] = [rest];
        }
        return acc;
    }, {})

    return Object.keys(groupedByObject).filter(a => a!== "undefined").map(key => ({[field]: key, items: groupedByObject[key]}))
}
// 45) exact = true туда где есть вложенные роуты
// 46) overlay - затемненная обертка
// html
<div className={Styles.attachedImg}>
  <img src={img} alt="img" />
  <div className={cx(Styles.overlay, Styles.overlayLeft)}/>
</div>

// css
.overlay {
    position: absolute;
    transition: all 0.3s ease;
    opacity: 0;
}

.attachedImg:hover .overlay {
    opacity: 1;
}

.overlayLeft{
    height: 100%;
    width: 0;
    top: 0;
    right: 0;
    background: linear-gradient(90deg, rgba(255, 255, 255, 0) 4%, rgba(255, 255, 255, 0.3) 30%, rgba(255, 255, 255, 0.5) 60%, rgba(255, 255, 255, 0.7) 100%);
}

.attachedImg:hover .overlayLeft{
    width: 100%;
}

47) Галочки ul->li
&::before
  content: '^'
  display: inline-block
  color: $gc
  margin-right: 10px
  font-size: 16px
  transform: rotate(180deg) skew(-8deg, -25deg) scale(1.3, .8)

48) Object MAP
            Object.entries(data).map(field => {
              if (field[1]) {
                return (

                )
            })}
49)
50)
51)
52)
53)