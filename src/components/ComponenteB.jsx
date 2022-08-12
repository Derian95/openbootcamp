import PropTypes from 'prop-types'
export const ComponenteB = ({contacto}) => {

  return (
    <div >
        {
            contacto.map((contac)=>(
                <div style={{
                    'border':'1px solid red',
                    'marginBottom':'10px',
                    'borderRadius':'5px',
                    'padding':'20px'
                }}  >
                <h1>{contac.nombre}  {contac.apellido}</h1>
                <p>{contac.email}</p>

                {
                    contac.conectado ? <p>Contacto en linea</p>: <p>Contacto No disponible</p>
                }
                
                </div>
            ))
        }
    </div>
  )
}

ComponenteB.prototype={
   contacto:PropTypes.array.isRequired
    }
