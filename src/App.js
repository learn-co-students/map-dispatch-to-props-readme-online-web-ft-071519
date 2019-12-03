import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addItem } from  './actions/items';

class App extends Component {

    handleOnClick() {
        // this.props.store.dispatch(addItem());
        // Instead of above, connect(mapDispatchToProps) let's us call addItem without reaching into store directly. 
        this.props.addItem();
    }

    render() {
        debugger
        return (
        <div className="App">
            <button onClick={(event) => this.handleOnClick(event)}>
            Click
            </button>
            <p>{this.props.items.length}</p>
        </div>
        );
        }
    };

    // // See connect line at the end to see how mapStateToProps was abstracted away with ES6 syntax.
    // const mapStateToProps = (state) => {
    // return {
    //     items: state.items
    //     };
    // };

    // Adding mapDispatchToProps takes the dispatch(addItem()) function and writes it the the key of "addItem". Props.addItem is equivalent to dispatch(addItem()).
    

    // const mapDispatchToProps = dispatch => {
    //     return {
    //         addItem: () => {
    //             dispatch(addItem())
    //         }
    //     };
    // };

    // // mapDispatchToProps is added to the argument list of connect.
    // export default connect(mapStateToProps, mapDispatchToProps)(App);
    // // The entire mapDispatchToProp function may be removed when passing in an object into "connect".
    // // Because we've imported the addItem function and , We can connect it directly to App below.
    // // This declares the key name to be "addItem" and it points to the value of a function called "addItem", { addItem: addItem }.
    
    // export default connect(mapStateToProps, { addItem })(App);
    export default connect(state => ({ items: state.items }), { addItem })(App);
    