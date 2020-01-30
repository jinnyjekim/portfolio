import React from 'react';
import axios from 'axios';
import Projects from './Projects';
import Header from './Header';
import Footer from './Footer';
import './App.css';

class App extends React.Component{
  state = {
    isLoading: true,
    projects: []
  };
  getmovies = async () => {
    const {
      data:{
        data: {movies:projects} //디스트럭쳐링
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    console.log(projects);
    this.setState({projects, isLoading:false})
  }
  componentDidMount(){
    this.getmovies();
  }
  render() {
    const {isLoading,projects}=this.state;
    return (
      <>
        <Header/>
        <section className="portfolio">
          <h2>Project list</h2>
          <ul className="list">
            {isLoading ? (
              <div className="loader">
                <span className="loader-text">Loading...</span>
              </div>
              ) : (
                  projects.map(project => (
                    <Projects key={project.id} year={project.year} title={project.title} summary={project.summary} thumbnail={project.medium_cover_image} />
                  ))
              )}
          </ul>
        </section>
      <Footer/>
      </>
    )
  }
}

//https://yts-proxy.now.sh/list_movies.json
//https://yts-proxy.now.sh/movies_detail.json

export default App;
