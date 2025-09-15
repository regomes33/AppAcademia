import type { Exercise } from "@/data/workouts";

export interface WorkoutLog {
  id: string;
  planId: number;
  planName: string;
  exercise: Exercise;
  date: string;
  notes?: string;
  difficulty?: string;
}

const LOGS_KEY = "workoutLogs";

export const getWorkoutLogs = (): WorkoutLog[] => {
  try {
    const logsJson = localStorage.getItem(LOGS_KEY);
    return logsJson ? JSON.parse(logsJson) : [];
  } catch (error) {
    console.error("Failed to parse workout logs from localStorage", error);
    return [];
  }
};

export const addWorkoutLog = (log: Omit<WorkoutLog, 'id' | 'date'>) => {
  const logs = getWorkoutLogs();
  const newLog: WorkoutLog = {
    ...log,
    id: new Date().toISOString() + Math.random(),
    date: new Date().toISOString(),
  };
  logs.unshift(newLog); // Adiciona o novo registro no início da lista
  localStorage.setItem(LOGS_KEY, JSON.stringify(logs));
};