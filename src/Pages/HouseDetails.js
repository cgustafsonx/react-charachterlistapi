import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import CharacterCard from "../Components/CharacterCard"

export default function HouseDetails(){

  const [ house, setHouse ] = useState({})

  const params = useParams()

  const fetchHouse = async () => {
    const response = await axios.get(`https://hp-assessment-api.herokuapp.com/hp/house/${params.houseId}`)
    console.log(response)

    setHouse(response.data)
  }

  useEffect(() => {
    fetchHouse()
  }, [])

  return(
    <div>
      <h1>{house.name}</h1>
      <h3>Character's House:</h3>
      {house.characters?.map(char => (
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