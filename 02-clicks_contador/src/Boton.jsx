import './Boton.css'

export function Boton({ texto, click, isClick }) {
    return (
        <>
            <button className={isClick ? 'click' : 'click-reset'}  onClick={click}>{texto}</button>
        </>
    )
}