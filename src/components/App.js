import React, { Component } from 'react';
import Slider from 'react-slick'
import anime from 'animejs';

import 'slick-carousel/slick/slick.css'; 
import '../styles/App.css';

import style1 from '../assets/style-1.jpg'
import style2 from '../assets/style-2.jpg'
import style3 from '../assets/style-3.jpg'
import style4 from '../assets/style-4.jpg'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      nav1: null,
      nav2: null
    }

    this.handlerPrev = this.handlerPrev.bind(this);
    this.handlerNext = this.handlerNext.bind(this);
    this.onHoverPrev = this.onHoverPrev.bind(this);
    this.onHoverNext = this.onHoverNext.bind(this);
    this.onHoverPrevExit = this.onHoverPrevExit.bind(this);
    this.onHoverNextExit = this.onHoverNextExit.bind(this);
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });

    this.btnPrev1 = document.querySelector('.carousel_control-top .slick-prev');
    this.btnNext1 = document.querySelector('.carousel_control-top .slick-next');
    this.btnPrev2 = document.querySelector('.carousel_control-bot .slick-prev');
    this.btnNext2 = document.querySelector('.carousel_control-bot .slick-next');
    this.slideTrack = document.querySelector('.carousel .slick-track');

    this.btnPrev1.addEventListener('mouseover', this.onHoverPrev)
    this.btnPrev1.addEventListener('mouseleave', this.onHoverPrevExit)
    this.btnNext1.addEventListener('mouseover', this.onHoverNext)
    this.btnNext1.addEventListener('mouseleave', this.onHoverNextExit)
    this.btnPrev2.addEventListener('mouseover', this.onHoverPrev)
    this.btnPrev2.addEventListener('mouseleave', this.onHoverPrevExit)
    this.btnNext2.addEventListener('mouseover', this.onHoverNext)
    this.btnNext2.addEventListener('mouseleave', this.onHoverNextExit)
  }

  handlerPrev() {
    let index = this.state.current,
        length = this.state.items.length;
    
    if( index < 1 ) {
      index = length;
      index = index - 1;
  
      this.setState({
        current: index,
        isNext: false
      });
    }
  }
  
  handlerNext() {
    let index = this.state.current,
        length = this.state.items.length - 1;
    
    if( index == length ) {
      index = -1;
      index = index + 1;
    
      this.setState({
        current: index,
        isNext: true
      });
    }
  }

  onHoverNext() {
    this.slideTrack.classList.add('is-hover-next')
    // anime({
    //   targets: this.slideTrack,
    //   translateX: '-=100',
    //   duration: 0.4,
    //   easing: 'cubicBezier(0.8, 0, 0.2, 1)'
    // });
  }
  onHoverPrev() {
    this.slideTrack.classList.add('is-hover-prev')
    // anime({
    //   targets: this.slideTrack,
    //   translateX: '+=100',
    //   duration: 0.4,
    //   easing: 'cubicBezier(0.8, 0, 0.2, 1)'
    // });  
  }
  onHoverNextExit() {
    this.slideTrack.classList.remove('is-hover-next')
    // anime({
    //   targets: this.slideTrack,
    //   translateX: '+=100',
    //   duration: 0.4,
    //   easing: 'cubicBezier(0.8, 0, 0.2, 1)'
    // });
  }
  onHoverPrevExit() {
    this.slideTrack.classList.remove('is-hover-prev')
    // anime({
    //   targets: this.slideTrack,
    //   translateX: '-=100',
    //   duration: 0.4,
    //   easing: 'cubicBezier(0.8, 0, 0.2, 1)'
    // });
  }
  
  render() {
    const mainSliderSettings = {
      arrows: false,
      cssEase: 'cubic-bezier(0.8, 0, 0.2, 1',
      focusOnSelect: false,
      infinite: true,
      speed: 1250,
      slidesToShow: 1,
      slidesToScroll: 1,
      useTransform: true
    }

    const navTopSettings = {
      cssEase: 'cubic-bezier(0.8, 0, 0.2, 1',
      focusOnSelect: false,
      infinite: true,
      speed: 1250,
      slidesToShow: 1,
      slidesToScroll: 1,
      useTransform: true,
      prevArrow: <div className="carousel carousel_top_prev"></div>,
      nextArrow: <div className="carousel carousel_top_next carousel_arrow"><div><svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42"><g fill="none" fill-rule="evenodd" stroke="#FFF" transform="matrix(-1 0 0 1 41.5 1)"><path fill-rule="nonzero" stroke-width="1.5" d="M23.13 26.25L16.88 20l6.25-6.25"/><circle cx="20.5" cy="20" r="20" stroke-opacity=".3"/></g></svg></div></div>
    }

    const navBotSettings = {
      cssEase: 'cubic-bezier(0.8, 0, 0.2, 1',
      focusOnSelect: false,
      infinite: true,
      speed: 1250,
      slidesToShow: 1,
      slidesToScroll: 1,
      useTransform: true,
      prevArrow: <div className="carousel carousel_bot_prev"></div>,
      nextArrow: <div className="carousel carousel_bot_next carousel_arrow"><div><svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42"><g fill="none" fill-rule="evenodd" stroke="#FFF" transform="matrix(-1 0 0 1 41.5 1)"><path fill-rule="nonzero" stroke-width="1.5" d="M23.13 26.25L16.88 20l6.25-6.25"/><circle cx="20.5" cy="20" r="20" stroke-opacity=".3"/></g></svg></div></div>
    }

    return (
      <div className="perfectFit">
        <div className="carousel">

          <Slider 
            {...mainSliderSettings}
            ref={slider => (this.slider1 = slider)}
            className={'carousel ' + (this.state.hover !== undefined ? 'hover' : '')}
          >
            <div className="carousel_slide">
              <img src={style1} alt=''/>
            </div>
            <div className="carousel_slide">
              <img src={style2} alt=''/>
            </div>
            <div className="carousel_slide">
              <img src={style3} alt=''/>
            </div>
            <div className="carousel_slide">
              <img src={style4} alt=''/>
            </div>
          </Slider>

          <Slider 
            {...navTopSettings}
            asNavFor={this.state.nav1}
            ref={slider => (this.slider2 = slider)}
            className="carousel_control carousel_control-top"
          >
            <span className="top-style">Retro</span>
            <span className="top-style">Classy</span>
            <span className="top-style">Number 3</span>
            <span className="top-style">Number 4</span>
          </Slider>

          <Slider
            {...navBotSettings}
            asNavFor={this.state.nav1}
            ref={slider => (this.slider3 = slider)}
            className="carousel_control carousel_control-bot"
          >
            <span className="top-style">Evening<br/> Party</span>
            <span className="top-style">Automnal<br/> Getaway</span>
            <span className="top-style">Third<br/> Style</span>
            <span className="top-style">Fourth<br/> Style</span>
          </Slider>
        </div>

        <div className="pf-overlay">
          <p className="pf-overlay__legend">The perfect fit<br />for the perfect<br />moment</p>
          <button className="pf-overlay__btn-look">Shop the look</button>
        </div>
      </div>
    );
  }
}

export default App;
