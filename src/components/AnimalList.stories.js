import React from "react"
import AnimalList from "./AnimalList"

export default {
  title: "AnimalList",
  decorators: [Wrapper]
}

function Wrapper(storyFn) {
  return <div style={{ width: "400px" }}>{storyFn()}</div>
}

export const list = () => <AnimalList />
