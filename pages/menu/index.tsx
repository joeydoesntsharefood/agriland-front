import { useRouter } from "next/router"

const Menu = () => {
    const router = useRouter()

    return (
        <>
            <button onClick={() => router.push('/schedule')}>Agenda</button>
            <button onClick={() => router.push('/painels')}>Paineis</button>
        </>
    )
}

export default Menu