import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import type { Exercise } from "@/data/workouts";
import { addWorkoutLog } from "@/lib/workout-log";
import { showSuccess } from "@/utils/toast";

interface LogExerciseDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  exercise: Exercise | null;
  planId: number;
  planName: string;
}

const LogExerciseDialog = ({ open, onOpenChange, exercise, planId, planName }: LogExerciseDialogProps) => {
  const [notes, setNotes] = useState("");

  if (!exercise) return null;

  const handleSave = () => {
    addWorkoutLog({
      planId,
      planName,
      exercise,
      notes,
    });
    showSuccess(`'${exercise.name}' registrado com sucesso!`);
    setNotes("");
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Registrar: {exercise.name}</DialogTitle>
          <DialogDescription>
            Recomendado: {exercise.details}. Adicione notas sobre seu desempenho abaixo.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid w-full gap-1.5">
            <Label htmlFor="notes">Notas (ex: peso usado, como se sentiu)</Label>
            <Textarea
              placeholder="Digite suas notas aqui."
              id="notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>Cancelar</Button>
          <Button type="submit" onClick={handleSave}>Salvar Registro</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default LogExerciseDialog;