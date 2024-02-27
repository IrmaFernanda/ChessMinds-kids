import { useState } from 'react'
import { Content, Header, RootLayout, Sidebar } from './components'
import { MainMenu } from './components/MainMenu'
import { SiderbarButton } from './components/SiderbarButton'

const App = () => {
  const [showSidebar, setShowSidebar] = useState(true)

  return (
    <>
      <Header></Header>
      <RootLayout>
        <Sidebar
          className={`bg-white dark:bg-gray-800 ${showSidebar ? 'translate-x-0' : '-translate-x-full'}`}
        >
          <SiderbarButton showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        </Sidebar>
        <Content className="border-l bg-zinc-900/50 border-l-white/20">
          <MainMenu />
        </Content>
      </RootLayout>
    </>
  )
}
export default App

// <Menu title={`Fundamentos del Ajedrez`} menuItems={menuItems} />
