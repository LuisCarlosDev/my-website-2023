import {
  Cog,
  Cpu,
  FileJson,
  Joystick,
  MoreHorizontal,
  Terminal,
} from 'lucide-react'
import { ReactNode } from 'react'
import { File } from './File'
import { Folder } from './Folder'
import { SubMenu } from './SubMenu'

export type FileType = {
  title: string
  icon: ReactNode
}

export const explorerFiles: Record<string, FileType> = {
  '/vscode/settings': {
    icon: <FileJson size={16} />,
    title: 'settings.json',
  },
  '/vscode/extensions': {
    icon: <FileJson size={16} />,
    title: 'extensions.json',
  },
  '/terminal/general': {
    icon: <Terminal size={16} />,
    title: 'General',
  },
  '/terminal/fish': { icon: <Cog size={16} />, title: 'config.fish' },
  '/others/dev-setup': { icon: <Cpu size={16} />, title: 'dev.setup' },
  '/others/gaming-setup': {
    icon: <Joystick size={16} />,
    title: 'gaming.setup',
  },
}

export function Explorer() {
  return (
    <div className="py-2 px-4 text-[#8F8CA8]">
      <strong className="font-medium text-xs pl-2 flex items-center justify-between">
        EXPLORER
        <MoreHorizontal size={16} strokeWidth={1.5} />
      </strong>

      <nav className="mt-4 flex flex-col">
        <SubMenu defaultOpen title="PORTFOLIO">
          <Folder defaultOpen title="Visual Studio Code">
            <File href="/settings">
              <FileJson size={16} />
              settings.json
            </File>
          </Folder>
        </SubMenu>
      </nav>
    </div>
  )
}
