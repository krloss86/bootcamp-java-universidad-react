import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { modifyCarrito } from '../redux/carrito/carrito';

function Articulo ( { producto } = props) {
    const carrito = useSelector(store => store.carrito);

    const [cantidad,setCantidad] = useState(carrito[producto.id] || 0);
    const navigate = useNavigate();
    const dispatcher = useDispatch();
    
    const incrementar = () => {
        const aux = cantidad + 1;
        setCantidad(prev => aux);
        const obj = {
            [producto['id']] : aux
        };

        dispatcher(modifyCarrito(obj));
    }

    const decrementar = () => {
        setCantidad(prev => prev - 1);
        const obj = {
            [producto['id']] : cantidad
        };

        dispatcher(modifyCarrito(obj));
    }

    const actualizarCantidad = (cantidad) => {
        setCantidad(prev => cantidad);
        const obj = {
            [producto['id']] : cantidad
        };

        dispatcher(modifyCarrito(obj));
    }

    useEffect(()=> {
        //setCantidad(prev => carrito[producto.id] || 0);
    },[]);

    const ver = (id) => {
        //details/:id
        alert(id);
    }
    return (
        <div className='col-xs-12 col-md-6 col-lg-4 col-xl-3'>
            <div className="card" style={{marginBottom: '1vh'}}>
                <img src={producto['image/src']} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">
                        {producto.title}
                    </h5>
                    <p className="card-text">
                        {producto.price}
                    </p>
                    <hr/>
                    <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                        <button type="button" className="btn btn-danger" onClick={decrementar}>-</button>
                        <input className='form'
                            type='number' 
                            min={0} 
                            max={producto['available_quantity']}
                            value={cantidad}
                            onChange={(e) => actualizarCantidad(e.target.value)}/>                            
                        <button type="button" className="btn btn-success" onClick={incrementar}>+</button>
                    </div>
                    <button className="btn w-100 btn-primary"
                        onClick={() =>ver(producto.id)}>
                        Ver
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Articulo;