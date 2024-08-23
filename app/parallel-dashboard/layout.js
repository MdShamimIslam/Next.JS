import React from 'react'

const DashboardLayout = ({ children, assignments, notifications, quiz }) => {
    const isLoggedIn = false;
    return (
        
        <>
            {children}
            <div className='grid gap-6 grid-cols-2 p-8'>
                {assignments}
                {isLoggedIn && notifications}
                {quiz}
            </div>
        </>

    )
}

export default DashboardLayout