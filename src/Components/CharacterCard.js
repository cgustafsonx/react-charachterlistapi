import { Link } from "react-router-dom"

export default function CharacterCard(props) {

  return(
    <div>
      <h2>{props.name}</h2>
      <img src={props.img}/>
      <p><b>Birthday: </b>{props.born}</p>
      <p><b>House: </b> <Link to={`/house/${props.houseId}`}> {props.house}</Link></p>
      <Link to={`/character/${props.id}`}>
        <button>READ MORE</button>
      </Link>
    </div>
  )
}