import React,{Component} from 'react'

// class Contador extends Component{
//     constructor(props){
//         super(props)
//     }
//     render(){
//         return(
//             <div>
//                <p>EU SOU Contadorrr</p>
//             </div>
//         )
//     }
// }

 class Contador extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        contador: 0,
        visibilidade: true,
        congelado: false
      };
    }
  
    adicionarUm = () => {
      this.setState((prevState) => {
        return {
          contador: prevState.contador + 1
        }
      })
    }
  
    subtrairUm = () => {
      this.setState(prevState => {
        return {
          contador: prevState.contador - 1
        }
      })
    }
  
    resetar = () => {
      this.setState(() => {
        return {
          contador: 0,
          congelado: false
        }
      })
    }
  
    alternarVisibilidade = () => {
      this.setState((estadoAnterior) => {
        return {
          visibilidade: !estadoAnterior.visibilidade
        }
      })
    }
  
    congelarContador = () => {
      this.setState(() => {
        return {
          congelado: true
        }
      })
    }
  
    render() {
      return (
        <div>
          <p>{this.state.contador}</p>
  
          <BotaoAlternar
            onClickMetodo={this.alternarVisibilidade}
            visibilidade={this.state.visibilidade}
          />
  
          {this.state.visibilidade && (
            <BotaoContador
              disabled={this.state.congelado}
              cliqueAddUm={this.adicionarUm}
              cliqueSubUm={this.subtrairUm}
              cliqueResetar={this.resetar}
            />
          )}
  
          {this.state.contador !== 0 && (
            <BotaoFinalizar
              cliqueCongelar={this.congelarContador}
            />
          )}
          
        </div>
      );
    }
  }



const BotaoAlternar = props => {
    return (
      <div>
        <button onClick={props.onClickMetodo}>
          {props.visibilidade === true
            ? "Fechar Contador"
            : "Abrir Contador"}
        </button>
      </div>
    )
  }
  const BotaoContador = props => {
    return (
      <div>
        <button
          className="btnMaisUm"
          disabled={props.disabled}
          onClick={props.cliqueAddUm}
        >
          +1
        </button>
        <button
          className="btnMenosUm"
          disabled={props.disabled}
          onClick={props.cliqueSubUm}
        >
          -1
        </button>
        <button className="btnResetar" onClick={props.cliqueResetar}>
          resetar
        </button>
      </div>
    );
  }

  
  const BotaoFinalizar = props => {
    return (
      <div>
        <button onClick={props.cliqueCongelar}>Finalizar contador</button>
      </div>
    );
}





export default Contador