import { ActionButtonsRow, Content, DraggableTopBar, RootLayout, Sidebar } from '@/components'
import { Board } from './components/Board/Board'

const App = () => {
  return (
    <>
      <DraggableTopBar />
      <RootLayout>
        <Sidebar className="p-2">
          <ActionButtonsRow className="flex justify-between mt-1" />
        </Sidebar>
        <Content className="flex justify-center border-l bg-zinc-900/50 border-l-white/20 h-screen">
          <Board />
        </Content>
      </RootLayout>
    </>
  )
}
export default App
