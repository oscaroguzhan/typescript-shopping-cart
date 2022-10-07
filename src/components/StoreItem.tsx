import { Card } from "react-bootstrap";

type storeItemProps = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
};
const StoreItem = ({ id, name, price, imageUrl }: storeItemProps) => {
  return (
    <>
      <Card>
        <Card.Img
          variant="top"
          src={imageUrl}
          height="200px"
          style={{ objectFit: "cover", alignItems: "center" }}
        />
        <Card.Body className="d-flex flex-column ">
          <Card.Title className="d-flex justify-content-between mb-4 align-items-baseline">
            <span>{name}</span>
            <span>{price}</span>
          </Card.Title>
        </Card.Body>
      </Card>
    </>
  );
};

export default StoreItem;
