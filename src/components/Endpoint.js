import React, { useState, useEffect } from 'react'
import './styles/Endpoint.css'

import ModeloRespuesta from './ModeloRespuesta'
import EsquemaRespuesta from './EsquemaRespuesta'
import Parametros from './Parametros'

function Endpoint({ endpoint, metodoHTTP }) {

    const [endpointSeleccionado, setEndpointSeleccionado] = useState(false)
    const [modeloSeleccionado, setModeloSeleccionado] = useState(true)
    const [esquemaSeleccionado, setEsquemaSeleccionado] = useState(false)

    const clickEnEndpoint = () => setEndpointSeleccionado(!endpointSeleccionado)

    const cambiaSelect = (e) => {
        
        if(e.target.value === 'modeloSeleccionado') {
            setEsquemaSeleccionado(false)
            setModeloSeleccionado(true)
        }
        
        if(e.target.value === 'esquemaSeleccionado') {
            setEsquemaSeleccionado(true)
            setModeloSeleccionado(false)
        }
    }

    return (

        <div>
            <div className="pt-5 pb-2" onClick={clickEnEndpoint}>
                <h2>{endpoint.url}</h2>
                <h4>{endpoint.descripcion}</h4>
            </div>

            {
                endpointSeleccionado ? (

                    <div style={endpointSeleccionado ? { display: 'block' } : { display: 'none' }}>

                    <div className="form-group">
                        <label htmlFor="exampleFormControlSelect1">Example select</label>
                        <select className="form-control" id="exampleFormControlSelect1" onChange={cambiaSelect}>
                            <option value='modeloSeleccionado'>Modelo</option>
                            <option value='esquemaSeleccionado'>Esquema</option>
                        </select>
                    </div>

                    <div style={modeloSeleccionado ? {display: 'block'} : {display: 'none'}}>
                        <ModeloRespuesta key={endpoint.claseRespuesta.descripcion}
                            contenidoRespuesta = {endpoint.claseRespuesta.contenidoRespuesta}
                            descripcion = {endpoint.claseRespuesta.descripcion}
                            atributosContenido = {endpoint.claseRespuesta.atributosContenido}
                            tipoContenidoRespuesta = {endpoint.tipoContenidoRespuesta}
                        />
                    </div>

                    <div style={esquemaSeleccionado ? {display: 'block'} : {display: 'none'}}>
                        <EsquemaRespuesta key={endpoint.claseRespuesta.descripcion}
                            atributosContenido={endpoint.claseRespuesta.atributosContenido}
                        />
                    </div>
 
                
                    <div>
                        {
                            endpoint.parametros ? ( <Parametros parametrosEndpoint={endpoint.parametros} urlEndpoint={'http://localhost:4000/api/regiones' + endpoint.url} metodoHTTP={metodoHTTP}/>) : (console.log())
                        }
                    </div>

            </div>

                ) : ( <div></div>) 
            }
            
        </div>

    )
}

export default Endpoint;
