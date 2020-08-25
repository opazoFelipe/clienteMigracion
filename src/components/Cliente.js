import React, { useState, useEffect } from 'react'


function Cliente({url, parametros}) {


    return (

        <div className="Parametros mt-5 mb-5">
            <div className="form-group">
                <label htmlFor="url">URL: </label>
                <input name="url" type="text" className="form-control" value={url} disabled={true}/>
            </div>
            
            <h5 className="p-5"> Respuesta </h5>
            <textarea>
                
            </textarea>
        </div>

    )
}

export default Cliente;
