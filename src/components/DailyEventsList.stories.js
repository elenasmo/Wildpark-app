import React from "react"
import DailyEventsList from "./DailyEventsList"

export default {
  title: "DailyEventsList",
  decorators: [Wrapper]
}

function Wrapper(storyFn) {
  return <div style={{ width: "400px" }}>{storyFn()}</div>
}

export const events = () => <DailyEventsList />
