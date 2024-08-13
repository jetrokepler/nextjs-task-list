"use client"

import React, { useState } from 'react';
import { TaskAdd } from '@/components/TaskAdd';
import { Task } from '@/components/Task';
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

interface Task {
  id: number;
  title: string;
  description: string;
}

export default function Home() {
  // Estado para armazenar uma lista de componentes Task
  const [tasks, setTasks] = useState<Task[]>([]);

  // Função para adicionar um novo Task
  const handleSave = (title: string, description: string) => {
    const newTask = { id: Date.now(), title, description };
    setTasks([...tasks, newTask]);
  };

  // Função para remover um Task
  const handleRemove = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // Função para salvar as edições de um Task
  const handleSaveEdit = (id: number, newTitle: string, newDescription: string) => {
    setTasks(tasks.map(task =>
      task.id === id
        ? { ...task, title: newTitle, description: newDescription }
        : task
    ));
  };
  return (
    <main className="flex justify-center flex-col gap-6">
      <ScrollArea className="mr-48 ml-48 mt-40 rounded-2xl border break-words">
        <div className={`flex gap-4 p-4 ${tasks.length === 0} ? justify-center items-center min-h-[250px] : ''`}>
          {
            tasks.length === 0 ? (
            <p>Não existem tasks ainda. Adicione uma nova!</p>
          ) : (
            tasks.map(task => (
              <Task
                key={task.id}
                id={task.id}
                title={task.title}
                description={task.description}
                onContinue={() => handleRemove(task.id)}
                onSaveEdit={handleSaveEdit}
              />
            ))
          )
          }
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <div className='flex justify-center items-center'>
      <TaskAdd onSave={handleSave}/>
      </div>
    </main>
  );
}
