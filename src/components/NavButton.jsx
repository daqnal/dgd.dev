import "./NavButton.css";

export default function NavButton({ component: Icon, text, classes }) {
  return (
    <div className={`${classes}`}>
      <button className="btn btn-sm btn-circle nav-btn">
        <Icon className="icon nav-btn-icon" />
        <span className="nav-btn-text">{text}</span>
      </button>
    </div>
  );
}
