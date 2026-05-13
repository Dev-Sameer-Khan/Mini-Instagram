import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Feed from './components/Feed'
import CreatePost from './components/Create-post'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Feed />}/>
        <Route path='/create-post' element={<CreatePost />}/>
      </Routes>
    </Router>
  )
}

export default App