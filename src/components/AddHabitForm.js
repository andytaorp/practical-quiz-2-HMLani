import React, { useState } from "react";

export default function AddHabitForm({ onAddHabit }) {
  const [habitName, setHabitName] = useState('');

  const handleSubmit = (e) => {
    // TODO: write code to handle form submission
    e.preventDefault();

    if (!habitName) {
      return;
    }

    const newHabit = {
      id: Date.now(),
      name: habitName,
      completed: false,
    };

    onAddHabit(newHabit);
    setHabitName('');
  };

  function handleHabitChange(e){
    setHabitName(e.target.value);
  }

  return (
    //TODO: add a form to add a new habit
    <form className='add-habit-form' onSubmit={handleSubmit}>
      <input type='text' placeholder='New Habit' value={habitName} onChange={handleHabitChange}/>
      <button type='submit'>Add Habit</button>
    </form>
  );
}
