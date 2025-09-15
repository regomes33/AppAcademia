import { workoutPlans } from "@/data/workouts";
import WorkoutPlanCard from "@/components/WorkoutPlanCard";

const Index = () => {
  return (
    <div className="bg-gray-50">
      <div className="container mx-auto p-4 sm:p-6 lg:p-8">
        <header className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800">Selecione seu Plano de Treino</h1>
          <p className="text-lg text-gray-600 mt-2">
            Escolha uma das divisões de treino ABCD abaixo para começar.
          </p>
        </header>
        <main className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 justify-items-center">
          {workoutPlans.map((plan) => (
            <WorkoutPlanCard key={plan.id} plan={plan} />
          ))}
        </main>
      </div>
    </div>
  );
};

export default Index;