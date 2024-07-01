import React from 'react'

interface ContainerProps {
    children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
    return (
        <div className='p-2 shadow-lg rounded-lg bg:base-300'>
            {children}
        </div>
    )
}

export default Container