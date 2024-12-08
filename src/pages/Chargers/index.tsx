import { charges } from "../../assets/constanst"

const Chargers = () => {
  return (
    <div>
      <h2>Listado de cargadores</h2>
      <ul>
        {charges.map((charge) => (
          <li key={charge.id}>
            {charge.id} - {charge.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Chargers
