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

  const shapeShifter: any = {
    name: 24,
    age: 'Alex'
  }

  const printToConsole = (value: string): void => {
    console.log(value);
  }

  const cat: null = null;
  const dog: undefined = undefined;
  console.log('cat ',cat);
  console.log('dog',dog);

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

      <p>Fruit 1: {fruits[0]}</p>
      <p>Fruit 2: {fruits[1]}</p>
      <p>Fruit 3: {fruits[2]}</p>

      <p>name: {person1.name}</p>
      <p>age: {person1.age}</p>

      <button onClick={() => printToConsole('Hello, TypeScript!')}>Click me</button>
      <p>name: {shapeShifter.name}</p>
      <p>age: {shapeShifter.age}</p>
      <p>cat: {cat}</p>
      <p>dog: {dog}</p>
    </div>
  )
}

export default App
