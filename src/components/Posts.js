import React from 'react'
import Post from '/Users/charusrivastava/Desktop/factblog/src/components/Post.js'

const Posts = ({posts}) => {
    return (
        <div>
            {posts.map((article,index) => <Post article={article} key={index}/>)}
        </div>
    )
}

export default Posts;
