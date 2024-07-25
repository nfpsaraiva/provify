import { useDeleteNote } from "@/features/Notes/hooks";
import { Note } from "@/types";
import { ActionIcon, Tooltip } from "@mantine/core";
import { IconTrash } from "@tabler/icons-react";
import { FC } from "react";

interface DeleteButtonProps {
  note: Note
}

const DeleteButton: FC<DeleteButtonProps> = ({ note }: DeleteButtonProps) => {
  const { deleteNote } = useDeleteNote();

  const openDeleteModal = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();

    deleteNote(note)
  }

  return (
    <Tooltip label="Delete">
      <ActionIcon variant="subtle" size={"lg"} color="red" onClick={e => openDeleteModal(e)}>
        <IconTrash size={16} />
      </ActionIcon>
    </Tooltip>
  )
}

export default DeleteButton;