import React, { Component } from "react";
import { connect } from "react-redux";
import { BsQuestionSquareFill } from "react-icons/bs";
import { CgSleep } from "react-icons/cg";
import { RiShutDownLine, RiRestartLine } from "react-icons/ri";
import wallpapers from "../configs/wallpapers";
import user from "../configs/user";

class Login extends Component {
  keyPress = (e) => {
    const keyCode = e.which || e.keyCode;
    if (keyCode === 13) this.props.setLogin(true);
  };

  render() {
    return (
      <div
        className="w-screen h-screen login text-center"
        style={{
          background: `url(${
            this.props.dark ? wallpapers.night : wallpapers.day
          }) center/cover no-repeat`,
        }}
        onClick={() => this.props.setLogin(true)}
      >
        <div className="inline-block w-auto relative top-1/2 -mt-40">
          {/* Avatar */}
          <img
            className="rounded-full w-24 h-24 my-0 mx-auto"
            src={user.avatar}
            alt="img"
          />
          <div className="nightwind-prevent font-semibold text-xl mt-2 text-white">
            {user.name}
          </div>

          {/* Password Input */}
          <div className="nightwind-prevent mx-auto grid grid-cols-5 w-44 h-8 mt-4 rounded-md bg-gray-300 blur bg-opacity-50">
            <input
              className="nightwind-prevent text-sm col-start-1 col-span-4 outline-none focus:outline-none bg-transparent px-2 text-white"
              type="password"
              placeholder="Enter Password"
              onClick={(e) => e.stopPropagation()}
              onKeyPress={this.keyPress}
            />
            <div className="col-start-5 col-span-1 flex justify-center items-center">
              <BsQuestionSquareFill className="ml-1" color="white" />
            </div>
          </div>

          <div className="nightwind-prevent text-sm mt-2 text-gray-200">
            Click to enter
          </div>
        </div>

        {/* buttons */}
        <div className="nightwind-prevent-block text-sm fixed bottom-16 left-0 right-0 mx-auto flex flex-row space-x-4 w-max">
          <div
            className="flex flex-col items-center text-white w-24"
            onClick={this.props.sleepMac}
          >
            <div className="h-10 w-10 bg-gray-700 rounded-full inline-flex justify-center items-center">
              <CgSleep size={40} />
            </div>
            <span>Sleep</span>
          </div>
          <div
            className="flex flex-col items-center text-white w-24"
            onClick={this.props.restartMac}
          >
            <div className="h-10 w-10 bg-gray-700 rounded-full inline-flex justify-center items-center">
              <RiRestartLine size={36} />
            </div>
            <span>Restart</span>
          </div>
          <div
            className="flex flex-col items-center text-white w-24"
            onClick={this.props.shutMac}
          >
            <div className="h-10 w-10 bg-gray-700 rounded-full inline-flex justify-center items-center">
              <RiShutDownLine size={36} />
            </div>
            <span>Shut Down</span>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dark: state.dark,
  };
};

export default connect(mapStateToProps, null)(Login);
