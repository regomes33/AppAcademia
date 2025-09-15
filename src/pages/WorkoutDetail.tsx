import { Link, useParams } from "react-router-dom";
import { workoutSplits } from "@/data/workouts";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const exercises = {
  costas: [
    { name: "Barra Fixa Fechada (Chin-up)", gif: "/imgi_3_costas-barra-fixa-fechada-chinup.gif" },
    { name: "Barra Fixa Pegada Aberta", gif: "/imgi_4_costas-barra-fixa-pegada-aberta-palma-para-frente-chinup.gif" },
    { name: "Remada Curvada", gif: "/imgi_9_costas-remada-curvada-.gif" },
    { name: "Remada Unilateral com Halter (Serrote)", gif: "/imgi_11_costas-remada-unilateral-com-halter-serrote-no-banco.gif" },
    { name: "Pullover com Halter", gif: "/imgi_12_04331301-Dumbbell-Straight-Arm-Pullover_Chest-FIX_360_logo.gif" },
    { name: "Puxada para Frente no Pulley (Triângulo)", gif: "/imgi_20_costas-puxada-para-frente-no-pulley-com-triangulo.gif" },
    { name: "Puxada Aberta com Barra no Pulley", gif: "/imgi_21_costas-puxada-aberta-com-barra-no-pulley-1.gif" },
    { name: "Remada Sentado com Cabos (Triângulo)", gif: "/imgi_23_remada-sentado-com-cabos-e-triangulo-para-costas.gif" },
  ],
};

const getExercisesForMuscles = (muscles: string) => {
    const lowerCaseMuscles = muscles.toLowerCase();
    if (lowerCaseMuscles.includes('costas') || lowerCaseMuscles.includes('dorsal') || lowerCaseMuscles.includes('trapézio')) {
        return exercises.costas;
    }
    return [];
}

const WorkoutDetail = () => {
  const { id } = useParams<{ id: string }>();
  const workoutSplit = workoutSplits.find((split) => split.id === Number(id));

  if (!workoutSplit) {
    return (
        <div className="container mx-auto p-4 text-center">
            <h1 className="text-2xl font-bold">Treino não encontrado</h1>
            <Link to="/">
                <Button variant="link">Voltar para a seleção</Button>
            </Link>
        </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
        <Link to="/" className="inline-flex items-center mb-4 text-sm font-medium text-gray-600 hover:text-gray-900">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar para seleção
        </Link>
      <h1 className="text-3xl font-bold text-center mb-2">{workoutSplit.title}</h1>
      <p className="text-center text-muted-foreground mb-8">Seu plano de treino semanal.</p>
      
      <Accordion type="single" collapsible className="w-full max-w-4xl mx-auto">
        {Object.entries(workoutSplit.workouts).map(([day, muscles]) => {
            const relevantExercises = getExercisesForMuscles(muscles);
            return (
                <AccordionItem value={`item-${day}`} key={day}>
                    <AccordionTrigger>
                        <div className="flex justify-between items-center w-full pr-4">
                            <span className="font-bold text-lg">Treino {day}</span>
                            <span className="text-right text-muted-foreground">{muscles}</span>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent>
                        {relevantExercises.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                                {relevantExercises.map(exercise => (
                                    <Card key={exercise.name} className="overflow-hidden">
                                        <CardHeader className="p-4">
                                            <CardTitle className="text-base">{exercise.name}</CardTitle>
                                        </CardHeader>
                                        <CardContent className="p-0">
                                            <img src={exercise.gif} alt={exercise.name} className="rounded-b-md w-full aspect-square object-cover" />
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        ) : (
                            <p className="p-4 text-muted-foreground">Nenhum exercício de exemplo disponível para este grupo muscular.</p>
                        )}
                    </AccordionContent>
                </AccordionItem>
            )
        })}
      </Accordion>
    </div>
  );
};

export default WorkoutDetail;