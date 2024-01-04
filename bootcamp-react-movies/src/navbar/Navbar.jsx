import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from "react-router-dom";
import { routes } from './routes';
import { useDispatch, useSelector } from 'react-redux';
import { resetUser } from '../redux/users/user';

function Navbar (){

    //necesito saber si existe en redux 
    const user = useSelector(store => store.users);
    const dispatcher = useDispatch();
    const navigate = useNavigate();

    const [userLogged,setUserLogged] = useState(false);

    const logout = () => {
        //dispath al redux del action logout
        dispatcher(resetUser());

        navigate(routes.publicas.LOGIN);
    }

    //efectos => 
    useEffect(()=> {
        setUserLogged(prev  => !!user.token);
    },[user.token]);

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to={routes.publicas.HOME}>
                    Home
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <NavLink className="nav-link active" 
                            aria-current="page"
                            to={routes.privates.PROFILE}>
                            Profile
                        </NavLink>
                    </li>
                    { !userLogged ?
                        <li className="nav-item">
                            <NavLink className="nav-link active" 
                                aria-current="page"
                                to={routes.publicas.LOGIN}>
                                Login
                            </NavLink>
                        </li>
                        :
                        <li className="nav-item">
                            <button className='btn btn-danger'
                                onClick={logout}>
                                Logout 
                            </button>
                        </li>
                    }
                </ul>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar