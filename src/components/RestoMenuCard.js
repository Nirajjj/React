import IMG_URL from "../utils/img";

const RestoMenuCard = ({ resInfocard }) => {
  const { name, price, imageId } = resInfocard?.card?.info;
  return (
    <div className="grid grid-cols-2 grid-rows-1 bg-gray-200 w-[50vw] h-[150px] content-center justify-itme-center rounded-lg">
      <img
        src={IMG_URL + imageId}
        className="w-[11vw] rounded-md row-span-2 self-center justify-self-center"
      />
      <div>
        <h2 className="font-bold">{name}</h2>
        <h4>Rs.{price / 100}</h4>
      </div>
    </div>
  );
};

export default RestoMenuCard;
