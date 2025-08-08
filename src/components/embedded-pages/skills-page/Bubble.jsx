import "./Bubble.css";

export default function Bubble({name, desc, iconPath}) {
    return (
        <div className="bubble bg-base-100/75 rounded-full tooltip tooltip-bottom" data-tip={desc}>
            <img className="skill-icon" src={iconPath} alt={desc} />
            <p className="skill-name">{name}</p>
        </div>
    );
}