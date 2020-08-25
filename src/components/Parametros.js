import React, { useState, useEffect } from 'react'

import './styles/Parametros.css'

import Cliente from './Cliente'

function Parametros({parametrosEndpoint}) {

    const crearParametros = () => {

        let parametros = {}

        parametrosEndpoint.map(param =>  parametros[param.nombre] = param.valorInicialCliente)

        return parametros
    }

    const [parametros, setParametros] = useState(crearParametros())
    const [llamadaEndpoint, setLlamadaEndpoint] = useState(false)
    
    let onInputChange = function(e) {

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
                    <div>
                        <Cliente url={'http://localhost:4000/api/regiones'} />
                    </div>
                ) : (<div></div>)
            }
           
        </div>
    )
}

export default Parametros;
