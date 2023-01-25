import './App.css';
import { useState } from 'react';

function App() {
  const  [name, setName] = useState('')
  const [pepperoni, setPepperoni] = useState(false)
  const [sausage, setSausage] = useState(false)
  const [peppers, setPeppers] = useState(false)
  const [onions, setOnions] = useState(false)

  return (
    <div className="App">
      <div className="OrderForm">
        <h1>Pizza Order</h1>  
        <label>
          <input
            type="text"
            placeholder={'Name'}
            onChange={e => setName(e.target.value)}
          />
        </label>
        <label>
          <input
            type="checkbox"
            checked={pepperoni}
            onChange={() => setPepperoni(!pepperoni)}
          />
          Pepperoni
        </label>
        <label>
          <input
            type="checkbox"
            checked={sausage}
            onChange={() => setSausage(!sausage)}
          />
          Sausage
        </label>
        <label>
          <input
            type="checkbox"
            checked={peppers}
            onChange={() => setPeppers(!peppers)}
          />
          Peppers
        </label>
        <label>
          <input
            type="checkbox"
            checked={onions}
            onChange={() => setOnions(!onions)}
          />
          Onions
        </label>
      </div>
      <div className="OrderDetails">
        <h3>Your Order:</h3>
        {name && <p>{name}</p>}
        <br />
        {pepperoni && <div>Pepperoni</div>}
        {sausage && <div>Sausage</div>}
        {peppers && <div>Peppers</div>}
        {onions && <div>Onions</div>}
      </div>
    </div>
  );
}

export default App;
