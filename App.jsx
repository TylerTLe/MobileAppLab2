/**
 * My To Do List App
 *
 * @format
 */

import React from 'react';
import ToDoList from './ToDoList';
import TodoForm from './TodoForm';
import {SafeAreaView} from 'react-native';

function App() {
  return (
    <SafeAreaView>
      <ToDoList />
      <TodoForm />
    </SafeAreaView>
  );
}

export default App;
