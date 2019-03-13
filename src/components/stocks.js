import React from "react"
import { StaticQuery, graphql } from "gatsby";


function Stocks() {

    return(
        <StaticQuery 
            query={stocksQuery}
            render={data => {
                console.log(data.file.childAssetsJson.stocks)
                console.log(data.file.childAssetsJson.stocks.map((node => node
                )))
                return (
                    <div>
                        <h2 style={{textAlign: 'center'}}>My stock portfolio</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Trend</th>
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