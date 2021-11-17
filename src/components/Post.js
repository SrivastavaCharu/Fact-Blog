import React from 'react'
import { marked } from 'marked'

const Post = ({article}) => {
    console.log(article)
    const { name , image , answer } = article.fields;
    const postAns = marked(answer)
    return (
        <div className='post'>
            <h2 className='title'>{name}</h2>
            {image && <img className='featuredImage' src={image.fields.file.url} alt={name} title={name}/>}
            <section dangerouslySetInnerHTML={{__html: postAns}}/>

        </div>
    )
}


export default Post;
