import { Content, Header, RootLayout, Sidebar } from './components'
import { Menu } from './components/Menu'
import { menuItems } from './store/mocks'
import { CarouselPage } from './pages/CarouselPage'
import { Navigate, Route, Routes } from 'react-router-dom'
import { MainMenu } from './components/MainMenu'

const App = () => {
  return (
    <>
      <Header></Header>
      <RootLayout>
        <Content className="border-l bg-zinc-900/50 border-l-white/20">
          <Routes>
            <Route path="/" element={<MainMenu />} />
            <Route
              path="learn"
              element={<Menu title={`Fundamentos del Ajedrez`} menuItems={menuItems} />}
            />
            <Route path="teach/:lesson" element={<CarouselPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Content>
      </RootLayout>
    </>
  )
}
export default App

// <Menu title={`Fundamentos del Ajedrez`} menuItems={menuItems} />
// <Sidebar
//   className={`bg-white dark:bg-gray-800 ${showSidebar ? 'translate-x-0' : '-translate-x-full'}`}
// >
//   <SiderbarButton showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
// </Sidebar>
