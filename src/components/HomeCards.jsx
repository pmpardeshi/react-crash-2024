import React from 'react'
import DescCards from './DescCards'

const HomeCards = () => {
  return (
    <>
        <section className="py-4">
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
        <DescCards title= "For Developers" Desc = "Browse our React jobs and start your career today" btnText = "Browse Jobs" bg="gray"/>
        <DescCards title= "For Employers" Desc = "List your job to find the perfect developer for the role" btnText = "Add Job" bg ="indigo"/>
        </div>
      </div>
    </section>

    </>
  )
}

export default HomeCards