import {Link} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {ArticleDraft, ArticleContainer} from '../../components/Articles';
import {Loading} from '../../components/Utils';

import api from '../../api';
import {objectToArray} from '../../utils';

import './styles.css';

function Blog() {

    const [articles, setArticles] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() =>{
        api.get(`read.php`).then((response) => {
            const articles = objectToArray(response.data);
            setArticles(articles);
            setLoading(false);
        });
    },[]);

    const showLoading = () =>{
        if(isLoading){
            return <Loading message="Jeszcze chwilkę..."/>;
        }
        else{
            return null;
        }
    };
    
    return (
        <ArticleContainer>
            {showLoading()}
            {articles.map((item) => (
                <Link className="article-link" key={item.id} to={`blog/article/${item.id}`} >
                    <ArticleDraft id={item.id} title={item.title} shortText={item.shortText} createDate={item.createDate} avatar={item.avatar}/>
                </Link>
            ))}
        </ArticleContainer>
    );
  }
  
  export default Blog;