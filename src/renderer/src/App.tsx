import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { Content, Header, RootLayout } from './components'
import { ExitButton } from './components/Button/ExitButton'
import { MainMenu } from './components/Menu/MainMenu'
import { Menu } from './components/Menu/Menu'
import { CarouselPage } from './pages/CarouselPage'
import Game from './pages/Game'
import { BackButton } from './components/Button/BackButton'
import { useEffect } from 'react'

const App = () => {
  const location = useLocation()
  const currentPath = location.pathname

  useEffect(() => {}, [currentPath])

  const previousPath = location.state?.from?.pathname || '/'

  return (
    <>
      <RootLayout>
        <Header>
          {currentPath !== '/' && (
            <>
              <BackButton className="mb-4 absolute top-7 left-8" />
            </>
          )}
          <ExitButton className="mb-4 absolute top-7 right-20" size={17} />
        </Header>
        <Content className="border-l bg-violet-300/10 border-l-black/20">
          <Routes>
            <Route path="play" element={<Game />} />
            <Route path=":menu" element={<Menu />}></Route>
            <Route path="carousel/:topic" element={<CarouselPage />} />
            <Route path="" element={<MainMenu />} />
            <Route path="back" element={<Navigate to={previousPath} />} />
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
