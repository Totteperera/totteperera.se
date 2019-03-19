import React from "react"
import { StaticQuery, graphql } from "gatsby";
import Timestamp from "./timestamp"


function Stocks() {

    return(
        <StaticQuery 
            query={stocksQuery}
            render={data => {
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
                                {data.allStocks.edges[0].node.Stocks.map(( stock => 
                                    <tr key={stock.name}>
                                        <td><a href={stock.url} target='_blank' rel='noopener noreferrer' style={{cursor: 'pointer'}}>{stock.name}</a></td>
                                        <td>{stock.price} kr</td>
                                        <td>{stock.today}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <small>Last updated: <Timestamp date={data.allStocks.edges[0].node.lastUpdated} /></small>
                    </div>
            
                )
            }}
        />
            
    )
}

export default Stocks

const stocksQuery = graphql`
    query StocksQuery {
        allStocks {
            edges {
              node {
                lastUpdated
                Stocks {
                  url
                  name
                  price
                  today
                }
              }
            }
          }
    }
` 