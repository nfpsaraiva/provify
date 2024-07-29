import { NotePage } from "@/components/Common/Notes";
import { UserMenu } from "@/components/LocalNotes";
import { useLocalNotes } from "@/hooks";
import { useDisclosure } from "@mantine/hooks";
import { IconDeviceMobile } from "@tabler/icons-react";
import { FC, useState } from "react";

const LocalNotes: FC = () => {
  const [searchValue, setSearchValue] = useState('');
  const { localNotes, createNote, updateNote, transferNote } = useLocalNotes();
  const [createNoteModalOpened, createNoteModalHandle] = useDisclosure(false);

  const refetch = () => {};

  return (
    <NotePage
      pageTitle="Local Notes"
      pageSubtitle="Notes will only be saved on your device"
      createNote={createNote}
      createNoteModalHandle={createNoteModalHandle}
      createNoteModalOpened={createNoteModalOpened}
      isLoading={false}
      notes={localNotes}
      refetch={refetch}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchValueDebounced={searchValue}
      updateNote={updateNote}
      userMenu={<UserMenu />}
      redirectAfterSubmit="/local-notes"
      noteMenuIcon={<IconDeviceMobile size={20} />}
    />
  )
}

export default LocalNotes;