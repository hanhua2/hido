import React from "react";
import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../Set.scss';

const sidebarNavItems = [
    {
        display: 'Setting',
        icon: <i className='bx bx-setting'></i>,
        to: '/',
        section: ''
    },
    {
        display: ' Music ',
        icon: <i className='bx bx-music'></i>,
        to: '/',
        section: ''
    },
    {
        display: '  Day  ',
        icon: <i className='bx bx-day'></i>,
        to: '/',
        section: ''
    },
    {
        display: ' Month ',
        icon: <i className='bx bx-month'></i>,
        to: '/started',
        section: 'started',
        contents:['']
    }
]

const Set = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [stepHeight, setStepHeight] = useState(0);
    const sidebarRef = useRef();
    const indicatorRef = useRef();
    const location = useLocation();

    useEffect(() => {
        setTimeout(() => {
            const sidebarItem = sidebarRef.current.querySelector('.sidebar__menu__item');
            indicatorRef.current.style.height = `${sidebarItem.clientHeight}px`;
            setStepHeight(sidebarItem.clientHeight);
        }, 50);
    }, []);

    // change active index
    useEffect(() => {
        const curPath = window.location.pathname.split('/')[1];
        const activeItem = sidebarNavItems.findIndex(item => item.section === curPath);
        setActiveIndex(curPath.length === 0 ? 0 : activeItem);
    }, [location]);

    return(
    <div className='sidebar'>
        <div className="sidebar__logo">
            User Account
        </div>
        <div ref={sidebarRef} className="sidebar__menu">
            <div
                ref={indicatorRef}
                className="sidebar__menu__indicator"
                style={{
                    transform: `translateX(-50%) translateY(${activeIndex * stepHeight}px)`
                }}
            >
            </div>
            {
                sidebarNavItems.map((item, index) => (
                    <Link to={item.to} key={index}>
                        <div className={`sidebar__menu__item ${activeIndex === index ? 'active' : ''}`}>
                            <div className="sidebar__menu__item__icon">
                                {item.icon}
                            </div>
                            <button className="sidebar__menu__item__text">
                                {item.display}
                            </button>
                        </div>
                    </Link>
                ))
            }
        </div>
        <button className={"sidebar__logout"}>
            Log out
        </button>
    </div>)
};

export default Set;