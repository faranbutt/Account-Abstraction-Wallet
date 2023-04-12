'use client'
import { getZeroDevSigner, getSocialWalletOwner } from '@zerodevapp/sdk'

import { 
  SocialWallet, 
  GoogleSocialWallet, 
  FacebookSocialWallet,
  GithubSocialWallet,
  DiscordSocialWallet,
  TwitchSocialWallet,
  TwitterSocialWallet
} from '@zerodevapp/social-wallet';
import { useMemo, useState } from 'react';

const socialWallet = new GoogleSocialWallet()
function EtherExample() {
    const [address, setAddress] = useState('')
    const [loading, setLoading] = useState(false)
  
    const socialWallet = useMemo(() => {
      return new SocialWallet()
    }, [])
    
    const createWallet = async () => {
      setLoading(true)
      const signer = await getZeroDevSigner({
        projectId: '7c128cf6-b7da-4177-981a-9ed9954f493a',
        owner: await getSocialWalletOwner('7c128cf6-b7da-4177-981a-9ed9954f493a', socialWallet)
      })
      setAddress(await signer.getAddress())
      setLoading(false)
    }
  
    const disconnect = async () => {
      await socialWallet.disconnect()
      setAddress('')
    }
  
    const connected = !!address
  
    return (
      <div>
        {connected && 
          <div>
            <label>Wallet: {address}</label>
          </div>
        }
        <div>
          {!connected && <button onClick={createWallet} disabled={loading}>{ loading ? 'loading...' : 'Create Wallet'}</button>}
          {connected && 
            <button onClick={disconnect} disabled={loading}>Disconnect</button>
          }
        </div>
      </div>
    )
  }

export default EtherExample;