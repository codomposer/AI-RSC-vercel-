"use client"

import { useState } from "react"
import Button from "@/components/button/Button"
import { streamComponent } from "./actions"

export default function Page() {
  const [component, setComponent] = useState<React.ReactNode>()

  return (
    <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault()
          setComponent(await streamComponent())
        }}
      >
        <Button type="submit">Stream Component</Button>
      </form>
      <div>{component}</div>
    </div>
  )
}
