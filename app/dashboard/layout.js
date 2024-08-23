import React from 'react'

const DashboardLayout = ({children}) => {
  return (
    <div className='grid gap-6 grid-cols-2 p-8'>
        {children}
    </div>
  )
}

export default DashboardLayout