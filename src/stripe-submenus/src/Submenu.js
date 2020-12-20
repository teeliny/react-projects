import React, { useState, useRef, useEffect } from 'react';
import { useGlobalContext } from './context';

const Submenu = () => {
  const { isSubmenuOpen, location, page: {page, links} } = useGlobalContext();
  const container = useRef(null);

  const [columns, setColumns] = useState('col-2');
  
  useEffect(() => {
    const submenu = container.current;
    const { center, bottom } = location;
    console.log(submenu)
    // submenu.style.left = `${center}px`;
    // submenu.style.top = `${bottom}px`;
    setColumns(`col-${links.length}`);
  }, [location, links])
  return (
    <aside className={`${isSubmenuOpen ? 'submenu show' : 'submenu'}`}>
      <h4>{page}</h4>
      <div className={`submenu-center ${columns}`}>
        {links.map((link, index) => {
          const { icon, url, label } = link;
          return <a key={index} href={url}>{icon} {label}</a>
        })}
      </div>
    </aside>
  )
}

export default Submenu
