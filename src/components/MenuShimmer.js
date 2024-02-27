const MenuShimmer = () => {
  return (
    <div className="w-lvw h-[100%] flex flex-wrap justify-center gap-9 mt-10">
      {Array(12)
        .fill()
        .map((_, index) => (
          <div className="relative grid grid-cols-2 grid-rows-1 bg-gray-500 w-[50vw] h-[150px] content-center justify-itme-center rounded-lg">
            <div className="absolute shimmer-animation w-full "></div>
          </div>
        ))}
    </div>
  );
};

export default MenuShimmer;
