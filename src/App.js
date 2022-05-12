
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
        mode:'read',
        selected_content_id:2,
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
        var i =0;
        while(i < this.state.contents.length){
          var data = this.state.contents[i];
          if(data.id === this.state.selected_content_id) {
            _title = data.title;
            _desc = data.desc;
            break;
          }
          i = i + 1;
        }
      }
      return (
        <div className="App">
          <Subject 
            title={this.state.Subject.title} 
            sub={this.state.Subject.sub}
            onChangePage={function(){
                this.setState({mode:'welcome'});
            }.bind(this)}
          >
          </Subject>
          <TOC onChangePage={function(id){
              this.setState({
                mode:'read',
                selected_content_id:Number(id)
              });
          }.bind(this)} 
          data={this.state.contents}></TOC>
          <Content title={_title} desc={_desc}></Content>
        </div>
      );
    }
  }
  
  export default App;