import React, { useState } from 'react'
import './Dashboard.css'
// React Icons
import { AiFillDashboard } from "react-icons/ai";
import { BsShop } from "react-icons/bs";
import { FaUsersGear } from "react-icons/fa6";
import { RiPagesLine } from "react-icons/ri";
import DashSection from './sections/DashSection';
import ShopSection from './sections/ShopSection';
import Users from './sections/Users';
import Pages from './sections/Pages';
import { Helmet } from 'react-helmet';


const Dashboard = () => {
    const [allSec, setAllSec] = useState(true)
    const [userSec, setUserSec] = useState(false)
    const [shopSec, setShopSec] = useState(false)
    const [pagesSec, setPagesSec] = useState(false)



    const getAllSec = ()=>{
        setAllSec(true)
        setUserSec(false)
        setShopSec(false)
        setPagesSec(false)
    }
    const getUserSec = ()=>{
        setUserSec(true)
        setAllSec(false)
        setShopSec(false)
        setPagesSec(false)
    }
    const getShopSec = ()=>{
        setShopSec(true)
        setAllSec(false)
        setUserSec(false)
        setPagesSec(false)
    }
    const getPagesSec = ()=>{
        setPagesSec(true)
        setShopSec(false)
        setAllSec(false)
        setUserSec(false)
    }
    return (
        <div className='dashboard-page'>
            {/* start React Helmet Header */}
            <Helmet>
                <title>Dashboard</title>
            </Helmet>
            {/* end React Helmet Header */}
            <div className="container-fluid">
                {/* start sidebar */}
                <aside>
                    <div className="logo">
                        <img src="images/logo-re.png" alt="logo" />
                    </div>
                    <div className="my-profile">
                        <img src="images/logo-re.png" alt="admin" />
                        <div className="title">
                            <h5>name</h5>
                            <span>admin</span>
                        </div>
                    </div>
                    <ul>
                        <li onClick={getAllSec} className={`${allSec && 'active'}`}><AiFillDashboard /> dashboard</li>
                        <li onClick={getShopSec} className={`${shopSec && 'active'}`}><BsShop /> shop</li>
                        <li onClick={getUserSec} className={`${userSec && 'active'}`}><FaUsersGear /> users</li>
                        <li onClick={getPagesSec} className={`${pagesSec && 'active'}`}><RiPagesLine /> pages</li>
                    </ul>
                </aside>
                {/* end sidebar */}
                <section className="content">
                    {allSec && <DashSection />}
                    {shopSec && <ShopSection />}
                    {userSec && <Users />}
                    {pagesSec && <Pages />}
                </section>
            </div>
        </div>
    )
}

export default Dashboard
