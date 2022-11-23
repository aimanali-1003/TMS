import SidebarItem from "./SidebarItem";
import items from "../data/sidebar.json";
import Avatar from '@mui/material/Avatar';
export const Sidebar = () => {
  return (
    <div>
        <div className="avat1">
          <Avatar className='avatar' alt="Remy Sharp" src="/static/images/avatar/1.jpg"></Avatar>
        </div>
    <div className="sidebar">
      {items.map((item, index) => (
        <SidebarItem key={index} item={item} />
      ))}

      <div className="logout">
        <i className="bi-box-arrow-left"></i> Logout
      </div>
    </div>
    </div>
  );
};
export default Sidebar;
