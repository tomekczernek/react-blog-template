import {useParams, Link} from "react-router-dom";
import {useEffect, useState} from 'react';
import {ArticleBody} from '../../components/Articles';

import {Loading} from '../../components/Utils';

import api from '../../api';

function Article() {
  const params = useParams();
  const [article, setArticle] = useState({});
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    api.get(`read_one.php?id=${params.id}`).then((response) => {
      setArticle(response.data);
      setLoading(false);
    });
  },[params.id]);

  const showLoading = () =>{
    if(isLoading){
        return <Loading message="Jeszcze chwilkę..."/>;
    }
    else{
        return null;
    }
};
  
  return (
    <div>
      {showLoading()}
      <ArticleBody id={article.id} title={article.title} shortText={article.shortText} text={article.text} createDate={article.createDate} ></ArticleBody>
      <Link to="/blog">Go back</Link>
    </div>
  );
}

export default Article;
