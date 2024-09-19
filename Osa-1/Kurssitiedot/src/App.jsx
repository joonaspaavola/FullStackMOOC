const Header = (props) => {
  return (
    <>
    <h1>
      {props.name}
    </h1>
    </>
  )
}

const Part = (props) => {
  return (
    <>
    <p>
      {props.partName} {props.exercises}
    </p>
    </>
  )
}

const Content = (props) => {
  return (
    <>
    <Part partName={props.partName1} exercises={props.exercises1} />
    <Part partName={props.partName2} exercises={props.exercises2} />
    <Part partName={props.partName3} exercises={props.exercises3} />
    </>
  )
}

const Total = (props) => {
  return (
    <>
    <p>
      Number of exercises {props.totalExercises}
    </p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header name={course} />
      <Content partName1={part1} exercises1={exercises1} partName2={part2} exercises2={exercises2} partName3={part2} exercises3={exercises3} />
      <Total totalExercises={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App