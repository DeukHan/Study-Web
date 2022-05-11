import {Component} from 'react';

class TOC extends Component {
  render() {
      var list = [];
      var data = this.props.data;
      var i = 0;
      while (i < data.length) {
    //아래부분에서 key를 입력하지 않으면 js Error가 발생할 수 있다.
          list.push(<li key={data[i].id}><a href={"/content/" + data[i].id}>{data[i].title}</a></li>);
          i = i + 1;
      }
      return (
          <nav>
              <ul>
                  {list}
              </ul>
          </nav>
      );
  }
}

export default TOC;