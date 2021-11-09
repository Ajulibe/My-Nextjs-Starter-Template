import React from "react"
// import { Spinner } from "@components/spinner" /--> not yet supported

interface Props {
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      {/* <Suspense
        fallback={
          <div>
            <Spinner />
          </div>
        }
      > */}
      {children}
      {/* </Suspense> */}
    </div>
  )
}

export default Layout
