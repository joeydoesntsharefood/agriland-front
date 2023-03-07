import InputText from "@/src/components/InputText"
import schedule from "@/src/consumers/Schedule"
import { WrapperSchedule } from "@/src/styles/styles"
import { useRouter } from "next/router"
import { useState } from "react"

const Schedule = () => {
	const [values, setValues] = useState<any>({})
	const router = useRouter()

	const onSubmit = async () => {
		try {
			const response = await schedule.create(values)
			console.log(response)
		} catch (err: any) {
			console.log(err)
		}
	}
	
  return (
    <WrapperSchedule>
      <InputText value={values.id} label="id" onChange={changeValues => setValues({ ...values, ['id']: changeValues})}/>
			<InputText value={values.ownerId} label="ownerId" onChange={changeValues => setValues({ ...values, ['ownerId']: changeValues})}/>
			<InputText value={values.isEventOpen} label="isEventOpen" onChange={changeValues => setValues({ ...values, ['isEventOpen']: changeValues})}/>
			<InputText value={values.hostId} label="hostId" onChange={changeValues => setValues({ ...values, ['hostId']: changeValues})}/>
			<InputText value={values.eventName} label="eventName" onChange={changeValues => setValues({ ...values, ['eventName']: changeValues})}/>
			<InputText value={values.chain} label="chain" onChange={changeValues => setValues({ ...values, ['chain']: changeValues})}/>
			<InputText value={values.placeId} label="placeId" onChange={changeValues => setValues({ ...values, ['placeId']: changeValues})}/>
			<InputText value={values.placeName} label="placeName" onChange={changeValues => setValues({ ...values, ['placeName']: changeValues})}/>
			<InputText value={values.startAt} label="startAt" onChange={changeValues => setValues({ ...values, ['startAt']: changeValues})}/>
			<InputText value={values.endAt} label="endAt" onChange={changeValues => setValues({ ...values, ['endAt']: changeValues})}/>
			<InputText value={values.invitesId} label="invitesId" onChange={changeValues => setValues({ ...values, ['invitesId']: changeValues})}/>

			<button onClick={() => onSubmit()}>Criar</button>
			<button onClick={() => router.push('/menu')}>voltar</button>
    </WrapperSchedule>
  )
}

export default Schedule