import { Navigate, Route, Routes } from 'react-router-dom'
import { Content, Header, RootLayout } from './components'
import { ExitButton } from './components/Button/ExitButton'
import { MainMenu } from './components/Menu/MainMenu'
import { Menu } from './components/Menu/Menu'
import { CarouselPage } from './pages/CarouselPage'
import Game from './pages/Game'
import { menuItems } from './store/mocks'
import { menuTutorial } from './store/mocks/tutorial'

const App = () => {
  return (
    <>
      <Header></Header>
      <RootLayout>
        <Content className="border-l bg-violet-300/10 border-l-black/20">
          <Routes>
            
            <Route path="/" element={<MainMenu />} />
            <Route path="play" element={<Game />} />
            <Route
              path="learn"
              element={<Menu title={`FUNDAMENTOS DE AJEDREZ`} menuItems={menuItems} />}
            />
            <Route
              path="exercises" 
              element={<Menu title={`TUTORIAL DE EJERCICIOS`} menuItems={menuTutorial}/> }
            />
            <Route
              path="practice" 
              element={<Menu title={`PRACTICA LO APRENDIDO`} menuItems={menuTutorial}/> }
            />
            <Route path="teach/:lesson" element={<CarouselPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Content>
        <ExitButton className="mb-4 absolute top-7 left-20" size={17} />
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
