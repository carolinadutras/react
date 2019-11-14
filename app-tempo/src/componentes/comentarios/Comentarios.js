import React from 'react'
import comentarios from '../../dados/comentarios'

class Comentarios extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className='comentarios'>{
                comentarios.map((comentario)=>(
                    <div className='comentario'>
                        <img className='comentario__perfil' src={comentario.autora.imagem}/>
                        <div>
                        <h2 className="comentario__nome">{comentario.autora.nome}</h2>
                            <h3 className="comentario__subtitulo">{comentario.subtitulo}</h3>
                            <hr/>
                                <p>{comentario.texto}</p>
                        </div>x
                    </div>

))}                
            </div>
            )
        }
    }
                        // const DetalhesAutor = (props) => {
                        //     return (
                        //       <div>
                        //         <h3 className="comentario__nome">{props.nome}</h3>
                        //         <p className="comentario__subtitulo">{props.subtitulo}</p>
                        //       </div>
                        //     );
                        //   }
                          
                        //   const ComentarioTexto = props => <p>{props.comentario}</p>
                          
                        //   const ComentarioDetalhes = props => {
                        //     return (
                        //       <div>
                        //         <DetalhesAutor
                        //           nome={props.nome}
                        //           subtitulo={props.subtitulo}
                        //         />
                        //         <hr />
                        //         <ComentarioTexto
                        //           comentario={props.comentario}
                        //         />
                        //       </div>
                        //     )
                        //   }
                          
                        //   const Comentarios = props => {
                        //     return (
                        //       <div className="comentario">
                        //         <img className="comentario__perfil" src={props.img} />
                        //         <ComentarioDetalhes
                        //           nome={props.nome}
                        //           subtitulo={props.subtitulo}
                        //           comentario={props.comentario}
                        //         />
                        //       </div>
                        //     )
                        //   }

export default Comentarios