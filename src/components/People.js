const Post = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        const { id, name, bday } = person;
        const seed = Math.round(Math.random() * 100);

        return (
          <div key={id} className={"post"}>
            <div className="avatar-wrapper">
              <img
                src={`https://avatars.dicebear.com/api/micah/${seed}.svg`}
                alt=""
                className="avatar"
              />
            </div>

            <div className="post-content">
              <p className="post-owner">{name}</p>
              <p className="post-text">{bday}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Post;
