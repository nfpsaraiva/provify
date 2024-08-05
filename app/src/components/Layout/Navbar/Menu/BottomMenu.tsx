import { Anchor, Group, Stack } from "@mantine/core";
import { FC } from "react";

const BottomMenu: FC = () => {
  return (
    <Stack gap={4}>
      <Group justify="space-between">
        <Anchor fw={600} underline="never" target="_blank" href="https://nfpsaraiva.com" size="xs">nfpsaraiva.com</Anchor>
        <Anchor fw={600} underline="never" target="_blank" href="https://github.com/nfpsaraiva/notes256" size="xs">v0.1.3</Anchor>
      </Group>
    </Stack>
  )
}

export default BottomMenu;