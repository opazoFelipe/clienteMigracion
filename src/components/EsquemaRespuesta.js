import React from 'react'
import './styles/EsquemaRespuesta.css'

function EsquemaRespuesta({ atributosContenido }) {

    return (

        <div className="EsquemaRespuesta mt-5 mb-5">
            <p>{'{'}</p>
            {
                atributosContenido.map(atributo => 
                    <>
                        <h5 className='tabulacion'>{atributo.key}: {atributo.tipo}</h5>
                    </>
                )
            }
            <p>{'}'}</p>
        </div>
    )
}

export default EsquemaRespuesta;
