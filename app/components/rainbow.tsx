'use client'
import '@rainbow-me/rainbowkit/styles.css';
import { 
  googleWallet,
  facebookWallet,
  githubWallet,
  discordWallet,
  twitchWallet,
  twitterWallet,
} from '@zerodevapp/wagmi/rainbowkit'
import { RainbowKitProvider, connectorsForWallets } from '@rainbow-me/rainbowkit'
import { createClient } from 'wagmi'
import { WagmiConfig } from 'wagmi'
import { configureChains } from 'wagmi'
import { polygonMumbai } from 'wagmi/chains'
import { publicProvider } from 'wagmi/providers/public'
import { ConnectButton } from '@rainbow-me/rainbowkit'
export default function RainbowKitExample() {
  const connectors = connectorsForWallets([
    {
      groupName: 'Social',
      wallets: [
        googleWallet({options: { projectId: '7c128cf6-b7da-4177-981a-9ed9954f493a' }}),
        facebookWallet({options: { projectId: '7c128cf6-b7da-4177-981a-9ed9954f493a' }}),
        githubWallet({options: { projectId: '7c128cf6-b7da-4177-981a-9ed9954f493a' }}),
        discordWallet({options: { projectId: '7c128cf6-b7da-4177-981a-9ed9954f493a' }}),
        twitchWallet({options: { projectId: '7c128cf6-b7da-4177-981a-9ed9954f493a' }}),
        twitterWallet({options: { projectId: '7c128cf6-b7da-4177-981a-9ed9954f493a' }})
      ],
    },
  ]);

  const { chains, provider, webSocketProvider } = configureChains(
    [polygonMumbai],
    [publicProvider()],
  )
  const client = createClient({
    autoConnect: false,
    connectors,
    provider,
    webSocketProvider,
  })

  return (
    <WagmiConfig client={client}>
        <RainbowKitProvider chains={chains} modalSize={'compact'}>
            <ConnectButton />
        </RainbowKitProvider>
    </WagmiConfig>
  )
}