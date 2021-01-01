function ShortArticle({id, title, shortText, createDate, avatar }) {
  return (
      <div>
          <img src={avatar}/>
          <h3>{title}</h3>
          <p>{shortText}</p>
          <p>{createDate}</p>
      </div>
  );
}
export default ShortArticle;