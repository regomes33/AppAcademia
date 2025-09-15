export interface WorkoutSplit {
  a: string;
  b: string;
  c: string;
  d: string;
}

export interface WorkoutPlan {
  id: number;
  name: string;
  splits: WorkoutSplit;
}

export const workoutPlans: WorkoutPlan[] = [
  {
    id: 1,
    name: "Exemplo 1",
    splits: {
      a: "Quadríceps e bíceps",
      b: "Peitorais, ombros e tríceps",
      c: "Costas, trapézio e femoral",
      d: "Ombros e tríceps",
    },
  },
  {
    id: 2,
    name: "Exemplo 2",
    splits: {
      a: "Costas e trapézio",
      b: "Peitorais e ombros",
      c: "Pernas completas",
      d: "Tríceps, bíceps e antebraços",
    },
  },
  {
    id: 3,
    name: "Exemplo 3",
    splits: {
      a: "Femoral, bíceps e antebraços",
      b: "Peitorais e ombros",
      c: "Costas e trapézio",
      d: "Quadríceps e tríceps",
    },
  },
  {
    id: 4,
    name: "Exemplo 4",
    splits: {
      a: "Bíceps e quadríceps",
      b: "Peitorais e femoral",
      c: "Costas e trapézio",
      d: "Ombros e tríceps",
    },
  },
  {
    id: 5,
    name: "Exemplo 5",
    splits: {
      a: "Dorsal",
      b: "Peitorais",
      c: "Pernas",
      d: "Braços",
    },
  },
  {
    id: 6,
    name: "Exemplo 6",
    splits: {
      a: "Peitorais e tríceps",
      b: "Costas, bíceps e antebraços",
      c: "Pernas",
      d: "Ombros e trapézio",
    },
  },
  {
    id: 7,
    name: "Exemplo 7",
    splits: {
      a: "Peitorais e anterior dos ombros",
      b: "Bíceps, tríceps e antebraços",
      c: "Pernas e panturrilhas",
      d: "Costas e posterior dos ombros/trapézio",
    },
  },
];