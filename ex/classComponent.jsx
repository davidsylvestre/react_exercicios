import React, { Component } from 'react'


export default class ClassComponent extends Component {
  render() {
    return (
      <h1>Componente class { this.props.value }</h1>
    )
  }
}
