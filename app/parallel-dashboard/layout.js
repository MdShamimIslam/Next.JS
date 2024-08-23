
const DashboardLayout = ({ children, assignments, notifications, quiz }) => {
    
    return (
        
        <>
            {children}
            <div className='grid gap-6 grid-cols-2 p-8'>
                {assignments}
                {notifications}
                {quiz}
            </div>
        </>

    )
}

export default DashboardLayout