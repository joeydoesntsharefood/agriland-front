import { IViewProps } from "./types"

const View = ({ label, onChange, value }: IViewProps) => {
  return (
    <>
      { label && label }
      <input type='text' onChange={event => onChange && onChange(event?.target?.value)} value={value ?? ''} />
    </>
  )
}

export default View