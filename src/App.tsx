import './App.css'

function App() {
  const fullName: string = "Coding Temple"
  const year: number = 2026
  const isThisBootCampFun: boolean = true;
  const fruits: string[] = ['Banana','Apple','Orange']

  type Person = {
    name: string;
    age: number;
  };

  const person1: Person = {
    name: "Alex",
    age: 26,
  };

  return (
    <div>
      <p>Full Name: {fullName}</p>
      <p>Age: {year}</p>
      <p>Is this BootCamp Fun?: {isThisBootCampFun ? 'Yes' : 'No'}</p>
      <p>Fruits:</p>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
      <p>name: {person1.name}</p>
      <p>age: {person1.age}</p>
    </div>
  )
}

export default App
