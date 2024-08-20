// TaskAdd.tsx
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface TaskAddProps {
  onSave: (title: string, description: string) => void;
}

export function TaskAdd({ onSave }: TaskAddProps) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Nova Task</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Adicionar nova Task</DialogTitle>
          <DialogDescription>
            Personalize sua task aqui.<br />Clique em salvar quando hover acabado.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="name">Título</Label>
            <Input
              id="name"
              placeholder="Passear com o totó"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <Textarea
              placeholder="Ps: Lembrar de passar na farmácia pra comprar aquela caixa de Halls."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>
        <DialogFooter className="sm:justify-end">
          <DialogClose asChild>
            <Button
              type="button"
              variant="default"
              onClick={() => {
                onSave(title, description);
              }}
            >
              Salvar
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}