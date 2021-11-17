import React from 'react';
import './App.css';
import { client } from '/Users/charusrivastava/Desktop/factblog/src/client.js';
import Posts from '/Users/charusrivastava/Desktop/factblog/src/components/Posts.js'

class App extends React.Component{
  state={
    articles: []
  }

  componentDidMount(){
    client.getEntries({content_type: 'facts'})
    .then((response)=>{
        console.log(response)
        this.setState({
          articles: response.items
        })
      })
      .catch(console.error)
  }
  render(){
    return (
      <div className="App">
        <div className='container'>
        
          <main>
            <div className='wrapper'>
              <Posts posts={this.state.articles}/>
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default App;
