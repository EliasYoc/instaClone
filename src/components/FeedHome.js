import { useEffect, useState } from "react";
import "./FeedHome.css";
import PublicationCard from "./PublicationCard";
const publications = [
  { img: "https://placeimg.com/640/480/any" },
  { img: "https://placeimg.com/640/480/animals" },
  { img: "https://placeimg.com/640/480/architecture" },
  { img: "https://placeimg.com/640/480/grayscale" },
  { img: "https://placeimg.com/640/480/nature" },
  { img: "https://placeimg.com/640/480/people" },
];
const FeedHome = () => {
  const [state, setstate] = useState([]);
  useEffect(() => {
    setstate(publications);
  }, []);
  return (
    <main className="feed-home padding-feed">
      {state.map((publication, i) => (
        <PublicationCard key={i} img={publication.img} />
      ))}
    </main>
  );
};

export default FeedHome;
