import React from 'react';
import '../../styles/SidebarItem.css';

function SidebarItem({menu, isActive}){
  return isActive === true ? (
    <div className = 'sidebar-item-activated'>
      <p> {menu.name} </p>
    </div>
  ): (
    <div className = 'sidebar-item-nonactivated'>
      <p> {menu.name} </p>
    </div>
  );
}

export default SidebarItem;