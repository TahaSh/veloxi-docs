import { persistentAtom } from '@nanostores/persistent'

type APIStyle = 'functions' | 'classes'

export const apiStyle = persistentAtom<APIStyle>(
  'veloxiDocsApiStyle',
  'functions'
)
