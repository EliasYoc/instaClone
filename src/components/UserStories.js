import "./UserStories.css";
const UserStories = () => {
  return (
    <article className="avatar">
      <div className="avatar__squircle storie-background">
        <div
          style={{ backgroundImage: "url(https://placeimg.com/640/480/any)" }}
          className="avatar__squircle storie-image"
        ></div>
      </div>
      <h6 className="avatar__name">Username</h6>
    </article>
  );
};

export default UserStories;
