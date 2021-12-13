import "./CommentsCard.css";
const CommentsCard = () => {
  return (
    <div className="comments">
      <div className="comments__user">
        <h5 className="comments__username">User</h5>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
          voluptatem?
        </p>
      </div>
      <div className="comments__user">
        <h5 className="comments__username">Elias Yoc</h5>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
          voluptatem?
        </p>
      </div>
    </div>
  );
};

export default CommentsCard;
