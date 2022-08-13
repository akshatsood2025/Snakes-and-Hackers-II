const categories = [
"Dog breeds",
"Science fiction movies",
"Musicals",
"Mountains",
"Things with tails",
"Items you take to the gym",
"Things you can study at university",
"Reptiles/Amphibians",
"Mythological creatures",
"Beverages",
"Things you need for school",
"Capital cities",
"Singers",
"Clothing brands",
"Fruits"];


const alphabets = [
"A",
"B",
"C",
"D",
"E",
"F",
"G",
"H",
"I",
"J",
"K",
"L",
"M",
"N",
"O",
"P",
"Q",
"R",
"S",
"T",
"U",
"V",
"W",
"X",
"Y",
"Z"];


function isRight(word) {
  // Cohere
  return true;
}

function getRandomCategories(num) {
  const random = [...categories].sort(() => 0.5 - Math.random());
  return random.slice(0, num);
}

function getScores(alphabet, list1, list2) {
  let score1 = 0;
  let score2 = 0;
  for (let i = 0; i < 12; i++) {
    let word1 = list1[i];
    let word2 = list2[i];

    if (
    word1 !== "" &&
    isRelevant(word1) &&
    word1 !== word2 &&
    word1[0] === alphabet)
    {
      score1++;
    } else if (
    word2 !== "" &&
    isRelevant(word2) &&
    word1 !== word2 &&
    word2[0] === alphabet)
    {
      score2++;
    }

    return [score1, score2];
  }
}

