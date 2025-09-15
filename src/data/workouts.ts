export interface Exercise {
  name: string;
  details: string;
  gifUrl?: string;
}

export interface SplitDetails {
  title: string;
  exercises: Exercise[];
}

export interface WorkoutPlan {
  id: number;
  name: string;
  splits: {
    a: SplitDetails;
    b: SplitDetails;
    c: SplitDetails;
    d: SplitDetails;
  };
  notes?: string;
}

export const workoutPlans: WorkoutPlan[] = [
  {
    id: 1,
    name: "Exemplo 1",
    splits: {
      a: {
        title: "Deltoides / trapézio e tríceps / abdominais",
        exercises: [
          { name: "Desenvolvimento com halteres pela frente", details: "5 séries com 15, 12, 10, 8 e 8 repetições." },
          { name: "Elevação lateral sentado", details: "4 séries com 8, 8, 8 e 6 repetições." },
          { name: "Encolhimento de ombros com halteres", details: "3 séries de 15 repetições." },
          { name: "Crucifixo invertido na máquina", details: "4 séries com 10, 8, 8 e 6 repetições." },
          { name: "Tríceps testa com barra EZ ou W", details: "4 séries com 12, 10, 10 e 8 repetições." },
          { name: "Paralelas com peso", details: "4 repetições até a o máximo que conseguir." },
          { name: "Elevação de pernas com peso", details: "4 séries de 20 repetições." },
        ],
      },
      b: {
        title: "Pernas / panturrilhas e abdominais",
        exercises: [
          { name: "Agachamento livre", details: "5 séries com 15, 12, 10, 10 e 8 repetições." },
          { name: "Leg press 45º", details: "4 séries com 20, 15, 10 e 8 repetições." },
          { name: "Cadeira extensora", details: "4 séries com 15, 10, 10 e 8 repetições." },
          { name: "Gêmeos sentado (burrinho) exercício para panturrilha", details: "4 séries de 15 repetições." },
          { name: "Cadeira flexora", details: "4 séries com 10, 8, 8 e 8 repetições." },
          { name: "Gêmeos em pé unilateral", details: "4 séries com 12, 10, 10 e 10 repetições." },
          { name: "Abdominais superiores na prancha", details: "4 séries de 20 repetições." },
        ],
      },
      c: {
        title: "Peitorais / abdominais",
        exercises: [
          { name: "Supino reto com halteres", details: "5 séries com 15, 12, 10, 8 e 6 repetições." },
          { name: "Supino inclinado com barra", details: "4 séries com 10, 8, 8 e 6 repetições." },
          { name: "Crossover", details: "4 séries de 8 repetições." },
          { name: "Crucifixo reto", details: "4 séries com 10, 8, 6 e 4 repetições." },
          { name: "Peck Deck (ou voador)", details: "7 séries de 8 a 12 repetições com a maior carga possível e descanso de, no máximo, 20 segundos entre uma série e outra." },
          { name: "Abdominais na máquina ou cadeira", details: "4 séries com 30, 20, 20 e 15 repetições." },
        ],
      },
      d: {
        title: "Costas / bíceps / abdominais",
        exercises: [
          { name: "Puxada nuca na polia", details: "5 séries com 12, 10, 8, 8 e 6 repetições.", gifUrl: "/gifs/imgi_21_costas-puxada-aberta-com-barra-no-pulley-1.gif" },
          { name: "Remada cavalinho", details: "4 séries com 10, 8, 8 e 6 repetições.", gifUrl: "/gifs/imgi_9_costas-remada-curvada-.gif" },
          { name: "Pulley frente", details: "4 séries com 10, 8, 8 e 6 repetições.", gifUrl: "/gifs/imgi_20_costas-puxada-para-frente-no-pulley-com-triangulo.gif" },
          { name: "Levantamento terra", details: "3 séries de 10 repetições." },
          { name: "Rosca direta com barra reta", details: "4 séries com 12, 10, 10 e 8 repetições." },
          { name: "Rosca martelo sentado alternado", details: "3 séries de 10 repetições." },
          { name: "Elevação de pernas conjugado com abdominais convencionais usando anilha no peito como resistência", details: "4 séries de 20 repetições para cada exercício em supersérie." },
        ],
      },
    },
    notes: "O treino foi apresentado pelo especialista em nutrição, personal coach virtual e estudante de educação física Marcelo Sedon. Ele afirma que o treinamento não é indicado para iniciantes e nem para pessoas que estejam em processo de readaptação. Marcelo ainda explica que o treino não deve durar mais que 60 minutos. O intervalo de descanso entre uma série e outra deve ser de 45 a 60 segundos. Já a pausa entre um exercício e outro deve durar de 60 a 90 segundos.",
  },
  {
    id: 2,
    name: "Exemplo 2",
    splits: {
      a: {
        title: "Peitorais / abdominais / panturrilhas",
        exercises: [
          { name: "Supino inclinado com halteres", details: "4 séries de 10 repetições." },
          { name: "Supino reto com barra", details: "4 séries de 10 repetições." },
          { name: "Supino declinado com halteres", details: "4 séries de 10 repetições." },
          { name: "Peck Deck (ou voador na máquina)", details: "4 séries de 10 repetições." },
          { name: "Panturrilha no degrau com peso", details: "4 séries de 20 repetições." },
          { name: "Panturrilha na máquina", details: "3 séries de 25 repetições." },
          { name: "Elevação de pernas com caneleira", details: "4 séries de 15 repetições." },
          { name: "Abdômen clássico com anilha no peito", details: "4 séries de 12 repetições." },
        ],
      },
      b: {
        title: "Costas / antebraços / posteriores",
        exercises: [
          { name: "Puxada costas no pulley", details: "4 séries de 10 repetições.", gifUrl: "/gifs/imgi_22_costas-puxada-com-barra-no-pulley-1.gif" },
          { name: "Puxada frontal no pulley", details: "4 séries de 10 repetições.", gifUrl: "/gifs/imgi_20_costas-puxada-para-frente-no-pulley-com-triangulo.gif" },
          { name: "Remada", details: "4 séries de 10 repetições.", gifUrl: "/gifs/imgi_10_costas-remada-curvada-.gif" },
          { name: "Peck Deck invertido (na máquina de voador)", details: "4 séries de 12 repetições." },
          { name: "Asa", details: "4 séries de 10 repetições." },
          { name: "Antebraço com halter", details: "4 séries de 15 repetições." },
          { name: "Posterior na máquina", details: "4 séries de 15 repetições." },
          { name: "Levantamento terra", details: "4 séries de 8 repetições." },
        ],
      },
      c: {
        title: "Tríceps / lombar / oblíquo / quadríceps",
        exercises: [
          { name: "Tríceps polia", details: "4 séries de 12 repetições." },
          { name: "Tríceps francês com halter", details: "4 séries de 10 repetições." },
          { name: "Tríceps polia com pegada invertida", details: "4 séries de 10 repetições." },
          { name: "Barras paralelas", details: "4 séries de 8 repetições." },
          { name: "Coice", details: "4 séries de 10 repetições." },
          { name: "Abdômen lateral", details: "4 séries de 20 repetições." },
          { name: "Lombar na máquina posterior", details: "4 séries de 12 repetições." },
          { name: "Cadeira extensora", details: "4 séries de 15 repetições." },
          { name: "Leg press", details: "4 séries de 15 repetições." },
          { name: "Agachamento", details: "4 séries de 12 repetições." },
        ],
      },
      d: {
        title: "Ombros / tríceps / trapézio",
        exercises: [
          { name: "Desenvolvimento atrás da nuca", details: "4 séries de 10 repetições." },
          { name: "Elevação lateral com halteres", details: "4 séries de 10 repetições." },
          { name: "Levantamento lateral com cabo", details: "4 séries de 10 repetições." },
          { name: "Elevação frontal com halteres", details: "4 séries de 10 repetições." },
          { name: "Encolhimento de ombros", details: "6 séries de 20 repetições." },
          { name: "Rosca Scott", details: "4 séries de 10 repetições." },
          { name: "Rosca alternado", details: "4 séries de 15 repetições." },
          { name: "Rosca concentrada", details: "4 séries de 8 repetições." },
          { name: "Rosca polia com corda", details: "4 séries de 10 repetições." },
        ],
      },
    },
  },
  {
    id: 3,
    name: "Exemplo 3",
    splits: {
      a: {
        title: "Peitorais / tríceps",
        exercises: [
          { name: "Supino inclinado com barra", details: "4 séries de 10 a 12 repetições." },
          { name: "Crucifixo reto", details: "3 séries de 10 a 12 repetições." },
          { name: "Supino reto com barra", details: "3 séries de 10 a 12 repetições." },
          { name: "Voador no banco com halteres", details: "3 séries de 10 a 12 repetições." },
          { name: "Tríceps Francês deitado com halteres", details: "3 séries de 10 a 12 repetições." },
          { name: "Tríceps no pulley com corda", details: "3 séries de 10 a 12 repetições." },
          { name: "Tríceps no pulley com barra", details: "3 séries de 10 a 12 repetições." },
          { name: "Tríceps testa", details: "4 séries de 10 a 12 repetições." },
        ],
      },
      b: {
        title: "Costas / bíceps / antebraços",
        exercises: [
          { name: "Levantamento terra", details: "3 séries de 10 a 12 repetições." },
          { name: "Pulley frontal", details: "3 séries de 10 a 12 repetições.", gifUrl: "/gifs/imgi_20_costas-puxada-para-frente-no-pulley-com-triangulo.gif" },
          { name: "Pulley atrás", details: "4 séries de 10 a 12 repetições.", gifUrl: "/gifs/imgi_21_costas-puxada-aberta-com-barra-no-pulley-1.gif" },
          { name: "Remada baixa", details: "4 séries de 10 a 12 repetições.", gifUrl: "/gifs/imgi_23_remada-sentado-com-cabos-e-triangulo-para-costas.gif" },
          { name: "Serrote com halter", details: "4 séries de 10 a 12 repetições.", gifUrl: "/gifs/imgi_11_costas-remada-unilateral-com-halter-serrote-no-banco.gif" },
          { name: "Rosca alternada com banco inclinado", details: "4 séries de 10 a 12 repetições." },
          { name: "Rosca Scott com barra W", details: "4 séries de 10 a 12 repetições." },
          { name: "Rosca direta na barra reta", details: "3 séries de 10 a 12 repetições." },
          { name: "Rosca martelo em pé", details: "4 séries de 10 a 12 repetições." },
          { name: "Rosca punho", details: "4 séries de 10 a 12 repetições." },
        ],
      },
      c: {
        title: "Pernas",
        exercises: [
          { name: "Leg press 45º", details: "4 séries de 10 a 12 repetições." },
          { name: "Extensor de pernas", details: "4 séries de 10 a 12 repetições." },
          { name: "Cadeira flexora", details: "4 séries de 10 a 12 repetições." },
          { name: "Cadeira adutora", details: "4 séries de 10 a 12 repetições." },
          { name: "Cadeira abdutora", details: "4 séries de 10 a 12 repetições." },
          { name: "Stiff", details: "4 séries de 10 a 12 repetições." },
        ],
      },
      d: {
        title: "Ombros / trapézio",
        exercises: [
          { name: "Desenvolvimento por trás da nuca com barra", details: "4 séries de 8 a 12 repetições." },
          { name: "Desenvolvimento no Smith machine", details: "3 séries de 8 a 12 repetições." },
          { name: "Elevação frontal com halteres em pé", details: "3 séries de 8 a 12 repetições." },
          { name: "Elevação lateral com halteres sentado", details: "4 séries de 8 a 12 repetições." },
          { name: "Encolhimento de ombros com halteres", details: "4 séries de 8 a 12 repetições." },
          { name: "Encolhimento de ombros com barra", details: "4 séries de 8 a 12 repetições." },
        ],
      },
    },
    notes: "O treino foi sugerido por Matheus Boing, que afirmou ter ganhado aproximadamente 2 kg com o treino aliado a uma alimentação adequada. Entretanto, como o próprio ressaltou, o que funciona para o corpo dele pode não funcionar para o de outras pessoas. Assim, o ideal é conversar com seu treinador para verificar se esse modelo de treino ABCD também é apropriado para o seu caso.",
  },
  {
    id: 4,
    name: "Exemplo 4",
    splits: {
      a: {
        title: "Peitorais / ombros",
        exercises: [
          { name: "Supino reto com barra ou halteres conjugado com Peck Deck (voador)", details: "3 séries de 6 a 8 repetições (supersérie)." },
          { name: "Supino inclinado máquina", details: "3 séries com drop set." },
          { name: "Voador inclinado com halteres", details: "2 séries de 6 a 8 repetições." },
          { name: "Crossover", details: "3 séries com pequena pausa de descanso de 10, 8 e 6 repetições." },
          { name: "Desenvolvimento militar anterior", details: "3 séries de 6 a 8 repetições." },
          { name: "Elevação frontal cruzada na polia", details: "4 séries com pequena pausa de descanso de 8 a 10 repetições." },
          { name: "Elevação lateral", details: "50 repetições com pausa de descanso de 10 segundos a cada 10 repetições." },
        ],
      },
      b: {
        title: "Bíceps / tríceps / antebraços",
        exercises: [
          { name: "Rosca direta conjugado com tríceps tradicional na polia", details: "3 séries de 6 a 8 repetições (supersérie)." },
          { name: "Rosca Scott unilateral", details: "3 séries de 8 repetições." },
          { name: "Rosca direta na polia baixa", details: "3 séries com drop set." },
          { name: "Tríceps francês unilateral", details: "3 séries de 8 a 10 repetições." },
          { name: "Tríceps unilateral na polia alta", details: "4 séries de 8 repetições sem intervalo de descanso entre um braço e outro." },
          { name: "Rosca inversa", details: "Rest pause." },
          { name: "Rosca punho", details: "4 séries de 8 a 10 repetições." },
        ],
      },
      c: {
        title: "Pernas / panturrilhas",
        exercises: [
          { name: "Agachamento na máquina/livre/Smith", details: "3 séries de 8 a 10 repetições." },
          { name: "Leg press 45º", details: "3 séries de 8 a 12 repetições." },
          { name: "Cadeira extensora", details: "4 séries até exaustão." },
          { name: "Cadeira flexora", details: "4 séries de 8 a 10 repetições." },
          { name: "Adução de pernas", details: "3 séries de 8 repetições." },
          { name: "Abdução de pernas", details: "3 séries de 8 repetições." },
          { name: "Panturrilha sentado", details: "3 séries de 8 a 10 repetições." },
          { name: "Panturrilha leg press 90º", details: "3 séries de 8 a 10 repetições." },
        ],
      },
      d: {
        title: "Costas / posterior de ombros / trapézio",
        exercises: [
          { name: "Remada curvada pronada", details: "3 séries de 8 a 10 repetições.", gifUrl: "/gifs/imgi_10_costas-remada-curvada-com-pegada-invertida.gif" },
          { name: "Pulley nuca intercalado com pulley frente pegada aberta", details: "3 séries de 8 repetições.", gifUrl: "/gifs/imgi_21_costas-puxada-aberta-com-barra-no-pulley-1.gif" },
          { name: "Remada baixa com triângulo", details: "3 séries de 6 a 10 repetições.", gifUrl: "/gifs/imgi_23_remada-sentado-com-cabos-e-triangulo-para-costas.gif" },
          { name: "Remada baixa romana ou na corda", details: "3 séries com drop set." },
          { name: "Desenvolvimento militar posterior", details: "3 séries de 6 a 8 repetições." },
          { name: "Remada alta com barra", details: "3 séries de 8 a 10 repetições." },
          { name: "Encolhimento de ombros com halteres/Smith", details: "3 séries de 8 a 10 repetições." },
        ],
      },
    },
    notes: "A duração aproximada dos treinos é de 45 a 55 minutos.",
  },
  {
    id: 5,
    name: "Exemplo 5",
    splits: {
      a: { title: "Dorsal", exercises: [] },
      b: { title: "Peitorais", exercises: [] },
      c: { title: "Pernas", exercises: [] },
      d: { title: "Braços", exercises: [] },
    },
  },
  {
    id: 6,
    name: "Exemplo 6",
    splits: {
      a: { title: "Peitorais e tríceps", exercises: [] },
      b: { title: "Costas, bíceps e antebraços", exercises: [] },
      c: { title: "Pernas", exercises: [] },
      d: { title: "Ombros e trapézio", exercises: [] },
    },
  },
  {
    id: 7,
    name: "Exemplo 7",
    splits: {
      a: { title: "Peitorais e anterior dos ombros", exercises: [] },
      b: { title: "Bíceps, tríceps e antebraços", exercises: [] },
      c: { title: "Pernas e panturrilhas", exercises: [] },
      d: { title: "Costas e posterior dos ombros/trapézio", exercises: [] },
    },
  },
];