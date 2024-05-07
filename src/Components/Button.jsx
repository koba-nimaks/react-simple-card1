// import React from 'react'

// function Button() {
//   return (
//     <div>
//         <button style={{backgroundColor:props.color, color: props.textColor}}>{props.name}</button>
      
//     </div>
//   )
// }

import React, { Component } from 'react'

export default class Button extends Component {
  render() {
    return (
      <div>
        <button style={{backgroundColor:this.props.name}}>{this.props.name}</button>
      </div>
    )
  }
}




