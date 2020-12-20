import React, { useState, useEffect } from 'react';

const SingleColor = ({ weight, rgb, index, hexColor }) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(',');
  const hexValue = `#${hexColor}`;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false)
    }, 3000);
    return () => clearTimeout(timeout);
  }, [alert]);

  return (
    <article
      className={`color ${index > 10 ? 'color-light': null}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={() => {
        setAlert(true)
        navigator.clipboard.writeText(hexValue)
      }}>
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexValue}</p>
      {alert && <p className="alert">copied to clipboard</p>}
    </article>
  )
}

export default SingleColor;
