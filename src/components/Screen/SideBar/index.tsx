"use client";
import { useRouter } from "next/navigation";
import Styles from "./styles.module.css";
import { SideBarProps } from "./sidebar.types"

const Sidebar = ({ children }: SideBarProps) => {
  const route = useRouter();

  return (
    <div className={`sm:col-span-12 md:col-span-3 col-span-2 h-full ${Styles.sidebarNav}`}>
      <div className={`${Styles.sidebar}`}>

        <ul>
          <li className={`${Styles.logo}`}>
            <a onClick={() => { }}>
              <span className={`${Styles.icon}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                  <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                </svg>
              </span>
              <span className={`${Styles.text}`}>Manage</span>
            </a>
          </li>
        </ul>

        <ul>
          <li>
            <a onClick={() => { route.push("/admin") }}>
              <span className={`${Styles.icon}`}>
                <i className={"bi bi-house"} />
              </span>
              <span className={`${Styles.text}`}>Home</span>
            </a>
          </li>
          <li>
            <a onClick={() => { }}>
              <span className={`${Styles.icon}`}>
                <i className={"bi bi-person"} />
              </span>
              <span className={`${Styles.text}`}>Profile</span>
            </a>
          </li>
          <li>
            <a onClick={() => { }}>
              <span className={`${Styles.icon}`}>
                <i className={"bi bi-calendar-plus"} />
              </span>
              <span className={`${Styles.text}`}>Novo Horario</span>
            </a>
          </li>
          <li>
            <a onClick={() => { }}>
              <span className={`${Styles.icon}`}>
                <i className={`bi bi-chat-dots`} />
              </span>
              <span className={`${Styles.text}`}>Inbox</span>
            </a>
          </li>
          <li>
            <a onClick={() => { route.push("/admin/relatorios") }}>
              <span className={`${Styles.icon}`}>
                <i className={`bi bi-bar-chart-fill`} />
              </span>
              <span className={`${Styles.text}`}>Analise</span>
            </a>
          </li>
          <li>
            <a onClick={() => { }}>
              <span className={`${Styles.icon}`}>
                <i className={`bi bi-newspaper`} />
              </span>
              <span className={`${Styles.text}`}>Noticias</span>
            </a>
          </li>
          <li>
            <a onClick={() => { }}>
              <span className={`${Styles.icon}`}>
                <i className={`bi bi-gear`} />
              </span>
              <span className={`${Styles.text}`}>Settings</span>
            </a>
          </li>
        </ul>

        <ul>
          <div className={`${Styles.bottom}`}>
            <li id={`${Styles.nohover}`}>
              <a>
                <span className={`${Styles.icon}`}>
                  <i className="bi bi-box-arrow-left"></i>
                </span>
                {children}
              </a>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};
export default Sidebar;