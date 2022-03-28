import { createContext, useReducer } from "react"


export const ModeContext = createContext()

const modeReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_MODE':
      return { ...state, mode: action.payload }
    case 'SHOW_INFO':
      return { ...state, showInfo: action.payload }
    default: 
      return state
  }
}

export function ModeProvider({ children }) {
  const [state, dispatch] = useReducer(modeReducer, { mode: 'light', showInfo: true })

  const changeMode = (mode) => {
    dispatch({ type: 'CHANGE_MODE', payload: mode})
  }

  const setShowInfo = (showInfo) => {
    dispatch({ type: 'SHOW_INFO', payload: showInfo})
  }

  return (
    <ModeContext.Provider value={{...state, changeMode, setShowInfo}}>
      {children}
    </ModeContext.Provider>
  )
}
