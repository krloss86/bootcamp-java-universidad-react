import React from 'react'
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import { Button } from 'primereact/button';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { findResource } from '../application/find/find-data';
import { resourceRepository } from '../infrastructure/fetch-resources-repository';
import { appConfig } from "../../config";
import { useNavigate } from 'react-router-dom';

function ReqResPage() {

    const history = useNavigate();

    const findData = async ()=>  {
        // usando un caso de uso > infrastructure  > domain
        const useCase = findResource(
            resourceRepository(appConfig.REQ_RES_PATH)
        );
        const myListaDeResource = await useCase();
        console.log(myListaDeResource );
    }

    const redirect = () => {
        history('/home');
    }
    
    return (
        <PrimeReactProvider>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12 col-lg-6 mt-3'>
                        <Button label="Get Data Table"
                            onClick={findData} />
                        <Button label="Go Home"
                            onClick={redirect} />
                    </div>
                </div>
            </div>
        </PrimeReactProvider>
    )
}

export default ReqResPage