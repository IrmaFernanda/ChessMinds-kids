import { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { Content, Header, RootLayout } from './components'
import { BackButton } from './components/Button/BackButton'
import { ExitButton } from './components/Button/ExitButton'
import { ExercisesMenu } from './components/Menu'
import { MainMenu } from './components/Menu/MainMenu'
import { Menu } from './components/Menu/Menu'
import { CarouselPage } from './pages/CarouselPage'
import Game from './pages/Game'
import { GameProvider } from './context/GameProvider'
import { SnackbarProvider } from 'notistack'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

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
        </Header>
        <Content className="border-l bg-violet-300/10 border-l-black/20">
          <Routes>
            <Route path=":menu" element={<Menu />}></Route>
            <Route path="carousel/:lesson" element={<CarouselPage />} />
            <Route path="submenu/:type" element={<ExercisesMenu />} />
            <Route
              path="play/:exerciseId"
              element={
                <SnackbarProvider>
                  <GameProvider>
                    <DndProvider backend={HTML5Backend}>
                      <Game />
                    </DndProvider>
                  </GameProvider>
                </SnackbarProvider>
              }
            />
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
