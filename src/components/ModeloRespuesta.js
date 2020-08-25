import React, { useState } from 'react'
import './styles/ModeloRespuesta.css'

function ModeloRespuesta({ contenidoRespuesta, descripcion, atributosContenido, tipoContenidoRespuesta }) {

    // const [seleccionado, setSeleccionado] = useState(false)

    // const clickEnModelo = () => setSeleccionado(!seleccionado)


    return (

        <div className="ModeloRespuesta mt-5 mb-5">
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">Contenido Respuesta</th>
                        <th scope="col">Descripcion</th>
                        <th scope="col">Tipo Contenido Respuesta</th>
                    </tr>
                </thead>
                <tbody>
                    <tr key={descripcion}>
                        <td>{contenidoRespuesta}</td>
                        <td>{descripcion}</td>
                        <td>{tipoContenidoRespuesta}</td>
                    </tr>
                </tbody>
            </table>
            <p>Contenido Respuesta</p>
            {
                contenidoRespuesta.indexOf('Array') !== -1 ? <p>{'[{'}</p> :  <p>{'{'}</p>
            }

            {
                
                atributosContenido.map(atributo => 
                    <>
                        <h5 className='tabulacion'>{atributo.key}: <span className='tabulacion'></span>{atributo.descripcion}</h5>
                    </>
                )
            }
            {
                contenidoRespuesta.indexOf('Array') !== -1 ? <p>{'}]'}</p> : <p>{'}'}</p>
            }
        </div>
    )
}

export default ModeloRespuesta;
