import axios from "axios"
import { useEffect, useState } from "react"
import CharacterCard from "../Components/CharacterCard"

export default function CharacterDetails(){

  const [ characters, setCharacters ] = useState([])
  const [ houses, setHouses ] = useState([])

  const [ selected, setSelected ] = useState("Everyone")

  const fetchCharacters = async () => {
    const response = await axios.get("https://hp-assessment-api.herokuapp.com/hp/characters")
    setCharacters(response.data)

    const houseResponse = await axios.get("https://hp-assessment-api.herokuapp.com/hp/houses")
    setHouses(houseResponse.data)
  }

  useEffect(() => {
    fetchCharacters()
  }, [])

  const displayCharacter = selected === "Everyone" 
    ? characters 
    : characters.filter(char => char.houseId === parseInt(selected))
 
  return(
    <div>
      <h1>Characters Details</h1>
      <select onChange={(e) => setSelected(e.target.value)}>
        <option value="Everyone">ALL CHARACTERS</option>
        {houses.map(house => (
        <option key={house.id} value={house.id}>{house.name}</option>))}
      </select>
      
      {!characters 
        ? "Loading" 
        : displayCharacter
            .sort((a, b) => a.name.localeCompare(b.name))
            .map(char => (
          <CharacterCard 
            key={char.id}
            id={char.id}
            houseId={char.houseId}
            name={char.name} 
            born={char.born} 
            img={char.imgUrl} 
            house={char.house?.name}/>
        ))}
    </div>
  )
}