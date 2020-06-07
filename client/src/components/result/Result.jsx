import React, {Component} from 'react';

export default class Result extends Component {


    render() {  
        let results;
        if (this.props.response !== '') {
            results = this.props.response.data.map(user => {
                if (user.login.includes(this.props.searchTerm)) {
                    return(
                        <div key={user.id}
                            style={{display: this.props.display, 
                                    borderBottom: '1px solid gainsboro',
                                    padding: '10px'
                                    }}>
                            <a href={user.html_url} 
                                    target='_blank'>
                                {user.login}
                            </a>
                        </div>)
                }
            })
        }
        
        return(
            <div className='justify-content-center' 
                style={{border:"1px solid grey", 
                        width:'80%', 
                        margin:'0 auto'}}>
                {results}
            </div>
        )
    }
}