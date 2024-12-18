import React, { Component } from "react";

export default class ScrollTop extends Component {
  render() {
    return (
      <div className="scroll-top">
        <span>
          <svg
            id="up"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 14.2 14.21"
          >
            <path
              d="M20.39,21.81,15.14,16.5a.17.17,0,0,0-.26,0L9.65,21.82a1,1,0,0,1-1.42,0l-.08-.1a.9.9,0,0,1,.09-1.32l6.08-6.15a1,1,0,0,1,1.41,0l6.08,6.15a1,1,0,0,1,0,1.42h0A1,1,0,0,1,20.39,21.81Z"
              transform="translate(-7.9 -7.89)"
            />
            <path
              d="M20.39,15.75l-5.25-5.31a.17.17,0,0,0-.26,0L9.65,15.76a1,1,0,0,1-1.42,0l-.08-.1a.9.9,0,0,1,.09-1.32l6.08-6.15a1,1,0,0,1,1.41,0l6.08,6.15a1,1,0,0,1,0,1.42h0A1,1,0,0,1,20.39,15.75Z"
              transform="translate(-7.9 -7.89)"
            />
          </svg>
        </span>
      </div>
    );
  }
}
