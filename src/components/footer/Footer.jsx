import React from "react";
import {
    FaInstagram,
    FaLinkedin,
    FaGithub,
    FaEnvelope,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <div className="infoText">
                Copyright © Luiz Augusto Assano - 2023
                </div>
                <div className="socialIcons">
                    <a href="https://github.com/luizassano" target={"_blank"}  className="icon">
                        <FaGithub/>
                    </a>
                    <a href="https://www.linkedin.com/in/luiz-augusto-assano/" target={"_blank"} className="icon">
                        <FaLinkedin />
                    </a>
                    <a href="mailto:luizassano2002@gmail.com" target={"_blank"} className="icon">
                        <FaEnvelope/>
                    </a>
                    <a href="https://www.instagram.com/luiz_assano/" target={"_blank"} className="icon">
                        <FaInstagram />
                    </a>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;
