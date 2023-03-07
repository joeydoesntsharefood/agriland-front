import auth from "@/src/consumers/Auth"
import Router from "next/router"
import { createElement, useEffect, useState } from "react"
import { IViewProps } from "./types"
import View from "./view"
import { useRouter } from 'next/router'

const LoginForm = () => {
  const router = useRouter()
  const [values, setValues] = useState<{ email?: string, password?: string }>({})

  const onSubmit = async () => {
    try {
      const response = await auth.login(values)

      console.log(response)
    } catch (err: any) {
      console.log(err)
    }
    
    router.push('/menu')
  }

  const props: IViewProps = {
    onChange: changeValues => setValues({ ...values, ...changeValues }),
    onClick: () => onSubmit(),
    values
  }

  return createElement(View, props)
}

export default LoginForm