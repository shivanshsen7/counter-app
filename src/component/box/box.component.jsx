import { Component } from "react";
import randomColor from "randomcolor";
import { ReactComponent as AddLogo } from "../../icons/add.svg";
import { ReactComponent as RefreshLogo } from "../../icons/refresh.svg";
import { ReactComponent as SubLogo } from "../../icons/substract.svg";
import "./box.style.css";

class Box extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 3,
      color: "#f9e0ae",
    };
  }

  changeBackgroundColor = (reset = false) => {
    const boxElement = document.getElementById("box");
    const color = reset ? "#ffffff" : randomColor();
    boxElement.style.backgroundColor = color;
    this.setState({ color });
  };

  addCount = () => {
    const count = this.state.count + 1;
    this.setState({ count });
    this.changeBackgroundColor();
  };
  resetCount = () => {
    const count = 0;
    this.setState({ count });
    this.changeBackgroundColor(true);
  };
  subCount = () => {
    let { count } = this.state;
    count = count ? count - 1 : 0;
    this.setState({ count });
    const white = count ? false : true;
    this.changeBackgroundColor(white);
  };

  render() {
    return (
      <div id='box' className='box'>
        <div className='count'>{this.state.count}</div>
        <div className='controls'>
          <AddLogo className='control-logo' onClick={this.addCount} />
          <RefreshLogo className='control-logo' onClick={this.resetCount} />
          <SubLogo className='control-logo' onClick={this.subCount} />
        </div>
      </div>
    );
  }
}
export default Box;
