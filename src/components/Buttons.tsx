import {FC} from "react"
import ChangeLanguage from "./ChangeLanguage";

const Buttons:FC = () => {
    return (
        <div style={{ display: 'flex', direction: 'ltr' }}>
            <ChangeLanguage />
        </div>
    );
};

export default Buttons;