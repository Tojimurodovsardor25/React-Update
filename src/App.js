import Header from './components/Header'
import Tasks from './components/Tasks';
import { useState } from 'react'
import Footer from './components/Footer'

function App() {
  const [tasks, setTasks] = useState([
    { text: 'Kitob o`qish', date: '25.12.2021 7:00', id: 1, remind: true },
    { text: 'Ishga borish', date: '25.12.2021 9:00', id: 2, remind: false },
    { text: 'Dars qilish', date: '25.12.2021 18:00', id: 3, remind: false },
  ])

  const onDelete = (id) => {
    // console.log('delate', id);
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const onRemind = (id) => {
    console.log('reminder', id);

    setTasks(tasks.map((task) => task.id === id ? { ...task, remind: !task.remind } : task))
  }

  return (
    <div className="container">
      <Header title={"Task tracker"} />
      <Tasks tasks={tasks} onDelete={onDelete} onRemind={onRemind} />
      <Footer />
    </div>
  );
}

export default App;
