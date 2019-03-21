import React, { Component } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import '../styles/App.css';

import style1 from '../assets/style-1.jpg'
import style2 from '../assets/style-2.jpg'
import style3 from '../assets/style-3.jpg'
import style4 from '../assets/style-4.jpg'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      items: [
        style1,
        style2,
        style3,
        style4
      ], 
      current: 0, 
      isNext: true 
    };

    this.handlerPrev = this.handlerPrev.bind(this);
    this.handlerNext = this.handlerNext.bind(this);
    this.onHoverPrev = this.onHoverPrev.bind(this);
    this.onHoverNext = this.onHoverNext.bind(this);
    this.onHoverPrevExit = this.onHoverPrevExit.bind(this);
    this.onHoverNextExit = this.onHoverNextExit.bind(this);
  }

  componentDidMount() {
    this.btnPrev1 = document.querySelector('.carousel_control-top .carousel_control__prev');
    this.btnNext1 = document.querySelector('.carousel_control-top .carousel_control__next');
    this.btnPrev2 = document.querySelector('.carousel_control-bot .carousel_control__prev');
    this.btnNext2 = document.querySelector('.carousel_control-bot .carousel_control__next');

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
    }
    
    index = index - 1;
  
    this.setState({
      current: index,
      isNext: false
    });
  }
  
  handlerNext() {
    let index = this.state.current,
        length = this.state.items.length - 1;
    
    if( index == length ) {
      index = -1;
    }
    
    index = index + 1;
    
    this.setState({
      current: index,
      isNext: true
    });  
    
    // let btn = document.querySelector('.carousel_control-top .carousel_control__next')
    // btn.classList.add('is-going-next')
    // btn.classList.toggle('is-alternate-text')
    // window.setTimeout(()=>{
    //   btn.classList.remove('is-going-next')
    // },1000)
  }

  onHoverNext() {
    this.slide = document.querySelector('.carousel_slide');
    this.slide.classList.add('is-hover-next')
  }
  onHoverPrev() {
    this.slide = document.querySelector('.carousel_slide');
    this.slide.classList.add('is-hover-prev')      
  }
  onHoverNextExit() {
    this.slide = document.querySelector('.carousel_slide');
    this.slide.classList.remove('is-hover-next')
  }
  onHoverPrevExit() {
    this.slide = document.querySelector('.carousel_slide');
    this.slide.classList.remove('is-hover-prev')
  }
  
  render() {
    let index = this.state.current,
        isnext = this.state.isNext,
        src = this.state.items[index];

    return (
      <div className="perfectFit">
        <div className="carousel">
          <CSSTransitionGroup
            transitionName={{
            enter: isnext ? 'enter-next' : 'enter-prev',
            enterActive: 'enter-active',
            leave: 'leave',
            leaveActive: isnext ? 'leave-active-next' : 'leave-active-prev'
            }}
          >
            <div className="carousel_slide" key={index}>
              <img src={src}/>
            </div>
          </CSSTransitionGroup>
          
          <div className="carousel_control carousel_control-top">
            <span className="carousel_control__prev" onClick={this.handlerPrev}>
              <div>Retro</div>
            </span>
            <span className="carousel_control__next" onClick={this.handlerNext}>
              <div>Classy</div>
              <div className="carousel_btnarrow"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="18" viewBox="0 0 10 18"><path fill="none" fill-rule="nonzero" stroke="#ffffff" stroke-width="1.5" d="M1 17.44l8-8-8-8"/></svg></div>
            </span>
          </div>

          <div className="carousel_control carousel_control-bot">
            <span className="carousel_control__prev" onClick={this.handlerPrev}>
              <div>Evening<br/> Party</div>
            </span>
            <span className="carousel_control__next" onClick={this.handlerNext}>
              <div>Automnal<br/> Getaway</div>
              <div className="carousel_btnarrow"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="18" viewBox="0 0 10 18"><path fill="none" fill-rule="nonzero" stroke="#ffffff" stroke-width="1.5" d="M1 17.44l8-8-8-8"/></svg></div>
            </span>
          </div>
        </div>

        <div className="pf-overlay">
          <p className="pf-overlay__legend">The perfect fit<br />for the perfect<br />women</p>
          <button className="pf-overlay__btn-look">Shop the look</button>
        </div>
      </div>
    );
  }
}

export default App;
