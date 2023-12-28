import React from 'react'
import { NavLink } from "react-router-dom";
import { routes } from './routes';

function Navbar (){
    return (
        <>
            <NavLink to={'/userpage'}>
                User Page
            </NavLink> |
            <NavLink to={'/home'}>
                User Page
            </NavLink> |
            <NavLink to={'/'}>
                Home
            </NavLink> |
            <NavLink to={'/rxjs'}>
                Rxjs
            </NavLink> |
            <NavLink to={routes.publicas.REQ_RES}>
                Reqres
            </NavLink> | 
            <NavLink to={routes.publicas.CONTEXT_PAGE}>
                Context
            </NavLink> |
            <NavLink to={routes.publicas.CONTEXT_VIEW_PAGE}>
                View Context
            </NavLink> |
            <NavLink to={routes.privates.ADMIN}>Admin</NavLink>|
            <NavLink to={routes.privates.ACCOUNT}>Account</NavLink>
        </>
    )
}

export default Navbar