import { useAlchemy } from "@/contexts";
import { useQuery } from "@tanstack/react-query";
import contract from "../../../artifacts/contracts/Provify.sol/Provify.json";
import { Contract } from "alchemy-sdk";
import { useWeb3ModalAccount } from "@web3modal/ethers/react";
import envs from "@/envs";

const useProofs = (owner: string | undefined) => {
  const alchemy = useAlchemy();
  const { isConnected } = useWeb3ModalAccount();
  const { CONTRACT_ADDRESS } = envs;

  const { data: proofs, isSuccess, isFetching, isError } = useQuery({
    queryKey: ["proofs", CONTRACT_ADDRESS],
    queryFn: async () => {
      if (owner === undefined) return [];

      const { ownedNfts } = await alchemy.nft.getNftsForOwner(owner);

      const provifyOwnedNfts = ownedNfts.filter(nft => nft.contract.address === CONTRACT_ADDRESS);

      const alchemyProvider = await alchemy.config.getProvider();

      const provifyContract = new Contract(
        CONTRACT_ADDRESS,
        contract.abi,
        alchemyProvider
      )

      const proofs = [];
      for (const nft of provifyOwnedNfts) {
        const proof = await provifyContract.proofs(nft.tokenId);

        proofs.push({
          id: nft.tokenId,
          name: proof[0],
          description: proof[1],
          timestamp: new Date(Number(proof[3])).toLocaleDateString()
        });
      }

      return proofs;
    },
    enabled: isConnected
  });

  return { proofs, isSuccess, isFetching, isError };
}

export default useProofs;