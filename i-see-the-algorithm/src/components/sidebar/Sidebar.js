import React from 'react';
import {BrowserRouter, Link, useLocation} from 'react-router-dom';
import SidebarItem from "./SidebarItem";
import '../../styles/Sidebar.css';

function Sidebar(){
  const pathName = useLocation().pathname;
  const menus = [
    {name: "홈 화면", path: "/"},
    {name: "스택", path: "/stack"}
  ];
  return (
    <aside className="sidebar">
      {
        menus.map((menu, index) => {
          return (
            <Link to={menu.path} key={index}>
              <SidebarItem menu={menu.name} isActive={pathName === menu.path}/>
            </Link>
          );
        })
      }
    </aside>
  );
}

export default Sidebar;