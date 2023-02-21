import { ListOfCategories } from './components/ListOfCategories'
import { ListOfPhotoCars } from './components/ListOfPhotoCards'
import { Logo } from './components/Logo'
import { GlobalStyle } from './styles/Global.styled'

function App() {

  return (
    <div className="App" id='app'>
      <GlobalStyle/>
      <Logo/>
      <ListOfCategories/>
      <ListOfPhotoCars/>
    </div>
  )
}

export default App
