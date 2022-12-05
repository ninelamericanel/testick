import logo from "../../img/icon/icon.svg";
import logoName from "../../img/icon/Circeya.svg";
import iconTel from '../../img/icon/fluent_call-20-regular.svg'
import './styles.css';
import useWindowDimensions from "../../hook/useWindowDimensions";

const Header = () => {
    const {width} = useWindowDimensions();
    return (
        <header className="header">
            <div className="max-container">
                <div className="header__content">
                    <a href="#" className="header__logo">
                        <img src={logo}/>
                        <img src={logoName}/>
                    </a>
                    <div className="header__info">
                        {width >= 1024 ?
                            <button className="header__button" type="button">+7(495) 495-49-54</button> :
                            <button className="header__button" type="button">
                                <img src={iconTel} alt="contact"/>
                            </button>
                        }
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;