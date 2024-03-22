import './Articles.css'
import { ArticleBox, Section } from '../../components'
import ArticleData from './ArticleData'

const Articles = () => {
    const articles = ArticleData.map(article => <ArticleBox key={article.id} img={article.img} title={article.title} content={article.content} /> )
    return (
        <Section name="articles" title="Articles">
            {articles}
        </Section>
    )
}

export default Articles