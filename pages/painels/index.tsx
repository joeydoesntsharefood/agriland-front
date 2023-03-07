import InputText from "@/src/components/InputText"
import painels from "@/src/consumers/Painels"
import { WrapperSchedule } from "@/src/styles/styles"
import { useRouter } from "next/router"
import { useState } from "react"

const Painels = () => {
    const [values, setValues] = useState<any>({})
    const router = useRouter()

    const onSubmit = async () => {
        try {
            const response = await painels.create(values)
            console.log(response)
        } catch (err: any) {
            console.log(err)
        }
    }

    return (
        <WrapperSchedule>
            <InputText label="id" value={values.id} onChange={changeValues => setValues({ ...values, ['id']: changeValues })} />
            <InputText label="links" value={values.links} onChange={changeValues => setValues({ ...values, ['links']: changeValues })} />

            <button onClick={() => onSubmit()}>Criar</button>
            <button onClick={() => router.push('/menu')}>voltar</button>
        </WrapperSchedule>
    )
}

export default Painels