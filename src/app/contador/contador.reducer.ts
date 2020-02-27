// import { INCREMENTAR, DECREMENTAR, MULTIPLICAR, DIVIDIR,actions, RESET } from './contador.actions';
import * as Contador from './contador.actions'

export function contadorReducer(state: number = 10, action: Contador.actions){
    switch (action.type){

        case Contador.INCREMENTAR:
            return state + 1;
        
        case Contador.DECREMENTAR:
            return state - 1;
        
        case Contador.MULTIPLICAR:
            return state * action.payload;
        
        case Contador.DIVIDIR:
            return state / action.payload;
    
        case Contador.RESET:
            return 0;
        
        default:
            return state;
    }
}