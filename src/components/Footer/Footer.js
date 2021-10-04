import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCertificate, faDownload, faInbox} from '@fortawesome/free-solid-svg-icons'
import './Footer.css';


const Footer = () => {
    return (
        <div className="footer">
            <p>© 2021 Tutor_for_languages. All Rights Reserved.</p>
            <FontAwesomeIcon className="font-style" icon={faCertificate} />
            <FontAwesomeIcon className="font-style" icon={faDownload} />
            <FontAwesomeIcon className="font-style" icon={faInbox} />
        </div>
    );
};

export default Footer;