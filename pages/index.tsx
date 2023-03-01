import LoginForm from "@/src/components/LoginForm"
import Image from "next/image"
import { BoardForgetPasswordWrapper, BoardWrapper, BodyForgetPasswordWrapper, BodyWrapper, HeaderTextWrapper, HeaderWrappper, ImageWrapper, OtherOptionsWrapper } from "../src/styles/styles"
import logo from '../assets/vertical_001.png'
import { useState } from "react"
import SubmitButton from "@/src/components/SubmitButton"
import InputText from "@/src/components/InputText"
import Login from "@/src/components/Login"
import ForgetPassword from "@/src/components/ForgetPassword"
import Signup from "@/src/components/Signup"

export type _enumOption = 'signin' | 'signup' | 'forgetPassword'

const Home = () => {
  const [option, setOption] = useState<_enumOption>('signin')

  const changeOption = (value: _enumOption) => setOption(value)

  const options = {
    signin: <Login changeOption={changeOption}/>,
    forgetPassword: <ForgetPassword changeOption={changeOption} />,
    signup:<Signup changeOption={changeOption} />
  }

  return options[option]
}

export default Home