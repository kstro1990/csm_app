import { useParams } from '@remix-run/react'

export default function userPost() {
    const params = useParams()
    console.log(params.name)
    return (
        <>
            <h2>Usuario credo</h2>
            <p>identificadors {params.userId}</p>
        </>
    )
}
