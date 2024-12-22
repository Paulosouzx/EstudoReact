import {Avatar} from "./Avatar";
import style from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <aside className={style.sidebar}>
      <img
        className={style.cover}
        src="https://images.unsplash.com/photo-1733690567161-326d5294d3bb?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      <div className={style.profile}>
        <Avatar src="https://github.com/Paulosouzx.png" />

        <strong>Paulo Junior</strong>
        <span>Web Development</span>
      </div>

      <footer>
        <a href="#">Editar seu perfil</a>
      </footer>
    </aside>
  );
}
