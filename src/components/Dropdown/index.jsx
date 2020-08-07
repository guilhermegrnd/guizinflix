import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';
import './index.css';

function Dropdown() {
  const [showMenu,setShowMenu] = useState(false);

  const closeMenu = (e) => {
    const element = document.getElementById('dropdown1');
    if(typeof(element) !== undefined && element != null) {
      if (!element.contains(e.target)) {
        document.removeEventListener('click', closeMenu);
        setShowMenu(false);
      }
    } else{
      document.removeEventListener('click', closeMenu);
    }
  }

  function ToggleDrop() {
    if(showMenu === false) {
      setShowMenu(true);
      document.addEventListener('click', closeMenu);
    } else {
      setShowMenu(false);
    }
  }

  return (
    <div className="dropdown">
      <Button onClick={ToggleDrop}>
          Show menu
      </Button>
      {
        showMenu && (
          <ul className="dropdown-content" id="dropdown1">
            <li className="dropdown-item">
              <Link className="ButtonLink" to="/video/add">
                Novo Vídeo
              </Link>
            </li>
            <li className="dropdown-item">
              <Link className="ButtonLink" to="/settings">
                Configurações
              </Link>
            </li>
          </ul>
        )
      }
    </div>
  );
}

export default Dropdown;
