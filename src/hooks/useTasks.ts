import { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import type { Task, TaskStatus } from '../types/task';
import { loadTasks, saveTasks } from '../utils/storage';

export const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>(loadTasks);

  useEffect(() => saveTasks(tasks), [tasks]);

  const addTask = (title: string, description?: string) =>
    setTasks(t => [
      ...t,
      {
        id: uuid(),
        title,
        description,
        status: 'pending',
        createdAt: new Date().toISOString(),
      },
    ]);

  const updateTask = (id: string, updates: Partial<Task>) =>
    setTasks(t => t.map(task => (task.id === id ? { ...task, ...updates } : task)));

  const deleteTask = (id: string) =>
    setTasks(t => t.filter(task => task.id !== id));

  return { tasks, addTask, updateTask, deleteTask };
};
