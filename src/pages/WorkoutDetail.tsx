import { useParams, Link } from "react-router-dom";
import { workoutPlans } from "@/data/workouts";
import { ArrowLeft } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MadeWithDyad } from "@/components/made-with-dyad";

const WorkoutDetail = () => {
  const { id } = useParams<{ id: string }>();
  const plan = workoutPlans.find((p) => p.id === Number(id));

  if (!plan) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-center">
        <h2 className="text-2xl font-bold mb-4">Plano de Treino Não Encontrado</h2>
        <Button asChild>
          <Link to="/">Voltar para a Home</Link>
        </Button>
      </div>
    );
  }

  const splits = Object.entries(plan.splits);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto p-4 sm:p-6 lg:p-8">
        <header className="mb-8">
          <Button asChild variant="outline" className="mb-4">
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4" /> Voltar
            </Link>
          </Button>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 text-center">
            {plan.name}
          </h1>
        </header>

        <main>
          <Accordion type="single" collapsible className="w-full">
            {splits.map(([key, split]) => (
              <AccordionItem value={key} key={key}>
                <AccordionTrigger className="text-xl font-semibold">
                  <div className="flex items-center">
                    <span className="font-bold bg-primary text-primary-foreground rounded-full h-8 w-8 inline-flex items-center justify-center mr-4 uppercase">{key}</span>
                    {split.title}
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  {split.exercises.length > 0 ? (
                    <ul className="space-y-4 pl-4">
                      {split.exercises.map((exercise, index) => (
                        <li key={index} className="border-l-2 border-primary pl-4">
                          <p className="font-semibold text-gray-800">{exercise.name}</p>
                          <p className="text-gray-600">{exercise.details}</p>
                          {exercise.gifUrl && (
                            <img
                              src={exercise.gifUrl}
                              alt={`Demonstração de ${exercise.name}`}
                              className="mt-4 rounded-lg border bg-white"
                            />
                          )}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-500 pl-4">Nenhum exercício detalhado para este treino.</p>
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {plan.notes && (
            <Card className="mt-8">
              <CardHeader>
                <CardTitle>Observações Importantes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 whitespace-pre-wrap">{plan.notes}</p>
              </CardContent>
            </Card>
          )}
        </main>
      </div>
      <MadeWithDyad />
    </div>
  );
};

export default WorkoutDetail;