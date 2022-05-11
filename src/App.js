
import {Component} from 'react';
import './App.css';
import TOC from  './Components/TOC'
import Content from './Components/Content';
import Subject from './Components/Subject';
import { buildQueries } from '@testing-library/react';


//function App() {
  class App extends Component {
    constructor(props){
      super(props);
      this.state={
        mode:'welcome',
        Subject:{title:'WEB',sub:'World Wid Web!'},
        welcome:{title:'Welcome', desc:'Hello, React!!'},
        contents:[
          {id:1,title:'HTML',desc:'HTML is information'},
          {id:2,title:'Css',desc:'Css is for design'},
          {id:3,title:'JavaScript',desc:'JavaScript is for interactivs'}
        ]
      }
    }
    render() {
      var _title, _desc = null;
      if(this.state.mode === 'welcome'){
        _title  = this.state.welcome.title;
        _desc  = this.state.welcome.desc;
      }else if (this.state.mode === 'read'){
        _title = this.state.contents[0].title;
        _desc = this.state.contents[0].desc;
      }
      return (
        <div className="App">
          {/*<Subject 
          title={this.state.Subject.title} 
          sub={this.state.Subject.sub}>
          </Subject>*/}
          <header>
            <h1><a href="/"onClick={function(e){
              console.log(e);
              e.preventDefault()
              this.state.mode = 'welcome';
              this.setState({
                mode:'welcome'
              });
            }.bind(this)}>{this.state.Subject.title}</a></h1>
            {this.state.Subject.sub}
          </header>
          <TOC data={this.state.contents}></TOC>
          <Content title={_title} desc={_desc}></Content>
        </div>
      );
    }
  }
  
  export default App;