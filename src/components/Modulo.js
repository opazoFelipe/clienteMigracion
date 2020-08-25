import React, { useState, useEffect } from 'react'
import './styles/Modulo.css'

import DescripcionModulo from './DescripcionModulo'
import Endpoint from './Endpoint'

function Modulo({modulo}) {

  const { titulo, descripcion, api } = modulo

  const [apiGET, setApiGET] = useState([])
  const [apiPOST, setApiPOST] = useState([])
  const [seleccionado, setSeleccionado] = useState(false)

  useEffect(() => {

    api.map(function (apiModulo) {

        if (apiModulo.metodoHTTP === 'GET') {
            setApiGET(apiModulo.endpoints)
        }
        if (apiModulo.metodoHTTP === 'POST') {
            setApiPOST(apiModulo.endpoints)
        }

    })

})

  const clickEnModulo = () => {
    setSeleccionado(!seleccionado)
  }

  return (
 
    <div className="container" style={{marginBottom: '100px'}}>
      <h1 className="p-4">API servicios web UBB</h1>

      <div className={seleccionado ? 'moduloSeleccionado' : ''} onClick={clickEnModulo}>
        <DescripcionModulo
          key='1'
          titulo={titulo}
          descripcion={descripcion}
        />
      </div>
      <div style={seleccionado ? { display: 'block' } : { display: 'none' }} className="pl-4">
        {
          apiGET.map((endpoint) => <Endpoint endpoint={endpoint} key={endpoint.descripcion} metodoHTTP={'GET'}/>)
        }
      </div>
    </div>

  )
}

export default Modulo;
