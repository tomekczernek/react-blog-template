import { useParams, Link } from "react-router-dom";

function Article() {
  const params = useParams();
  console.log(params);
  const ID = params.id;
  const articleData = {id: 1, title: 'Test artykułu.', shortText: 'Lorem ipsum', text:'lorem ipsum', createDate: '10-08-2020 15:18', avatar: 'urlToFile'};
  return (
    <div>
      <p>Jestem artykół o ID {ID}</p>
      <h1>{articleData.title}</h1>
      <Link to="/blog">Go back</Link>
    </div>
  );
}

export default Article;
