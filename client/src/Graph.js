import React from 'react'
import {Chart} from 'react-google-charts'

const Graph=(props)=>{
    let low=0,high=1,medium=0
    return(
        <div>
            <h3>Pie Chart </h3>
            {console.log(props.attribute,'in attr')}
            {props.attribute.forEach(ele=>{
                if(ele.priority==='high'){
                    {high++}

                }
                else if(ele.priority==='Medium')
                {
                    {medium++}
                }
                else{
                    low++
                }
            })}
            <Chart  chartType="PieChart" data={[["priority","count"],["high",high],["low",low],["medium",medium]]}/>
            </div>

    )
}
export default Graph