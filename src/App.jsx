
import './App.css'
import Header from './components/header/Header'
import LeftContents from './components/left-contents/LeftContents'
import RightContents from './components/right-contents/RightContents'

function App() {

  return (
    <>
      <Header></Header>
      <h1 className='bg-slate-100 font-bold text-center text-2xl'>React project with tailwind css</h1>
      <div className='flex justify-between'>
          <LeftContents></LeftContents>
          <RightContents></RightContents>
      </div>
    </>
  )
}

export default App
