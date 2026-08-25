// contracts.ts = alamat deployment workshop. ABI-nya kita tambahkan pas sesi.

export const EXPLORER = "https://testnet.bscscan.com";

export const CONTRACTS = {
  rewardToken: "0xadefe39b43673641e94ce99613c54266af2490e6",
  bountyFactory: "0xdbc26ef2765912bf0b77e4a4ce0395e91089c698",
} as const;

// Enum Status di BountyEscrow.sol — urutan harus sama persis
export const statusLabel = ["MenungguDana", "Dibuka", "Disubmit", "Selesai", "Dibatalkan"] as const;

export type Status = (typeof statusLabel)[number];
