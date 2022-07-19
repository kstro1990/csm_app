import { Link } from '@remix-run/react'

export default function Index() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: "1.4" }}>
      <h1>Bienvenido al Viaje ✈️ </h1>
      <nav>
        <ul>
          <li>
            <Link to='/about'> Hola mundo </Link>
          </li>
          <li>
            <Link to='/users/create'> create User</Link>
          </li>
          <li>
            <Link to='/users/address/create'> create Direction</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
