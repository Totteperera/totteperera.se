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
                                {data.file.childAssetsJson.stocks.map(( node => 
                                    <tr key={node.name}>
                                        <td><a href={node.url} target='_blank' style={{cursor: 'pointer'}}>{node.name}</a></td>
                                        <td>{node.latest} kr</td>
                                        <td>{node.trendingToday}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <small>Last updated: <Timestamp date={data.file.modifiedTime} /></small>
                    </div>
            
                )
            }}
        />
            
    )
}

export default Stocks

const stocksQuery = graphql`
    query StocksQuery {
        file(absolutePath: { regex: "/stocks.json/"}) {
            modifiedTime
            childAssetsJson {
              stocks {
                url
                name
                latest
                trendingToday
              }
            }
        }
    }
` 