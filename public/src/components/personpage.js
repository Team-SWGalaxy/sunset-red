import React, {Component} from "react";
import {Link} from 'react-router';
import Select from 'react-select';

export default class PersonPage extends Component {
  constructor() {
    super();
    this.state = {
      isWantToFindFriends: false
    }
  }

  findFriends() {
    this.setState({isWantToFindFriends: !this.state.isWantToFindFriends});
  }

  render() {
    return (
      <div>
        <Header />
        <Mainer isWantToFindFriends={this.state.isWantToFindFriends}
                findFriends={this.findFriends.bind(this)}/>
        <Footer />
      </div>
    )
  }
}

class Header extends Component {
  render() {
    return <div className="col-lg-12" id="headerOfPersonPage">
      <div className="col-lg-4">
        <div>
          <img className="img-circle" src="../../image/logo.jpg" id="logo"/>
        </div>
      </div>
      <div className="col-lg-8">
        <div className="col-lg-offset-9" id="welcome">
          <span>欢迎,Tom</span>&nbsp;&nbsp;
          <Link to="/">退出</Link>/
          <Link to="/">注销</Link>
        </div>
      </div>
    </div>
  }
}

class Mainer extends Component {
  render() {
    return <div>
      <Left findFriends={this.props.findFriends}/>
      <Right isWantToFindFriends={this.props.isWantToFindFriends} findFriends={this.props.findFriends}/>
    </div>
  }
}

class Left extends Component {
  toFindFriends() {
    this.props.findFriends();
  }

  render() {
    return <div className="col-lg-4">
      <div id="leftOfPersonPage">
        <div>
          <img src="../../image/top-picture.jpg" className="pictureOfPersonPage"/>
        </div>
        <div>
          <ul className="list-group">
            <li className="list-group-item"><a onClick={this.toFindFriends.bind(this)}> 推荐好友</a></li>
            <li className="list-group-item"><a>我的好友</a></li>
            <li className="list-group-item"><a>我的动态</a></li>
            <li className="list-group-item"><a>个人信息</a></li>
            <li className="list-group-item"><a>修改信息</a></li>
            <li className="list-group-item"><a>留言板</a></li>
          </ul>
        </div>
        <div>
          <img src="../../image/bottom-picture.jpg" className="pictureOfPersonPage"/>
        </div>
      </div>
    </div>
  }
}

class Right extends Component {
  render() {
    return <div className="col-lg-8">
      <div className={this.props.isWantToFindFriends ? '' : 'hidden'}>
        <OptionsToFind findFriends={this.props.findFriends}/>
      </div>
    </div>
  }
}

class Footer extends Component {
  render() {
    return <div className="col-lg-12" id="footerOfPersonPage">
      版权所有@sunset
    </div>
  }
}

class OptionsToFind extends Component {
  closeModal() {
    this.props.findFriends();
  }

  render() {
    return <div className="modal-dialog" id="optionsModal">
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal"
                  aria-hidden="true" onClick={this.closeModal.bind(this)}>×
          </button>
          <h4 className="modal-title" id="myModalLabel">
            请选择：
          </h4>
        </div>
        <div>
          <br/>
          <Hobbies/>
          <br/>
          <City />
          <br/>
          <AgeSegment/>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-default"
                  data-dismiss="modal">关闭
          </button>
          <button type="button" className="btn btn-primary">
            确定
          </button>
        </div>
      </div>
    </div>
  }
}

class Hobbies extends Component {
  constructor() {
    super();
    this.state =
    {
      disabled: false,
      options: [
        {label: '下棋', value: 'chess'},
        {label: '打太极', value: 'taiji'},
        {label: '打牌', value: 'cards'},
        {label: '跳广场舞', value: 'dance'},
      ],
      hobbies: [],
    }
  }

  render() {
    return <div className="input-group">
      <span className="input-group-addon">兴趣</span>
      <Select multi simpleValue disabled={this.state.disabled} value={this.state.hobbies}
              placeholder="Select your favourite(s)" options={this.state.options}
              onChange={this.setHobbies.bind(this)}/>
    </div>
  }

  setHobbies(hobbies) {
    this.setState({hobbies});
  }
}

class City extends Component {
  constructor() {
    super();
    this.state = {
      city: ''
    }
  }

  setCity(city) {
    this.setState({city});
  }

  render() {
    const options = [
      {label: '西安', city: 'basic'},
      {label: '北京', city: 'premium'},
      {label: '沈阳', city: 'pro'},
    ];
    return <div className="input-group">
      <span className="input-group-addon">城市</span>
      {this.props.label}
      <Select
        placeholder="Select your province"
        options={options}
        optionRenderer={this.renderOption}
        onChange={this.setCity.bind(this)}
        value={this.state.city}
      />
    </div>
  }
}

class AgeSegment extends Component {
  constructor() {
    super();
    this.state = {
      age: ''
    }
  }

  setAge(age) {
    this.setState({age});
  }

  render() {
    const options = [
      {label: '55~60', age: 'basic'},
      {label: '60~65', age: 'premium'},
      {label: '65~70', age: 'pro'}
    ];
    return <div className="input-group">
      <span className="input-group-addon">年龄段</span>
      {this.props.label}
      <Select
        placeholder="Select age range"
        options={options}
        optionRenderer={this.renderOption}
        onChange={this.setAge.bind(this)}
        value={this.state.age}
      />
    </div>
  }
}
