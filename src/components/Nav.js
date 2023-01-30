import React, { useEffect, useState } from 'react'
import "./Nav.css"

export default function Nav() {
    const [show, setShow] = useState(false);
    useEffect(() => {
        /* 컴포넌트가 화면에 나타났을때, 업데이트 될 때
            (Mount, Update)
        */
        console.log("(Mount/Update)Nav Component");

        window.addEventListener("scroll", () => {
            console.log("window.scrollY",window.scrollY);
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
            console.log("(Unmount)Nav Component");
            window.removeEventListener("scroll", () => {});
        }
    }, []);

    return (
        <nav className={`nav ${show && 'nav__black'}`}>
            <img
                alt='Netlix logo'
                src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                className="nav__logo"
                onClick={() => window.location.reload()}
            />
            <img
                alt="User logged"
                src="http://zoeice.com/assets/img/uploads/profile.png"
                className="nav__avatar"
            />
        </nav>
    )
}
