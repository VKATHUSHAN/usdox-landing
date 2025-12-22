import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { mainnet } from 'wagmi/chains';

export const config = getDefaultConfig({
  appName: 'TheUSDOX',
  projectId: 'YOUR_WALLETCONNECT_PROJECT_ID',
  chains: [mainnet],
  ssr: true,
});
