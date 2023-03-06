import { GistContent } from '@/components/GistContent'

export const metadata = {
  title: 'VSCode Extensions',
}

export default async function Settings() {
  return (
    <GistContent gistUrl="https://gist.githubusercontent.com/LuisCarlosDev/a5a74525b8ee972db75ff0c1d0a96618/raw/6b8e5a0fb6a9a4eda248bf64f982b00e9d0d9dda/settings.json" />
  )
}
