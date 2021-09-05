
import Item from './components/item';
import Card from './components/cards';

const App = () => {
  return (
    <div>
      <h1>Minha primeira aplicação com React</h1>
      <ul>          
        <Item texto='Item 1'/>
        <Item>Item 2 </Item>
        <Item>Item 3 </Item>         
      </ul>
      <Card/>
    </div>
  )
}

export default App;



























// Outra maneira de fazer abaixo

/* 

export default function App () {
  return(
    <h1>Hello Word</h1>
    )
  }  
    
    */