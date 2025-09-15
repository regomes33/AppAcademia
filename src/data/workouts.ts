export interface WorkoutSplit {
  id: number;
  title: string;
  workouts: {
    [key: string]: string;
  };
}

export const workoutSplits: WorkoutSplit[] = [
  {
    id: 1,
    title: "Exemplo 1",
    workouts: {
      A: "Quadríceps e bíceps",
      B: "Peitorais, ombros e tríceps",
      C: "Costas, trapézio e femoral",
      D: "Ombros e tríceps",
    },
  },
  {
    id: 2,
    title: "Exemplo 2",
    workouts: {
      A: "Costas e trapézio",
      B: "Peitorais e ombros",
      C: "Pernas completas",
      D: "Tríceps, bíceps e antebraços",
    },
  },
  {
    id: 3,
    title: "Exemplo 3",
    workouts: {
      A: "Femoral, bíceps e antebraços",
      B: "Peitorais e ombros",
      C: "Costas e trapézio",
      D: "Quadríceps e tríceps",
    },
  },
  {
    id: 4,
    title: "Exemplo 4",
    workouts: {
      A: "Bíceps e quadríceps",
      B: "Peitorais e femoral",
      C: "Costas e trapézio",
      D: "Ombros e tríceps",
    },
  },
  {
    id: 5,
    title: "Exemplo 5",
    workouts: {
      A: "Dorsal",
      B: "Peitorais",
      C: "Pernas",
      D: "Braços",
    },
  },
  {
    id: 6,
    title: "Exemplo 6",
    workouts: {
      A: "Peitorais e tríceps",
      B: "Costas, bíceps e antebraços",
      C: "Pernas",
      D: "Ombros e trapézio",
    },
  },
  {
    id: 7,
    title: "Exemplo 7",
    workouts: {
      A: "Peitorais e anterior dos ombros",
      B: "Bíceps, tríceps e antebraços",
      C: "Pernas e panturrilhas",
      D: "Costas e posterior dos ombros/trapézio",
    },
  },
];