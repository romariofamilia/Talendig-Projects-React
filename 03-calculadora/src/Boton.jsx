export function Boton(props) {
    const esOperador = valor => {
        return isNaN(valor) && (valor !== '=');
    }
    return (
        <div 
        className={esOperador(props.children) ? 'bg-stone-700 text-white w-12 h-12 text-center cursor-pointer hover:bg-stone-500 transition-all' : 'bg-slate-900 cursor-pointer text-white w-12 h-12 text-center hover:bg-slate-500 transition-all'} onClick={() => props.handleClick(props.children)}>
            {props.children}
        </div>
    )
}