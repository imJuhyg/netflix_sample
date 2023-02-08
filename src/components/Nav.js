import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
    const [show, setShow] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        /* 컴포넌트가 화면에 나타났을때, 업데이트 될 때
            (Mount, Update)
        */
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                setShow(true);
            } else {
                setShow(false);
            }
        })

        return () => {
            /* 컴포넌트가 화면에서 사라졌을 때
                (Unmount)
            */
            window.removeEventListener("scroll", () => { });
        }
    }, []);

    const handleChange = (e) => {
        setSearchValue(e.target.value);
        navigate(`/search?q=${e.target.value}`);
    }

    return (
        <nav className={`nav ${show && 'nav__black'}`}>
            <img
                alt='Netlix logo'
                src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                className="nav__logo"
                onClick={() => window.location.reload()}
            />

            <input value={searchValue} onChange={handleChange} className="nav__input" type="text" placeholder="영화를 검색해주세요." />

            <img
                alt="User logged"
                src="http://zoeice.com/assets/img/uploads/profile.png"
                className="nav__avatar"
            />
        </nav>
    )
}
