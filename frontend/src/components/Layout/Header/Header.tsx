import SidebarToggle from "@/components/SidebarToggle/SidebarToggle";
import { WalletButton } from "@/features";
import useStore from "@/stores/store";
import { Burger, Group, Title } from "@mantine/core";
import { useWeb3ModalAccount } from "@web3modal/ethers/react";
import { FC } from "react";
import { useShallow } from "zustand/react/shallow";

interface HeaderProps {
  sidebarOpened: boolean,
  sidebarToggle: () => void
}

const Header: FC<HeaderProps> = ({ sidebarOpened, sidebarToggle }: HeaderProps) => {
  const { isConnected } = useWeb3ModalAccount();
  const [panel] = useStore(useShallow(state => [state.panel]));

  return (
    <Group h="100%" px="md">
      <Burger opened={sidebarOpened} onClick={sidebarToggle} hiddenFrom="sm" size="sm" />
      <Group gap={0} justify="space-between" style={{ flex: 1 }}>
        <Group>
          {sidebarOpened && <SidebarToggle toggle={sidebarToggle} />}
          <Title size={"h3"}>{panel}</Title>
        </Group>
        {isConnected && <WalletButton />}
      </Group>
    </Group>
  )
}

export default Header;