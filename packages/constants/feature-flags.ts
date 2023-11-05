import { CORE_MEMBERS } from './verified'

export enum FEATURE_FLAGS {
  POST_WITH_SOURCE_URL = 'PostWithSource',
  PROFILE_NFTS = 'ProfileNfts',
  STREAMS = 'Streams'
}

type FeatureFlag = {
  flag: string
  enabledFor: string[]
}

export const featureFlags: FeatureFlag[] = [
  {
    flag: FEATURE_FLAGS.POST_WITH_SOURCE_URL,
    enabledFor: CORE_MEMBERS
  },
  {
    flag: FEATURE_FLAGS.PROFILE_NFTS,
    enabledFor: CORE_MEMBERS
  },
  {
    flag: FEATURE_FLAGS.STREAMS,
    enabledFor: CORE_MEMBERS
  }
]
