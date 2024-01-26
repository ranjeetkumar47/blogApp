import React, { ReactNode } from 'react'

const Container: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <div className="container mx-auto px-5">{children}</div>
}

export default Container
