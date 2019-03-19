import React from "react"
import Timestamp from "./timestamp"
import axios from "axios"

class Stocks extends React.Component {

    state = {
        lastUpdated: "",
        stocks: []
    }

    componentDidMount() {
        this.fetchStocks()
      }

      render() {
            return (
                    <div>
                        <h2 style={{textAlign: 'center'}}>My stock portfolio</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Today</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.stocks.map(( stock => 
                                    <tr key={stock.name}>
                                        <td><a href={stock.url} target='_blank' rel='noopener noreferrer' style={{cursor: 'pointer'}}>{stock.name}</a></td>
                                        <td>{stock.price} kr</td>
                                        <td>{stock.today}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <small>Last updated: <Timestamp date={this.state.lastUpdated} /></small>
                    </div>
            )
      }

    fetchStocks = () =>  {
        axios
        .get(`http://188.166.95.21/stocks`, {
            
                headers: {"Access-Control-Allow-Origin": "*"}
            
        })
        .then(res => {
            let parsedRes = JSON.parse(res.data)

            this.setState({
                lastUpdated: parsedRes.lastUpdated,
                stocks: parsedRes.stocks
            })
        })
        .catch(error => {
            console.log('some error fetching stock data')
          })
    }
}

export default Stocks