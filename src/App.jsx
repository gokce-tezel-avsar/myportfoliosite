import DarkModeContextProvider from './context/DarkModeContext';
import LanguageContextProvider from "./context/LanguageContext"
import AppContainer from "./AppContainer"


function App() {

  return (
    <>
       <DarkModeContextProvider>
       <LanguageContextProvider>
       <AppContainer />
        </LanguageContextProvider>
        </DarkModeContextProvider>
        </>
  )
}

export default App
