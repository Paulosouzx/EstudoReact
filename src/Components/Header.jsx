//Components sempre com a primeira letra maiuscula

import style from "./Header.module.css";

export function Header() {
  return <strong className={style.header}>Ignite Feed</strong>;
}