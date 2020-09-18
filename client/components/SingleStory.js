import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStory } from '../store/story';

class Story extends Component{
  componentDidMount(){
    this.props.load(this.props.match.params.id);
  }
  render(){
    const { story } = this.props;
    if(!story.id){
      return '....loading';
    }
    return (
      <div>
        <h1>{ story.title }</h1>
        <ul>
          {
            story.comments.map( comment => {
              return (
                <li key={ comment.id }>{ comment.content }</li>
              );
            })
          }
        </ul>
      </div>
    );
  }
}

export default connect(
  ({ story })=> {
    return {
      story
    };
  },
  (dispatch)=> {
    return {
      load: (id)=> {
        return dispatch(fetchStory(id));
      }
    };
  },
)(Story);
