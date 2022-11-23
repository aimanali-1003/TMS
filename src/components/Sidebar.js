import SidebarItem from "./SidebarItem";
import items from "../data/sidebar.json";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      {items.map((item, index) => (
        <SidebarItem key={index} item={item} />
      ))}

      <div className="logout">
        <i className="bi-box-arrow-left"></i> Logout
      </div>
    </div>
  );
};
export default Sidebar;
