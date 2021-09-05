const Item = (props) => {
  return (
    <a href="#" className="list-group-item list-group-item-action list-group-item-dark">
    {props.texto} {props.children} 
    </a>
  )
}

// posso usar os dois metodos de {prosps.texto} e {props.childen} juntos ou individualmente

export default Item;


// ===== OUTRA MANEIRA DE FAZER ABAIXOO =======
/*
const Item = ({children}) => {
  return (
    <a href="#" className="list-group-item list-group-item-action list-group-item-dark">
    {children} 
    </a>
  )
}

// Esse modulo é feito pela destruturazação estilo JS.

export default Item; */