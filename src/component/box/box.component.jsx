import { Component } from "react";
import randomColor from "randomcolor";
import { ReactComponent as AddLogo } from "../../icons/add.svg";
import { ReactComponent as RefreshLogo } from "../../icons/refresh.svg";
import { ReactComponent as SubLogo } from "../../icons/substract.svg";
import { ReactComponent as CopyLogo } from "../../icons/copy.svg";
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
    const color = reset
      ? "#ffffff"
      : randomColor({ luminosity: "light", hue: "blue" });
    boxElement.style.backgroundColor = color;
    boxElement.style.boxShadow =
      color === "#ffffff"
        ? `1px 1px 10px 2px #dadada`
        : `1px 1px 10px 2px ${color}`;

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

  copyToClipboard = () => {
    // console.log(event.target.value);
    const text = document.getElementById("counting");
    text.select();
    document.execCommand("copy");
  };

  render() {
    return (
      <div id='box' className='box'>
        <CopyLogo
          className='control-logo copy-logo'
          onClick={this.copyToClipboard}
        />
        <div className='count'>{this.state.count}</div>
        <div className='controls'>
          <AddLogo className='control-logo' onClick={this.addCount} />
          <RefreshLogo className='control-logo' onClick={this.resetCount} />
          <SubLogo className='control-logo' onClick={this.subCount} />
          <input
            type='text'
            value={JSON.stringify(this.state)}
            readOnly
            name='counting'
            id='counting'
          />
        </div>
      </div>
    );
  }
}
export default Box;
