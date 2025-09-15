import { useState, useEffect } from "react";
import { getWorkoutLogs, type WorkoutLog } from "@/lib/workout-log";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { BarChart } from "lucide-react";

const History = () => {
  const [logs, setLogs] = useState<WorkoutLog[]>([]);

  useEffect(() => {
    setLogs(getWorkoutLogs());
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('pt-BR', {
      dateStyle: 'long',
      timeStyle: 'short',
    });
  };

  return (
    <div className="bg-gray-50">
      <div className="container mx-auto p-4 sm:p-6 lg:p-8">
        <header className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800">Histórico de Treinos</h1>
          <p className="text-lg text-gray-600 mt-2">
            Veja todos os exercícios que você registrou.
          </p>
        </header>
        <main>
          {logs.length === 0 ? (
            <div className="text-center py-16 border-2 border-dashed rounded-lg">
              <BarChart className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-sm font-semibold text-gray-900">Nenhum registro encontrado</h3>
              <p className="mt-1 text-sm text-gray-500">Comece a registrar seus treinos para vê-los aqui.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {logs.map((log) => (
                <Card key={log.id}>
                  <CardHeader>
                    <CardTitle>{log.exercise.name}</CardTitle>
                    <CardDescription>
                      Do plano "{log.planName}" - {formatDate(log.date)}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600"><strong>Recomendado:</strong> {log.exercise.details}</p>
                    {log.notes && <p className="mt-2 text-sm text-gray-800 bg-gray-100 p-3 rounded-md"><strong>Suas notas:</strong> {log.notes}</p>}
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default History;