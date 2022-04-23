import axios from "axios"
import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"

export default function CharacterDetails(){

  const [ character, setCharacter ] = useState({})

  const params = useParams();

  const fetchCharacter = async () => {
    const response = await axios.get(`https://hp-assessment-api.herokuapp.com/hp/character/${params.characterId}`)
    console.log(response)
    setCharacter(response.data)
  }

  useEffect(() => {
    fetchCharacter()
  }, [])

  return(
    <div>
      <h2>{character.name}</h2>
      <img src={character.imgUrl}/>
      <p><b>Birthday: </b>{character.born}</p>
      <p><b>House: </b>{character.house?.name}</p>
      <Link to="/">
        <button type="button">
          GO BACK
        </button>
      </Link>   
      </div>
  )
}