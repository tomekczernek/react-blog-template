import {Link} from 'react-router-dom';
import ShortArticle from './ShortArticle';

function Blog() {

    const articlesList = [
        {id: 1, title: 'Test artykułu.', shortText: 'Lorem ipsum', createDate: '10-08-2020 15:18', avatar: 'urlToFile'},
        {id: 2, title: 'Test artykułu.', shortText: 'Lorem ipsum', createDate: '10-08-2020 15:18', avatar: 'urlToFile'},
        {id: 3, title: 'Test artykułu.', shortText: 'Lorem ipsum', createDate: '10-08-2020 15:18', avatar: 'urlToFile'},
        {id: 4, title: 'Test artykułu.', shortText: 'Lorem ipsum', createDate: '10-08-2020 15:18', avatar: 'urlToFile'}
    ];
    return (
        <div>
            <p>Hello from Blog.</p>
            <div>
                {articlesList.map((item) => (
                    <Link key={item.id} to={`blog/article/${item.id}`} >
                        <ShortArticle id={item.id} title={item.title} shortText={item.shortText} createDate={item.createDate} avatar={item.avatar}/>
                    </Link>
                    
                ))}
            </div>
        </div>
    );
  }
  
  export default Blog;