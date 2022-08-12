import { ComponenteB } from "./ComponenteB"





const contacto=[{
    'nombre':'Derian',
    'apellido':'Herrera',
    'email':'derian@gmail.com',
    'conectado':true

},
{
    'nombre':'Derian2',
    'apellido':'Herrera2',
    'email':'derian2@gmail.com',
    'conectado':false

},
]

export const ComponenteA = () => {
  return (
    <div>
        <ComponenteB contacto={contacto}/>

    </div>
  )
}