class Presentational extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player11: "",
      player12: "",
      player13: "",
      player14: "",
      player15: "",
      player16: "",
      player17: "",
      player18: "",
      player19: "",
      player110: "",
      player111: "",
      player112: "",
      player21: "",
      player22: "",
      player23: "",
      player24: "",
      player25: "",
      player26: "",
      player27: "",
      player28: "",
      player29: "",
      player210: "",
      player211: "",
      player212: "" };


    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick() {
    if (this.props.turn === 1) {
      console.log(this.props.update);
      this.props.update([
      this.state.player11,
      this.state.player12,
      this.state.player13,
      this.state.player14,
      this.state.player15,
      this.state.player16,
      this.state.player17,
      this.state.player18,
      this.state.player19,
      this.state.player110,
      this.state.player111,
      this.state.player112]);

      console.log("handleclick");
    } else if (this.props.turn === 2) {
      this.props.update([
      this.state.player11,
      this.state.player12,
      this.state.player13,
      this.state.player14,
      this.state.player15,
      this.state.player16,
      this.state.player17,
      this.state.player18,
      this.state.player19,
      this.state.player110,
      this.state.player111,
      this.state.player112]);

    }
    this.props.changeTurn();
  }

  handleChange(event) {
    let value = event.target.value;
    let id = event.target.id;
    let newState = { ...this.state };
    newState["player" + id] = value;
    this.setState(newState);
  }

  render() {
    if (this.props.turn === 1) {
      return /*#__PURE__*/(
        React.createElement("div", { className: "container" }, /*#__PURE__*/
        React.createElement("div", { className: "row" }, /*#__PURE__*/
        React.createElement("div", { className: "col-8" }), /*#__PURE__*/
        React.createElement("div", { className: "col-1" })), /*#__PURE__*/

        React.createElement("div", { className: "row" }, /*#__PURE__*/
        React.createElement("div", { className: "col-5" }, /*#__PURE__*/
        React.createElement("h2", null, "List"), /*#__PURE__*/
        React.createElement("div", { className: "category" }, /*#__PURE__*/
        React.createElement("p", null, this.props.currentCategories[0]), /*#__PURE__*/
        React.createElement("input", {
          id: "11",
          type: "text",
          onChange: this.handleChange,
          value: this.state.player11 })), /*#__PURE__*/


        React.createElement("div", { className: "category" }, /*#__PURE__*/
        React.createElement("p", null, this.props.currentCategories[1]), /*#__PURE__*/
        React.createElement("input", {
          id: "12",
          type: "text",
          onChange: this.handleChange,
          value: this.state.player12 })), /*#__PURE__*/


        React.createElement("div", { className: "category" }, /*#__PURE__*/
        React.createElement("p", null, this.props.currentCategories[2]), /*#__PURE__*/
        React.createElement("input", {
          id: "13",
          type: "text",
          onChange: this.handleChange,
          value: this.state.player13 })), /*#__PURE__*/


        React.createElement("div", { className: "category" }, /*#__PURE__*/
        React.createElement("p", null, this.props.currentCategories[3]), /*#__PURE__*/
        React.createElement("input", {
          id: "14",
          type: "text",
          onChange: this.handleChange,
          value: this.state.player14 })), /*#__PURE__*/


        React.createElement("div", { className: "category" }, /*#__PURE__*/
        React.createElement("p", null, this.props.currentCategories[4]), /*#__PURE__*/
        React.createElement("input", {
          id: "15",
          type: "text",
          onChange: this.handleChange,
          value: this.state.player15 })), /*#__PURE__*/


        React.createElement("div", { className: "category" }, /*#__PURE__*/
        React.createElement("p", null, this.props.currentCategories[5]), /*#__PURE__*/
        React.createElement("input", {
          id: "16",
          type: "text",
          onChange: this.handleChange,
          value: this.state.player16 })), /*#__PURE__*/


        React.createElement("div", { className: "category" }, /*#__PURE__*/
        React.createElement("p", null, this.props.currentCategories[6]), /*#__PURE__*/
        React.createElement("input", {
          id: "17",
          type: "text",
          onChange: this.handleChange,
          value: this.state.player17 })), /*#__PURE__*/


        React.createElement("div", { className: "category" }, /*#__PURE__*/
        React.createElement("p", null, this.props.currentCategories[7]), /*#__PURE__*/
        React.createElement("input", {
          id: "18",
          type: "text",
          onChange: this.handleChange,
          value: this.state.player18 })), /*#__PURE__*/


        React.createElement("div", { className: "category" }, /*#__PURE__*/
        React.createElement("p", null, this.props.currentCategories[8]), /*#__PURE__*/
        React.createElement("input", {
          id: "19",
          type: "text",
          onChange: this.handleChange,
          value: this.state.player19 })), /*#__PURE__*/


        React.createElement("div", { className: "category" }, /*#__PURE__*/
        React.createElement("p", null, this.props.currentCategories[9]), /*#__PURE__*/
        React.createElement("input", {
          id: "110",
          type: "text",
          onChange: this.handleChange,
          value: this.state.player110 })), /*#__PURE__*/


        React.createElement("div", { className: "category" }, /*#__PURE__*/
        React.createElement("p", null, this.props.currentCategories[10]), /*#__PURE__*/
        React.createElement("input", {
          id: "111",
          type: "text",
          onChange: this.handleChange,
          value: this.state.player111 })), /*#__PURE__*/


        React.createElement("div", { className: "category" }, /*#__PURE__*/
        React.createElement("p", null, this.props.currentCategories[11]), /*#__PURE__*/
        React.createElement("input", {
          id: "112",
          type: "text",
          onChange: this.handleChange,
          value: this.state.player112 })), /*#__PURE__*/


        React.createElement("button", { onClick: this.handleClick }, "Submit")), /*#__PURE__*/

        React.createElement("div", { className: "col-5" }), /*#__PURE__*/
        React.createElement("div", { className: "col-1" }, /*#__PURE__*/
        React.createElement("div", { className: "alphabet" }, this.props.alphabet)))));




    } else if (this.props.turn === 2) {
      return /*#__PURE__*/(
        React.createElement("div", { className: "container" }, /*#__PURE__*/
        React.createElement("div", { className: "row" }, /*#__PURE__*/
        React.createElement("div", { className: "col-5" }), /*#__PURE__*/
        React.createElement("div", { className: "col-5" }, /*#__PURE__*/
        React.createElement("h2", null, "List"), /*#__PURE__*/
        React.createElement("div", { className: "category" }, /*#__PURE__*/
        React.createElement("p", null, this.props.currentCategories[0]), /*#__PURE__*/
        React.createElement("input", {
          id: "21",
          type: "text",
          onChange: this.handleChange,
          value: this.state.player21 })), /*#__PURE__*/


        React.createElement("div", { className: "category" }, /*#__PURE__*/
        React.createElement("p", null, this.props.currentCategories[1]), /*#__PURE__*/
        React.createElement("input", {
          id: "22",
          type: "text",
          onChange: this.handleChange,
          value: this.state.player22 })), /*#__PURE__*/


        React.createElement("div", { className: "category" }, /*#__PURE__*/
        React.createElement("p", null, this.props.currentCategories[2]), /*#__PURE__*/
        React.createElement("input", {
          id: "23",
          type: "text",
          onChange: this.handleChange,
          value: this.state.player23 })), /*#__PURE__*/


        React.createElement("div", { className: "category" }, /*#__PURE__*/
        React.createElement("p", null, this.props.currentCategories[3]), /*#__PURE__*/
        React.createElement("input", {
          id: "24",
          type: "text",
          onChange: this.handleChange,
          value: this.state.player24 })), /*#__PURE__*/


        React.createElement("div", { className: "category" }, /*#__PURE__*/
        React.createElement("p", null, this.props.currentCategories[4]), /*#__PURE__*/
        React.createElement("input", {
          id: "25",
          type: "text",
          onChange: this.handleChange,
          value: this.state.player25 })), /*#__PURE__*/


        React.createElement("div", { className: "category" }, /*#__PURE__*/
        React.createElement("p", null, this.props.currentCategories[5]), /*#__PURE__*/
        React.createElement("input", {
          id: "26",
          type: "text",
          onChange: this.handleChange,
          value: this.state.player26 })), /*#__PURE__*/


        React.createElement("div", { className: "category" }, /*#__PURE__*/
        React.createElement("p", null, this.props.currentCategories[6]), /*#__PURE__*/
        React.createElement("input", {
          id: "27",
          type: "text",
          onChange: this.handleChange,
          value: this.state.player27 })), /*#__PURE__*/


        React.createElement("div", { className: "category" }, /*#__PURE__*/
        React.createElement("p", null, this.props.currentCategories[7]), /*#__PURE__*/
        React.createElement("input", {
          id: "28",
          type: "text",
          onChange: this.handleChange,
          value: this.state.player28 })), /*#__PURE__*/


        React.createElement("div", { className: "category" }, /*#__PURE__*/
        React.createElement("p", null, this.props.currentCategories[8]), /*#__PURE__*/
        React.createElement("input", {
          id: "29",
          type: "text",
          onChange: this.handleChange,
          value: this.state.player29 })), /*#__PURE__*/


        React.createElement("div", { className: "category" }, /*#__PURE__*/
        React.createElement("p", null, this.props.currentCategories[9]), /*#__PURE__*/
        React.createElement("input", {
          id: "210",
          type: "text",
          onChange: this.handleChange,
          value: this.state.player210 })), /*#__PURE__*/


        React.createElement("div", { className: "category" }, /*#__PURE__*/
        React.createElement("p", null, this.props.currentCategories[10]), /*#__PURE__*/
        React.createElement("input", {
          id: "211",
          type: "text",
          onChange: this.handleChange,
          value: this.state.player211 })), /*#__PURE__*/


        React.createElement("div", { className: "category" }, /*#__PURE__*/
        React.createElement("p", null, this.props.currentCategories[11]), /*#__PURE__*/
        React.createElement("input", {
          id: "212",
          type: "text",
          onChange: this.handleChange,
          value: this.state.player212 })), /*#__PURE__*/


        React.createElement("button", { onClick: this.handleClick }, "Submit")), /*#__PURE__*/

        React.createElement("div", { className: "col-1" }, /*#__PURE__*/
        React.createElement("div", { className: "alphabet" }, this.props.alphabet)))));




    } else {
      return /*#__PURE__*/(
        React.createElement("div", { className: "container" }, /*#__PURE__*/
        React.createElement("div", { className: "row" }, /*#__PURE__*/
        React.createElement("div", { className: "col-5" }, /*#__PURE__*/
        React.createElement("h2", null, "List"), /*#__PURE__*/
        React.createElement("div", { className: "category" }, /*#__PURE__*/
        React.createElement("p", null, this.props.currentCategories[0]), /*#__PURE__*/
        React.createElement("div", null, this.props.player1[0])), /*#__PURE__*/

        React.createElement("div", { className: "category" }, /*#__PURE__*/
        React.createElement("p", null, this.props.currentCategories[1]), /*#__PURE__*/
        React.createElement("div", null, this.props.player1[1])), /*#__PURE__*/

        React.createElement("div", { className: "category" }, /*#__PURE__*/
        React.createElement("p", null, this.props.currentCategories[2]), /*#__PURE__*/
        React.createElement("div", null, this.props.player1[2])), /*#__PURE__*/

        React.createElement("div", { className: "category" }, /*#__PURE__*/
        React.createElement("p", null, this.props.currentCategories[3]), /*#__PURE__*/
        React.createElement("div", null, this.props.player1[3])), /*#__PURE__*/

        React.createElement("div", { className: "category" }, /*#__PURE__*/
        React.createElement("p", null, this.props.currentCategories[4]), /*#__PURE__*/
        React.createElement("div", null, this.props.player1[4])), /*#__PURE__*/

        React.createElement("div", { className: "category" }, /*#__PURE__*/
        React.createElement("p", null, this.props.currentCategories[5]), /*#__PURE__*/
        React.createElement("div", null, this.props.player1[5])), /*#__PURE__*/

        React.createElement("div", { className: "category" }, /*#__PURE__*/
        React.createElement("p", null, this.props.currentCategories[6]), /*#__PURE__*/
        React.createElement("div", null, this.props.player1[6])), /*#__PURE__*/

        React.createElement("div", { className: "category" }, /*#__PURE__*/
        React.createElement("p", null, this.props.currentCategories[7]), /*#__PURE__*/
        React.createElement("div", null, this.props.player1[7])), /*#__PURE__*/

        React.createElement("div", { className: "category" }, /*#__PURE__*/
        React.createElement("p", null, this.props.currentCategories[8]), /*#__PURE__*/
        React.createElement("div", null, this.props.player1[8])), /*#__PURE__*/

        React.createElement("div", { className: "category" }, /*#__PURE__*/
        React.createElement("p", null, this.props.currentCategories[9]), /*#__PURE__*/
        React.createElement("div", null, this.props.player1[9])), /*#__PURE__*/

        React.createElement("div", { className: "category" }, /*#__PURE__*/
        React.createElement("p", null, this.props.currentCategories[10]), /*#__PURE__*/
        React.createElement("div", null, this.props.player1[10])), /*#__PURE__*/

        React.createElement("div", { className: "category" }, /*#__PURE__*/
        React.createElement("p", null, this.props.currentCategories[11]), /*#__PURE__*/
        React.createElement("div", null, this.props.player1[11]))), /*#__PURE__*/


        React.createElement("div", { className: "col-5" }, /*#__PURE__*/
        React.createElement("h2", null, "List"), /*#__PURE__*/
        React.createElement("div", { className: "category" }, /*#__PURE__*/
        React.createElement("p", null, this.props.currentCategories[0]), /*#__PURE__*/
        React.createElement("div", null, this.props.player2[0])), /*#__PURE__*/

        React.createElement("div", { className: "category" }, /*#__PURE__*/
        React.createElement("p", null, this.props.currentCategories[1]), /*#__PURE__*/
        React.createElement("div", null, this.props.player2[1])), /*#__PURE__*/

        React.createElement("div", { className: "category" }, /*#__PURE__*/
        React.createElement("p", null, this.props.currentCategories[2]), /*#__PURE__*/
        React.createElement("div", null, this.props.player2[2])), /*#__PURE__*/

        React.createElement("div", { className: "category" }, /*#__PURE__*/
        React.createElement("p", null, this.props.currentCategories[3]), /*#__PURE__*/
        React.createElement("div", null, this.props.player2[3])), /*#__PURE__*/

        React.createElement("div", { className: "category" }, /*#__PURE__*/
        React.createElement("p", null, this.props.currentCategories[4]), /*#__PURE__*/
        React.createElement("div", null, this.props.player2[4])), /*#__PURE__*/

        React.createElement("div", { className: "category" }, /*#__PURE__*/
        React.createElement("p", null, this.props.currentCategories[5]), /*#__PURE__*/
        React.createElement("div", null, this.props.player2[5])), /*#__PURE__*/

        React.createElement("div", { className: "category" }, /*#__PURE__*/
        React.createElement("p", null, this.props.currentCategories[6]), /*#__PURE__*/
        React.createElement("div", null, this.props.player2[6])), /*#__PURE__*/

        React.createElement("div", { className: "category" }, /*#__PURE__*/
        React.createElement("p", null, this.props.currentCategories[7]), /*#__PURE__*/
        React.createElement("div", null, this.props.player2[7])), /*#__PURE__*/

        React.createElement("div", { className: "category" }, /*#__PURE__*/
        React.createElement("p", null, this.props.currentCategories[8]), /*#__PURE__*/
        React.createElement("div", null, this.props.player2[8])), /*#__PURE__*/

        React.createElement("div", { className: "category" }, /*#__PURE__*/
        React.createElement("p", null, this.props.currentCategories[9]), /*#__PURE__*/
        React.createElement("div", null, this.props.player2[9])), /*#__PURE__*/

        React.createElement("div", { className: "category" }, /*#__PURE__*/
        React.createElement("p", null, this.props.currentCategories[10]), /*#__PURE__*/
        React.createElement("div", null, this.props.player2[10])), /*#__PURE__*/

        React.createElement("div", { className: "category" }, /*#__PURE__*/
        React.createElement("p", null, this.props.currentCategories[11]), /*#__PURE__*/
        React.createElement("div", null, this.props.player2[11]))), /*#__PURE__*/


        React.createElement("div", { className: "col-1" }, /*#__PURE__*/
        React.createElement("div", { className: "alphabet" }, this.props.alphabet), /*#__PURE__*/
        React.createElement("div", { className: "score" }, /*#__PURE__*/
        React.createElement("p", null, "Scores"),
        this.props.score)))));





    }
  }}


