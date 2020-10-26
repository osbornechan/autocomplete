import React, {Component} from 'react';
import Result from '../result/Result';

export default class Search extends Component {
    constructor() {
        super();
        this.state = {
            display: 'none'
        }
    }

    changeHandler(event) {
        this.props.setSearch(event.target.value)

        event.target.value != '' ? this.setState({display: 'block'}) : this.setState({display: 'none'})
    }

    render() {
        return(
            <div>
                <div className='row justify-content-center'>
                    <input
                        type='text'
                        placeholder='Enter search term'
                        onChange={(event)=> {this.changeHandler(event)}}
                        style={{width:"78%", 
                                border:'2px solid black',
                                padding:'5px',
                                marginBottom:'-25px'}}/>
                </div>
                <br/>
                <Result 
                    searchTerm={this.props.searchTerm}
                    response={this.props.response} 
                    display={this.state.display} />
            </div>
        )
    }
}