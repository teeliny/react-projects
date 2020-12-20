import React, { useEffect } from 'react'

const Alert = ({ message, type, removeAlert, list }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert()
    }, 5000);
    return () => clearTimeout(timeout);
  }, [list, removeAlert])

  return <p className={`alert alert-${type}`}>{message}</p>
}

export default Alert
