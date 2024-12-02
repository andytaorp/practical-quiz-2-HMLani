import React, { useState } from "react";
import AddHabitForm from "./AddHabitForm";
import HabitList from "./HabitList";

function App() {
  const [habits, setHabits] = useState([]);

  const handleAddHabit = (habitName) => {
    // TODO: write code to add a new habit here
    setHabits(lastHabit => [...lastHabit, habitName]);
  };

  const handleToggleHabit = (id) => {
    // TODO: write code to toggle a habit's status
    setHabits((lastHabit) => lastHabit.map((habitName) => {
      if (habitName.id === id) { return { ...habitName, completed: !habitName.completed }; }
      return habitName;
    }))
  };

  const handleDeleteHabit = (id) => {
    // TODO: write code to delete a habit
    setHabits((lastHabit) => lastHabit.filter((habitName) => habitName.id !== id));
  };

  return (
    <div>
      <h1>Habit Tracker</h1>
      {/*TODO: add a form to add a new habit*/}
      <AddHabitForm onAddHabit={handleAddHabit}/>
      {/*TODO: add a list of habits*/}
      <HabitList habits={habits} onToggleHabit={handleToggleHabit} onDeleteHabit={handleDeleteHabit}/>
    </div>
  );
}

export default App;
