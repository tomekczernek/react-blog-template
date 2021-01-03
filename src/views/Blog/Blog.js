import {Link} from 'react-router-dom';
import {ArticleDraft, ArticleContainer} from '../../components/Articles';

import './styles.css';

function Blog() {

    const articlesList = [
        {id: 1, title: 'Test artykułu.', shortText: 'Lorem ipsum', createDate: '10-08-2020 15:18', avatar: 'urlToFile'},
        {id: 2, title: 'Test artykułu.', shortText: 'Lorem ipsum', createDate: '10-08-2020 15:18', avatar: 'urlToFile'},
        {id: 3, title: 'Test artykułu.', shortText: 'Lorem ipsum', createDate: '10-08-2020 15:18', avatar: 'urlToFile'},
        {id: 4, title: 'Test artykułu.', shortText: 'Lorem ipsum', createDate: '10-08-2020 15:18', avatar: 'urlToFile'}
    ];
    
    return (
        <div>
        <ArticleContainer>
            {articlesList.map((item) => (
                <Link className="article-link" key={item.id} to={`blog/article/${item.id}`} >
                    <ArticleDraft id={item.id} title={item.title} shortText={item.shortText} createDate={item.createDate} avatar={item.avatar}/>
                </Link>
            ))}
        </ArticleContainer>
        </div>
    );
  }
  
  export default Blog;