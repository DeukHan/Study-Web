
import {Component} from 'react';
import './App.css';
import TOC from  './Components/TOC'
import ReadContent from './Components/ReadContent';
import CreateContent from './Components/CreateContent';
import UpdateContent from './Components/UpdateContent';
import Subject from './Components/Subject';
import Control from './Components/Control';


//function App() {
  class App extends Component {
    constructor(props){
      super(props);
      this.max_content_id = 3;
      this.state={
        mode:'welcome',
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
    GetReadContent(){
      var i =0;
      while(i < this.state.contents.length){
        var data = this.state.contents[i];
        if(data.id === this.state.selected_content_id) {
          return data;
        }
        i = i + 1;
      }
    }
    GetContent(){
      var _title, _desc, _article = null;
      if(this.state.mode === 'welcome'){
        _title  = this.state.welcome.title;
        _desc  = this.state.welcome.desc;
        _article = <ReadContent title={_title} desc={_desc}></ReadContent>
      }else if (this.state.mode === 'read'){
        var _content = this.GetReadContent();
        _article = <ReadContent title={_content.title} desc={_content.desc}></ReadContent>
      }
      else if (this.state.mode ==='create') {
        _article = <CreateContent onSubmit={function(_title, _desc){
          // add content to this.state.content
          this.max_content_id = this.max_content_id + 1;
          var _contents = Array.from(this.state.contents);
          _contents.push({id:this.max_content_id, title:_title, desc:_desc});

          // var _contents = this.state.contents.concat(
          //   {id:this.max_content_id, title:_title, desc:_desc}
          // )
          this.setState({
            contents:_contents,
            mode:'read',
            selected_content_id:this.max_content_id
          });
        }.bind(this)}></CreateContent>
      }
      else if (this.state.mode ==='update') {
        _content = this.GetReadContent();
        _article = <UpdateContent data = {_content} onSubmit={
          function(_id, _title, _desc){
            var _contents = Array.from(this.state.contents);
            var i = 0;
            while (i < _contents.length) {
              if (_contents[i].id === _id) {
                _contents[i] = {id:_id, title:_title, desc:_desc};
                break;
              }
              i = i + 1;
            }
            this.setState({
            contents:_contents,
            mode:'read'
          });
        }.bind(this)}></UpdateContent>
      }
      return _article;
    }

    render() {
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
          <Control onChangeMode={function(_mode){
            if (_mode === 'delete') {
              if (window.confirm('really?')) {
                var _contents = Array.from(this.state.contents);
                var i = 0;
                while (i < this.state.contents.length) {
                  if (_contents[i].id === this.state.selected_content_id) {
                    _contents.splice(i, 1);
                    break;
                  }
                  i = i + 1;
                }
                this.setState({
                  mode:'welcome',
                  contents:_contents
                });
                alert('deleted!');
              }
            } else {
              this.setState({
                mode:_mode
              });
            }
          }.bind(this)}></Control>
          {this.GetContent()}
        </div>
      );
    }
  }
  
  export default App;