import ListItem from "./ListItem";
import style from "./OrderList.module.css";



const mangaCategory = [
  {
    id: 1,
    name: "Naruto",
    des: "Naruto is a Japanese manga series written and illustrated by Masashi Kishimoto. ",
    price: "12.12",
  },
  {
    id: 2,
    name: "Bleach",
    des: "Bleach (stylized in all caps) is a Japanese anime television series",
    price: "12.31",
  },
  {
    id: 3,
    name: "One piece",
    des: "One Piece (stylized in all caps) is a Japanese manga series",
    price: "21.12",
  },
  {
    id: 4,
    name: "Gundam",
    des: "Gundam (Japanese: ガンダムシリーズ, Hepburn: Gandamu Shirīzu, lit. Gundam Series)",
    price: "21.21",
  },
];
const OrderList = () => {

  return (
    <ul className={style.orderlist}>
      {mangaCategory.map((item) => {
        return <ListItem key={item.id} {...item} />;
      })}
    </ul>
  );
};

export default OrderList;
