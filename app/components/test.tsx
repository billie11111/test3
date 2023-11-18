'use client'

import { forwardRef } from "react"

export const Test = forwardRef((props, ref: any) => {

  return (
    <div ref={ref}>TEST</div>
  )
})