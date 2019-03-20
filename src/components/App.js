import React, { Component } from 'react';
import '../styles/App.css';
import anime from 'animejs'
import style1 from '../assets/style-1.jpg'
import style2 from '../assets/style-2.jpg'
import style3 from '../assets/style-3.jpg'
import style4 from '../assets/style-4.jpg'

class App extends Component {
  constructor() {
    super()
    this.state = {
      activeIndex: 0,
      previousIndex: 0
    };
  }

  componentDidMount() {
    // anime({
    //   targets: '.pf-nav__btn-look',
    //   rotate: '0.2turn',
    //   duration: 1800
    // })
  }
  
  render() {
    return (
      <div className="perfectFit">
        <nav>{/* Here: future nav if we have the time */}</nav>

        <div className="pf-styles">
          <div className="pf-styles-frame">
            <div className="pf-styles__item">
              <img src={style1} alt="style 1" />
            </div>
            <div className="pf-styles__item">
              <img src={style2} alt="style 2" />
            </div>
            <div className="pf-styles__item">
              <img src={style3} alt="style 3" />
            </div>
            <div className="pf-styles__item">
              <img src={style4} alt="style 4" />
            </div>
          </div>
        </div>

        <div className="pf-nav">
          <p className="pf-nav__legend">The perfect fit<br />for the perfect<br />women</p>
          <div className="pf-nav-wrapper">
            <div className="pf-nav__prev">
              prev
            </div>
            <div className="pf-nav__next">
              next
            </div>
          </div>
          <button className="pf-nav__btn-look">Shop the look</button>
        </div>
      </div>
    );
  }
}

export default App;
