import { Content, DraggableTopBar, RootLayout, Sidebar } from './components'
import Game from './components/Game'

const App = () => {
  return (
    <>
      <DraggableTopBar />
      <RootLayout>
        <Content className="border-l bg-zinc-900/50 border-l-white/20">
          <Game />
        </Content>
      </RootLayout>
    </>
  )
}
export default App
