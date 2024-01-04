import React, { useState } from 'react'
import { loginUseCase } from '../application/login';
import { appConfig } from '../../config';
import { loginRepository } from '../infrastructure/login-repository';
import { toLogin } from '../infrastructure/login-adapter';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { createUser } from '../../redux/users/user';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../navbar/routes';

export const Login =  () => {
    const [userName,setUsername] = useState('');
    const [password,setPassword] = useState('');
    
    const dispatcher = useDispatch();
    const navigate = useNavigate();

    const login = async () => {
        const useCase = loginUseCase(
            loginRepository(appConfig.REQ_RES_PATH),
            toLogin()
        );
        
        try {
            const userLoginData = await useCase(userName,password);
            //dispath al redux!
            dispatcher(createUser(userLoginData));

            //navegacion!!!
            navigate(routes.privates.PROFILE);
        }catch(e) {
            toast(e.message)
        }
    }

    return (
        <>
        <ToastContainer />
        <div className='container'>
            <div className='row'>
                <div className="col-sm-12 col-md-8 col-lg-6 offset-md-2 offset-lg-3">
                    <div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">User Name</label>
                            <input type="email" 
                                className="form-control"
                                id="exampleInputEmail1" 
                                aria-describedby="emailHelp" 
                                value={userName}
                                onChange={(e) => setUsername(e.target.value)}
                                />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" 
                                className="form-control"
                                id="exampleInputPassword1" 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                        <button type="button"
                            className="btn btn-primary"
                            onClick={login}>
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
