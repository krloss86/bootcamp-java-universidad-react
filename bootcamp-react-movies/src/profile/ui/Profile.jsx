import React, { useEffect, useState } from 'react'
import { appConfig } from '../../config';

export const Profile = () => {
    const [userData, setUserData] = useState(undefined);
   
    useEffect(() => {
        fetch(`${appConfig.REQ_RES_PATH}/api/users/2`)
        .then(response => response.json())
        .then(data => setUserData(data));
    },[]);

    return (
        <div className='container'>
            <div className='row mt-5'>
                <div className='col-sm-12 col-md-6'>
                    <ul className="list-group">
                        <li className="list-group-item active" aria-current="true">
                            Datos Personales
                        </li>
                        <li className="list-group-item">A second item</li>
                        <li className="list-group-item">A third item</li>
                        <li className="list-group-item">A fourth item</li>
                        <li className="list-group-item">And a fifth one</li>
                    </ul>
                </div>
                { userData ?
                    <div className='col'>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <span>{userData.data.email}</span>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" />
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                    : <>Cargando....</>
                }
            </div>
        </div>
    )
}
