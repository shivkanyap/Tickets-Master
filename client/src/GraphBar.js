import React from 'react'
import {Chart} from 'react-google-charts'

class Graphbar extends React.Component
{
    render()
    {
        let Technical=0,Manager=0,HelpDesk=0,Hr=0,Hardwaredpt=0;
        return(
            <div>
                {this.props.graphBar.forEach(ele=>{
                    if(ele.department==='Technical')
                    {
                            Technical++
                    }
                    else if(ele.department==='Manager')
                    {
                        Manager++
                    }
                    else if(ele.department==='Hr')
                    {
                        Hr++
                    }
                    else if(ele.department==='Hardwaredpt')
                    {
                        Hardwaredpt++
                    }
                    else{
                        HelpDesk++
                    }
                })}
                <Chart
  width={'500px'}
  height={'300px'}
  chartType="Bar"
  loader={<div>Loading Chart</div>}
  
  data={[
    ['Department','Name of Dept'],
    ['Technical',Technical],
    ['HelpDesk',HelpDesk],
    ['HR',Hr],
    ['MANAGER',Manager],
    ['Hardwaredpt',Hardwaredpt]
  ]}
  options={{
    // Material design options
    chart: {
      title: 'Tickets By Department',
      subtitle: 'department wise Data',
    },
  }}
  // For tests
  rootProps={{ 'data-testid': '5' }}
/>
            </div>
        )
    }
}
export default Graphbar