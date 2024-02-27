import { twMerge } from 'tailwind-merge'

type SidebarButtonType = { showSidebar: boolean; setShowSidebar: (showSidebar: boolean) => void }

export const SiderbarButton = ({ showSidebar, setShowSidebar }: SidebarButtonType) => {
  return (
    <>
      <button
        className={twMerge(
          'cursor-pointer text-gray-500 w-10 h-10 focus:outline-none bg-white duration-1000',
          showSidebar ? 'translate-x-48' : 'absolute'
        )}
        onClick={() => setShowSidebar(!showSidebar)}
      >
        <div
          className={
            'block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'
          }
        >
          <span
            aria-hidden="true"
            className={twMerge(
              'block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out',
              showSidebar ? 'rotate-45' : '-translate-y-1.5'
            )}
          ></span>
          <span
            aria-hidden="true"
            className={twMerge(
              'block absolute  h-0.5 w-5 bg-current transform transition duration-500 ease-in-out',
              showSidebar ? 'opacity-0' : ''
            )}
          ></span>
          <span
            aria-hidden="true"
            className={twMerge(
              'block absolute  h-0.5 w-5 bg-current transform  transition duration-500 ease-in-out',
              showSidebar ? '-rotate-45' : 'translate-y-1.5'
            )}
          ></span>
        </div>
      </button>
    </>
  )
}
