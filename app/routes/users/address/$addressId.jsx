import { useParams } from '@remix-run/react'

export default function userPost() {
    const params = useParams()
    console.log(params)
    return (
        <>
            <h2>Dierecion creado con exito </h2>
            <p>tipo de direccion  {params}</p>
        </>
    )
}
