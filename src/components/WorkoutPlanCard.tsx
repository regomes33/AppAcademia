import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { WorkoutPlan } from "@/data/workouts";

interface WorkoutPlanCardProps {
  plan: WorkoutPlan;
}

const WorkoutPlanCard = ({ plan }: WorkoutPlanCardProps) => {
  return (
    <Card className="w-full max-w-md cursor-pointer hover:shadow-lg transition-shadow flex flex-col">
      <CardHeader>
        <CardTitle>{plan.name}</CardTitle>
      </CardHeader>
      <CardContent className="text-left flex-grow">
        <ul className="space-y-2">
          <li><span className="font-bold bg-primary text-primary-foreground rounded-full h-6 w-6 inline-flex items-center justify-center mr-2">A</span> {plan.splits.a}</li>
          <li><span className="font-bold bg-primary text-primary-foreground rounded-full h-6 w-6 inline-flex items-center justify-center mr-2">B</span> {plan.splits.b}</li>
          <li><span className="font-bold bg-primary text-primary-foreground rounded-full h-6 w-6 inline-flex items-center justify-center mr-2">C</span> {plan.splits.c}</li>
          <li><span className="font-bold bg-primary text-primary-foreground rounded-full h-6 w-6 inline-flex items-center justify-center mr-2">D</span> {plan.splits.d}</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default WorkoutPlanCard;