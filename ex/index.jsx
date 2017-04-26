import React from 'react'
import ReactDom from 'react-dom'
import ClassComponent from './classComponent'


ReactDom.render(
  <div>
  <ClassComponent value='David'/>
  </div>,
  document.getElementById('app')
)
