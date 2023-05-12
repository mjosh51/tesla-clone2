import React from 'react'
import './Menu.css'
import MenuItem from './MenuItem'
import close from '../media/close_icon.svg'

function Menu({isMenuOpen, setMenuState}) {
  const closeMenu = () => {
    setMenuState(false)
  }
  
  return (
    <div className='menu'>
      <div class="close">
				<img src={close} alt="close_icon" class="close__icon" onClick={closeMenu} />
			</div>
      <div className='closeList'>
        <MenuItem title='Existing Inventory' />
        <MenuItem title='Used Inventory' />
        <MenuItem title='Trade-In' />
        <MenuItem title='Test Drive' />
        <MenuItem title='Insurance' />
        <MenuItem title='Cybertruck' />
        <MenuItem title='Semi' />
        <MenuItem title='Charging' />
        <MenuItem title='Powerwall' />
        <MenuItem title='Commercial energy' />
        <MenuItem title='Utilities' />
        <MenuItem title='Find Us' />
        <MenuItem title='Support' />
        <MenuItem title='Investor Relations' />
        <MenuItem title='United States' />
      </div>
    </div>
  )
}

export default Menu
