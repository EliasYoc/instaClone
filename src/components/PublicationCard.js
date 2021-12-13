import BodyCard from "./BodyCard";
import CommentsCard from "./CommentsCard";
import HeaderCard from "./HeaderCard";
import "./PublicationCard.css";
const PublicationCard = ({ img }) => {
  return (
    <section className="card">
      <HeaderCard />
      <BodyCard img={img} />
      <CommentsCard />
    </section>
  );
};

export default PublicationCard;
