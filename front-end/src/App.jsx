import './App.css'
import { useState } from 'react'
import BigCard from './components/bigCard/BigCard'
import Card from './components/Card/Card'
import useCountry from './hooks/useCountry'

function App() {
  const [showPopUp, setShowPopUp] = useState(false);
  const [cardIndex, setCardIndex] = useState(0);

  const url = "http://localhost:8080/countries"
  const { countries, loading, error } = useCountry(url);

  const handleOnClick = (i = null) => {
    const blur = document.getElementById('blur');
    blur.classList.toggle('active');

    setShowPopUp(!showPopUp);

    if (i !== null) {
      setCardIndex(i);
    }
  };

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro: {error}</p>;

  return (
    <>
      {showPopUp && <BigCard
        name={countries[cardIndex].name}
        capital={countries[cardIndex].capital}
        population={countries[cardIndex].population}
        area={countries[cardIndex].area}
        handleClose={() => handleOnClick()}
      />}
      <div className='app-conteiner' id='blur'>
        {countries.map((country, index) => (
          <Card key={index} name={country.name} cardClick={() => handleOnClick(index)} />
        ))}
      </div>
    </>
  )
}

export default App
