import React from 'react'
import { Link } from 'react-router-dom'

const DescCards =(props) => {
    let cardBackground = props.bg === "gray" ? "bg-gray-100" : "bg-indigo-100"
    let btnBackground = props.bg === "gray" ? "bg-black" : "bg-indigo-900"
  return (
    // <Devcard title= "For Developers" Desc = "Browse our React jobs and start your career today" btnText = "Browse Jobs" bg="gray"/>
    <>
        <div className={`p-6 rounded-lg shadow-md ${cardBackground}`}>
              <h2 className="text-2xl font-bold">{props.title}</h2>
              <p className="mt-2 mb-4">
                {props.Desc}
              </p>
              <Link
                to="/jobs"
                className={`inline-block text-white rounded-lg px-4 py-2 hover:bg-${props.bg}-700 ${btnBackground}`}
              >
                {props.btnText}
              </Link>
          </div>
      </>
    )
  }

export default DescCards