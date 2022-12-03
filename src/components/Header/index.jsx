import logo from "../../img/icon/icon.svg";
import logoName from "../../img/icon/Circeya.svg";
import './header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="max-container">
                <div className="header__content">
                    <div className="logo">
                        <img src={logo} />
                        <img src={logoName} />
                    </div>
                    <div className="info">+7 (495) 495-49-54</div>
                </div>
            </div>
        </header>
    )
}

export default Header;