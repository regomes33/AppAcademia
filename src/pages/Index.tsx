import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { workoutSplits } from "@/data/workouts";
import { Link } from "react-router-dom";
import { Dumbbell } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto p-4 py-8 md:p-8">
        <div className="text-center mb-12">
            <Dumbbell className="mx-auto h-12 w-12 text-primary" />
            <h1 className="text-4xl font-extrabold tracking-tight mt-4">
                Gerador de Treino
            </h1>
            <p className="mt-2 text-lg text-muted-foreground">
                Selecione uma das divisões de treino ABCD abaixo para começar.
            </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workoutSplits.map((split) => (
            <Card key={split.id} className="flex flex-col hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle>{split.title}</CardTitle>
                <CardDescription>Divisão de treino ABCD</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2 text-sm">
                  {Object.entries(split.workouts).map(([day, muscles]) => (
                    <li key={day}>
                      <span className="font-semibold bg-primary/10 text-primary py-0.5 px-2 rounded">Treino {day}:</span> {muscles}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Link to={`/workout/${split.id}`} className="w-full">
                  <Button className="w-full">Ver Detalhes do Treino</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;