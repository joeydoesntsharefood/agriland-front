import { createElement } from "react"
import View from "./view"

const Board = ({ children }: { children: any }) => {
  console.log(children)

  return createElement(View, {})
}

export default Board