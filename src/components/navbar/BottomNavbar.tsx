import React, { useEffect, useState } from "react";
import {
    IoSettingsSharp,
    IoHome,
    IoHomeOutline,
    IoSettingsOutline,
} from "react-icons/io5";
import { RiShoppingBagFill, RiShoppingBag4Line } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaHeart } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";

import './BottomNavbar.css';
import Link from 'next/link';

const BottomNavbar: React.FC = () => {
    const [activeItem, setActiveItem] = useState("Home");
    const [showBottomNavbar, setShowBottomNavbar] = useState(false);

    const handleItemClick = (item: string) => {
        setActiveItem(item);
    };

    useEffect(() => {
        const screenSize = () => {
            window.innerHeight < 767 ? setShowBottomNavbar(true) : setShowBottomNavbar(false);
        };
        screenSize();
    }, []);

    return (
        <nav className="z-[5000] bottom-navbar">
            <div className="nav-box">
                <ul className="nav-container">
                    <li className={`nav__item ${activeItem === "Profile" ? "active" : ""}`}>
                        <div className="nav__item-link" onClick={() => handleItemClick("Profile")}>
                            <div className="nav__item-icon">
                                {activeItem === "Profile" ? (
                                    <GiHamburgerMenu className="text-black" />
                                ) : (
                                    <RxHamburgerMenu className="text-black" />
                                )}
                            </div>
                            <span className="nav__item-text">Menu</span>
                        </div>
                    </li>
                    <li className={`nav__item ${activeItem === "Messages" ? "active" : ""}`}>
                        <div className="nav__item-link" onClick={() => handleItemClick("Messages")}>
                            <div className="nav__item-icon">
                                {activeItem === "Messages" ? (
                                    <FaHeart className="text-black" />
                                ) : (
                                    <FaRegHeart className="text-black" />
                                )}
                            </div>
                            <span className="nav__item-text">Wishlist</span>
                        </div>
                    </li>
                    <li className={`nav__item ${activeItem === "Home" ? "active" : ""}`}>
                        <Link href="/" legacyBehavior>
                            <a className="nav__item-link" onClick={() => handleItemClick("Home")}>
                                <div className="nav__item-icon">
                                    {activeItem === "Home" ? (
                                        <IoHome className="text-black" />
                                    ) : (
                                        <IoHomeOutline className="text-black" />
                                    )}
                                </div>
                                <span className="nav__item-text">Home</span>
                            </a>
                        </Link>
                    </li>
                    <li className={`nav__item ${activeItem === "Help" ? "active" : ""}`}>
                        <Link href="/cart" legacyBehavior>
                            <a className="nav__item-link" onClick={() => handleItemClick("Help")}>
                                <div className="nav__item-icon">
                                    {activeItem === "Help" ? (
                                        <RiShoppingBagFill className="text-black" />
                                    ) : (
                                        <RiShoppingBag4Line className="text-black" />
                                    )}
                                </div>
                                <span className="nav__item-text">Cart</span>
                            </a>
                        </Link>
                    </li>
                    <li className={`nav__item ${activeItem === "Settings" ? "active" : ""}`}>
                        <div className="nav__item-link" onClick={() => handleItemClick("Settings")}>
                            <div className="nav__item-icon">
                                {activeItem === "Settings" ? (
                                    <IoSettingsSharp className="text-violet" />
                                ) : (
                                    <IoSettingsOutline className="text-black" />
                                )}
                            </div>
                            <span className="nav__item-text">Settings</span>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default BottomNavbar;
