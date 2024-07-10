import { Stack } from "@mantine/core";
import { IconCheck, IconList, IconTrash } from "@tabler/icons-react";
import { FC } from "react";
import classes from "./Menu.module.css";
import MenuItem from "./MenuItem";
import { MenuEnum } from "@/enums";

interface TopMenuProps {
  closeMobileSidebar: () => void
}

const TopMenu: FC<TopMenuProps> = ({closeMobileSidebar}: TopMenuProps) => {
  return (
    <Stack gap="xs" className={classes.menu}>
      <MenuItem closeMobileSidebar={closeMobileSidebar} name={MenuEnum.MY_PROOFS} icon={<IconList size={20} />} />
      <MenuItem closeMobileSidebar={closeMobileSidebar} name={MenuEnum.VERIFY} icon={<IconCheck size={20} />} />
      <MenuItem closeMobileSidebar={closeMobileSidebar} name={MenuEnum.TRASH} icon={<IconTrash size={20} />} />
    </Stack>
  )
}

export default TopMenu;