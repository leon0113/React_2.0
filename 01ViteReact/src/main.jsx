import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'

// const ReactElement = {
//   type: 'a',
//   props: {
//     href: 'https://github.com/leon0113/React_2.0',
//     target: '_blank'
//   },
//   children: 'Click me to visit github'
// };

const user = 'Leon'

const reactElement = React.createElement(
  'a',
  {
    href: 'https://github.com/leon0113/React_2.0',
    target: '_blank'
  },
  'Click me to visit with react ',
  user
)

// const anotherElement = (
//   <a href="https://github.com/leon0113" target='_blank' rel="noreferrer">Visit Me</a>
// )

ReactDOM.createRoot(document.getElementById('root')).render(
  reactElement
)

