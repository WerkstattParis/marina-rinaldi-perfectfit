import React, { Component } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import '../styles/App.css';
// import anime from 'animejs'
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
  }

  // TODO: Need to divide in two types of handlers:
  //    - tophandler: prev/next
  //    - bothandler: prev/next

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

          <span className="carousel_control carousel_control__prev" onClick={this.handlerPrev}>
            <span>Retro</span>
            <span>Classy</span>

          </span>
          <span className="carousel_control carousel_control__next" onClick={this.handlerNext}>
            <span>Evening Party</span>
            <span>Automnal Getaway</span>
          </span>
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
