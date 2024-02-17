const MainMenu = ({ image, children }) => {
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="flex w-full h-full bg-gray-800">
          <div className="w-full h-full flex items-center justify-center">
            <img src={image} alt="logo" />
          </div>
          <div className="w-full h-full flex items-center justify-center">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default MainMenu;
