import React, { Component } from "react";
// import './Category-Manu-Orders-View.scss';
import "./Images-Grid.css";

export class CategoryManuOrdersView extends Component {
  render() {
    return (
      <div className="main-container">
        {/* <div className="manu-title">
        <h1 style={{ color: "#071a52" }}>Your Menu</h1>
        </div> */}

        <div className="second-container">
          <div id="c-grid" className="grid-container">
            <div className="location-image bg1" onClick={()=> window.location.href = `/${this.props.params.id}/custom-order`}>
              <h2
               
              >
                BURGER
              </h2>
              <div
                classn="ui star rating"
                data-rating="3"
                style={{ color: "#fff" }}
              ></div>
            </div>
            <div className="location-image bg2" onClick={()=> window.location.href = `/${this.props.params.id}/custom-order`}>
            <h2>SOUP</h2>
            </div>
            <div className="location-image bg3" onClick={()=> window.location.href = `/${this.props.params.id}/custom-order`}>
            <h2>SOFT DRINK</h2>
            </div>
            <div className="location-image bg4" onClick={()=> window.location.href = `/${this.props.params.id}/custom-order`}>
            <h2>BEER</h2>
            </div>
            <div className="location-image bg5" onClick={()=> window.location.href = `/${this.props.params.id}/custom-order`}>
            <h2>PIZZA</h2>
            </div>
            <div className="location-image bg6" onClick={()=> window.location.href = `/${this.props.params.id}/custom-order`}>
            <h2>DOUNT</h2>
            </div>
            <div className="location-image bg7" onClick={()=> window.location.href = `/${this.props.params.id}/custom-order`}>
              <h2
                
              >
                SOUTH INDIAN 
              </h2>
            </div>
            <div className="location-image bg8" onClick={()=> window.location.href = `/${this.props.params.id}/custom-order`}>
              <h2
                
              >
                NORTH INDIAN 
              </h2>
            </div>
            <div className="location-image bg9" onClick={()=> window.location.href = `/${this.props.params.id}/custom-order`}>
              <h2
                
              >
                ITALYAN FOOD
              </h2>
            </div>
            <div className="location-image bg10" onClick={()=> window.location.href = `/${this.props.params.id}/custom-order`}>
              <h2
               
              >
                VEGETARIYAN
              </h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CategoryManuOrdersView;