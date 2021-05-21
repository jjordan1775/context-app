import React, {useState, createContext, useContext} from 'react'

const GlobalSpinnerContext = createContext()
const GlobalSpinnerActionsContext = createContext()

/* eslint-disable */
const useContextFactory = (name, context) => {
  return () => {
  const ctx = useContext(context)
    if (ctx === undefined) {
      throw new Error(`use${name}Context must be used withing a ${name}ContextProvider.`)
    }
    return ctx
  }
}

export const useGlobalSpinnerContext = useContextFactory('GlobalSpinner', GlobalSpinnerContext)
export const useGlobalSpinnerActionsContext = useContextFactory('GlobalSpinnerActions', GlobalSpinnerActionsContext)
/* eslint-enable */

const GlobalSpinnerContextProvider = (props) => {
  const [isGlobalSpinnerOn, setGlobalSpinner] = useState(false)

  return (
    <GlobalSpinnerContext.Provider value={isGlobalSpinnerOn}>
      <GlobalSpinnerActionsContext.Provider value={setGlobalSpinner}>
        {props.children}
      </GlobalSpinnerActionsContext.Provider>
    </GlobalSpinnerContext.Provider>
  )
}

export default GlobalSpinnerContextProvider