import React, { useState, useEffect } from 'react'

import './styles/Parametros.css'

import ClienteGet from './ClienteGet'

function Parametros({parametrosEndpoint, urlEndpoint, metodoHTTP}) {

    const crearParametros = () => {

        let parametros = {}

        parametrosEndpoint.map(param =>  parametros[param.nombre] = param.valorInicialCliente)

        return parametros
    }

    const [parametros, setParametros] = useState(crearParametros())
    const [llamadaEndpoint, setLlamadaEndpoint] = useState(false)
    
    const onInputChange = function(e) {
        
        e.persist()

        setParametros(() => {

                let tempParametros = parametros

                tempParametros[e.target.name] = e.target.value
        
                return tempParametros
            
        })
  
    }

    const crearInput = (nombre, tipoInput, valorInicial) => {

        if(tipoInput === 'integer' | tipoInput === 'float') return <input type="number" name={nombre} onChange={onInputChange} defaultValue={valorInicial} />
        if(tipoInput === 'string') return <input type="text" name={nombre} onChange={onInputChange} defaultValue={valorInicial} />
      
    }

    return (

        <div className="Parametros mt-5 mb-5">
            <h3> Parametros </h3>

            <table className="table table-dark text-center mt-5">
                <thead>
                    <tr>
                        <th scope="col">Parametro</th>
                        <th scope="col">Valor</th>
                        <th scope="col">Tipo</th>
                        <th scope="col">Descripcion</th>
                    </tr>
                </thead>
                <tbody>
                
                        {parametrosEndpoint ? (

                            parametrosEndpoint.map((parametro, index) => {

                                return (
                                    <tr>
                                        <td>{parametro.nombre}</td>
                                        <td>
                                            { crearInput(parametro.nombre, parametro.tipo, parametro.valorInicialCliente)  }
                                        </td>
                                        <td>{parametro.tipo}</td>
                                        <td>{parametro.descripcion}</td>
                                    </tr>
                                )
                                }
                            )

                        ) : (

                            console.log('Cargando Parametros')

                        )}
               
                </tbody>
            </table>
       
            <button onClick={() => console.log(parametros)}>Ver parametros en consola</button>
            <button className="btn btn-primary" onClick={() => setLlamadaEndpoint(true)}> Llamada al Endpoint </button>
            
            {
                llamadaEndpoint ? ( 
                    <div className="mb-5">
                        {
                            metodoHTTP === 'GET' ? (
                            <ClienteGet url={urlEndpoint} parametros={parametros} />
                            ) : (<></>)
                        }
                        
                    </div>
                ) : (<div className="mb-5"></div>)
            }
           
        </div>
    )
}

export default Parametros;
