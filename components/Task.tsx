import { useState } from "react";
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Label } from "@radix-ui/react-label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

interface TaskProps {
  id: number;
  title: string;
  description: string;
  onContinue: () => void;
  onSaveEdit: (id: number, newTitle: string, newDescription: string) => void;
}

export function Task({ id, title, description, onContinue, onSaveEdit }: TaskProps) {
  
  // Estado para determinar se a Task está em modo de edição
  const [isEditing, setIsEditing] = useState(false);

  // Estados para armazenar os valores editados
  const [editTitle, setEditTitle] = useState(title);
  const [editDescription, setEditDescription] = useState(description);

  // Função para alternar o modo de edição
  const handleEdit = () => {
    setIsEditing(true);
  };

  // Função para salvar as edições
  const handleSaveEdit = () => {
    onSaveEdit(id, editTitle, editDescription);
    setIsEditing(false); // Sai do modo de edição após salvar
  };

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>
        </CardDescription>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <p>{description}</p>
            </div>
          </div>
      </CardContent>
      <CardFooter className="flex justify-between gap-4">
      <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full" variant="outline">Editar</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>
            Edite aqui o título e a descrição. <br></br>Clique em salvar quando houver concluído.
          </DialogDescription>
          <Label>Edite aqui</Label>
          <Input value={editTitle} onChange={(e) => setEditTitle(e.target.value)} placeholder="Editar título"></Input>
          <Textarea value={editDescription} onChange={(e) => setEditDescription(e.target.value)} placeholder="Editar descrição"></Textarea>
        </DialogHeader>
        <DialogFooter>
          <DialogClose>
            <Button variant={"outline"}>Cancelar</Button>
            </DialogClose>
          <DialogClose ><Button onClick={handleSaveEdit}>Salvar</Button></DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
        <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="w-full" variant="default">Encerrar task</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Tem certeza que quer encerrar a task?</AlertDialogTitle>
          <AlertDialogDescription>
            Ao clicar em continuar, essa task será escluída de sua lista. <br></br>Se você não a cuncluiu ainda, clique em cancelar.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction onClick={onContinue}>Continuar</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
      </CardFooter>
    </Card>
  )
}