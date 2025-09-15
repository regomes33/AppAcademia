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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
  const [difficulty, setDifficulty] = useState("");

  if (!exercise) return null;

  const handleSave = () => {
    addWorkoutLog({
      planId,
      planName,
      exercise,
      notes,
      difficulty,
    });
    showSuccess(`'${exercise.name}' registrado com sucesso!`);
    setNotes("");
    setDifficulty("");
    onOpenChange(false);
  };

  const handleOpenChange = (isOpen: boolean) => {
    if (!isOpen) {
      setNotes("");
      setDifficulty("");
    }
    onOpenChange(isOpen);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Registrar: {exercise.name}</DialogTitle>
          <DialogDescription>
            Recomendado: {exercise.details}. Adicione notas sobre seu desempenho abaixo.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid w-full gap-1.5">
            <Label htmlFor="difficulty">Como você se sentiu?</Label>
            <Select value={difficulty} onValueChange={setDifficulty}>
              <SelectTrigger id="difficulty">
                <SelectValue placeholder="Selecione a dificuldade" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="easy">Fácil</SelectItem>
                <SelectItem value="medium">Médio</SelectItem>
                <SelectItem value="hard">Difícil</SelectItem>
                <SelectItem value="impossible">Impossível</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid w-full gap-1.5">
            <Label htmlFor="notes">Notas (ex: peso usado, repetições)</Label>
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