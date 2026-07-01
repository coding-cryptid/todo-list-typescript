import React, { useState } from 'react';

type Todo = {
  id: number;
  task: string;
  completed: boolean;
}

const TodoList: React.FC = () => {
  return (
    <div>
      <h2>My React Typed Function Component Todo List</h2>
    </div>
  );
};

export default TodoList;