const defaultState = {
  currentCategories: getRandomCategories(12),
  player1: [],
  player2: [],
  turn: 1,
  alphabet: alphabets[Math.floor(Math.random() * 25)] };


const CHANGE = "CHANGE";
const CHANGETURN = "CHANGETURN";
const UPDATE = "UPDATE";

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGETURN:
      let newState2 = {
        ...state };

      if (newState2.turn === 1) {
        newState2.turn = 2;
        return newState2;
      } else {
        newState2.turn = 3;
        return newState2;
      }
      break;
    case UPDATE:
      let newState3 = {
        ...state };

      if (newState3.turn === 1) {
        newState3.player1 = action.list;
      } else if (newState3.turn === 2) {
        newState3.player2 = action.list;
      }
      return newState3;
    default:
      return state;}

};

const change = (id, text) => {
  return { type: CHANGE, id: id, text: text };
};

const changeTurn = () => {
  return {
    type: CHANGETURN };

};

const update = list => {
  return {
    type: UPDATE,
    list: list };

};

const store = Redux.createStore(reducer);

const mapStateToProps = state => {
  return {
    currentCategories: state.currentCategories,
    player1: state.player1,
    player2: state.player2,
    turn: state.turn,
    alphabet: state.alphabet };

};

const mapDispatchToProps = dispatch => {
  return {
    change: function (id, text) {
      dispatch(change(id, text));
    },
    changeTurn: function () {
      dispatch(changeTurn());
    },
    update: function (list) {
      dispatch(update(list));
    } };

};

const connect = ReactRedux.connect;
const Provider = ReactRedux.Provider;

const Container = connect(mapStateToProps, mapDispatchToProps)(Presentational);

class AppWrap extends React.Component {
  render() {
    return /*#__PURE__*/(
      React.createElement(Provider, { store: store }, /*#__PURE__*/
      React.createElement(Container, null)));


  }}

ReactDOM.render( /*#__PURE__*/React.createElement(AppWrap, null), document.getElementById("title"));