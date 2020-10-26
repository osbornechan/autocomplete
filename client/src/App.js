import React, {Component} from 'react';
import Autocomplete from './components/autocomplete/Autocomplete';

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            url: "http://127.0.0.1:8000/users",
            response: "",
            searchTerm: ""
        }
    }

    callApi() {
        let url = this.state.url;

        fetch(url)
            .then((response) =>
                response.json())
            .then(data => {
                this.setState({
                    response: data
                })
            }).catch((error) => {
                console.log(error)
            })
    }

    componentDidMount() {
       this.callApi();
    }

    setSearch(input) {
        this.setState({
            searchTerm: input
        })

        const url = 'http://localhost:8000/users?q=' + input

        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        } 

        fetch(url, requestOptions)
            .then((response) =>
                response.json())
            .then(data => {
                console.log('data', data)
                this.setState({
                    response: data
                })
            }).catch((error) => {
                console.log(error)
            })
    }

    render() {
        return(
            <div className='container'>
                <br/>
                <h2 className='text-center'>GitHub Search</h2>
                <br/>
                <Autocomplete
                    setSearch={(event)=>{this.setSearch(event)}} 
                    searchTerm={this.state.searchTerm}
                    response={this.state.response} />
            </div>)
    }
}