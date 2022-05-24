import "./App.css";
import Header from "./components/Header";
import Headline from "./components/Headline";
import CustomButton from "./components/Button";
import { connect } from "react-redux";
import { fetchData } from "./Redux/action";
import { Component } from "react";
import ListItem from "./components/ListItem";

const tempArr = [
  {
    fName: "Joe",
    lName: "Bloggs",
    email: "joebloggs@gmail.com",
    age: 23,
    onlineStatus: true,
  },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.fetchApiData = this.fetchApiData.bind(this);
  }

  fetchApiData() {
    this.props.fetchData();
  }

  render() {
    const buttonProps = {
      buttonText: "Get Posts",
      emitEvent: this.fetchApiData,
    };

    return (
      <div className="App">
        <Header />
        <section className="main">
          <Headline
            header="Posts"
            desc="Click the button to render posts!"
            tempArr={tempArr}
          />
          <CustomButton {...buttonProps} />
          {this.props.posts.length > 0 && (
            <div>
              {this.props.posts.map((post, index) => {
                const { title, body } = post;
                const listConfig = {
                  title,
                  desc: body,
                };

                return <ListItem key={index} {...listConfig} />;
              })}
            </div>
          )}
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

export default connect(mapStateToProps, { fetchData })(App);
