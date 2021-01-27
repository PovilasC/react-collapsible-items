import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
        activeCollapse: 'circulars'
    };
  }

  handleExpandCollaps = (name) => {
    if (this.state.activeCollapse === name) {
      //If collapsiable is already visible and clicked on same then this will hide it
        this.setState({ activeCollapse: '' })
    } else {
        //To show collapsiable
        this.setState({ activeCollapse: name })
    }
  }

  moreInfoClick = (e) => {
    e.stopPropagation();
    console.log("clicked");
  }
  render() {
    return (
      <div>
        <div className="sidebar-nav">
          <div className="sidebar-nav-menu">

            <div className={`sidebar-nav-menu-item ${this.state.activeCollapse === "circulars" ? 'item-active' : ''}`} onClick={() => this.handleExpandCollaps("circulars")} data-id="circulars" >
              <div className="sidebar-nav-menu-item-head">
                <span className="sidebar-nav-menu-item-head-title">Circulars</span>
                <span className="sidebar-nav-menu-item-head-help">
                  <button type="button" className="btn-help" onClick={this.moreInfoClick}>View more info</button>
                </span>
              </div>
              <div className="sidebar-nav-menu-item-body">BODY CONTENT HERE</div>
            </div>

            <div className={`sidebar-nav-menu-item ${this.state.activeCollapse === "specifications" ? 'item-active' : ''}`} onClick={() => this.handleExpandCollaps("specifications")} data-id="specifications">
              <div className="sidebar-nav-menu-item-head">
                <span className="sidebar-nav-menu-item-head-title">Specifications</span>
                <span className="sidebar-nav-menu-item-head-help">
                  <button type="button" className="btn-help" onClick={this.moreInfoClick}>View more info</button>
                </span>
              </div>
              <div className="sidebar-nav-menu-item-body">BODY CONTENT HERE</div>
            </div>


            <div className={`sidebar-nav-menu-item ${this.state.activeCollapse === "wo" ? 'item-active' : ''}`} onClick={() => this.handleExpandCollaps("wo")} data-id="wo">
              <div className="sidebar-nav-menu-item-head">
                <span className="sidebar-nav-menu-item-head-title">Work Orders</span>
                <span className="sidebar-nav-menu-item-head-help">
                  <button type="button" className="btn-help" onClick={this.moreInfoClick}>View more info</button>
                </span>
              </div>
              <div className="sidebar-nav-menu-item-body">BODY CONTENT HERE</div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
