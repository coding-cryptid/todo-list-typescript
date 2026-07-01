import './App.css'

function App() {
  const fullName: string = "Coding Temple"
  const year: number = 2026
  const isThisBootCampFun: boolean = true;

  return (
    <div>
      <p>Full Name: {fullName}</p>
      <p>Age: {year}</p>
      <p>Is this BootCamp Fun?: {isThisBootCampFun ? 'Yes' : 'No'}</p>
    </div>
  )
}

export default App
