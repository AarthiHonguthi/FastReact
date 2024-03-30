import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const reactElement =
{
    type: 'a',
    props: {
        href: "https://google.com",
        target: '_blank',
    },
    children: 'Click me to visit Google'
} 

function myApp() {
    return (
        <div> 
            <h1> Custom React App Aarthi</h1>
        </div>
    )
}

const AnotherElement = (
    <a href= "https://google.com" target='_blank'> Visit Google</a>
)

ReactDOM.createRoot(document.getElementById('root')).render(
    
  AnotherElement

)
