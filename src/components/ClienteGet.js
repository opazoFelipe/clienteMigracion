import React, { useState, useEffect } from 'react'

import './styles/Cliente.css'
import axios from 'axios';


function ClienteGet({url, parametros}) {

    const [data, setData] = useState(null)

    const getData = async () => {


        if(parametros) {

            const res = await axios({
                method: 'GET',
                url: url,
                params: parametros
            })
            setData(res.data)

        } else {

            const res = await axios({
                method: 'GET',
                url: url
            })
            setData(res.data)
        }
        
    }


    return (

        <div className="Parametros mt-5 mb-5">
            <div className="form-group">
                <label htmlFor="url">URL: </label>
                <input name="url" type="text" className="form-control" value={url} disabled={true}/>
            </div>
            
            <button className="btn btn-secondary" onClick={getData}>Hacer Request</button>
            {
                data !== null ? (
                    <div className="respuestaRequest mt-4">
                        <h5 className="p-5"> Respuesta </h5>
                        <div>
                            <pre>{JSON.stringify(data, null, 2) }</pre>
                        </div>
            
                    </div>
                ) : (<></>)
            }
            
        </div>

    )
}

export default ClienteGet;
