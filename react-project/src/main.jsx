import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// const reactElement={
//   type:'a',
//   props:{
//       href:'https://google.com',
//       target:'_blank',
//   },
//   children:'click me to visit google'
// }
// const reactElement=React.createElement(
//   'a',
//   {
//     "href":"https://google.com",
//     "target":"_blank"
//   },
//   "click here to visit google.com"
// )

// ReactDOM.createRoot(document.getElementById('root')).render(
//     reactElement
// )
ReactDOM.createRoot(document.getElementById('root')).render(
  <App/>
)

