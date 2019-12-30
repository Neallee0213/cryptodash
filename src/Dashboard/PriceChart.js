import highchartsConfig from './HighchartsConfig';
import React from 'react';
import { Tile } from "../Shared/Tile";
import { AppContext } from "../components/AppProvider";
import ReactHighcharts from 'react-highcharts';
import HighchartsTheme from './HighchartsTheme';
import ChartSelect from './ChartSelect';
ReactHighcharts.Highcharts.setOptions(HighchartsTheme);

export default function () {
  return (
    <AppContext.Consumer>
      {({ historical, changeChartSelect }) =>
        <Tile>
          <div className="row">
            <div className="col-12">
              <ChartSelect
                defaultValue="months"
                onChange={e => changeChartSelect(e.target.value)}
                className="selcetday"
              >
                <option value="days"> Days </option>
                <option value="weeks"> Weeks </option>
                <option value="months"> Months </option>


              </ChartSelect>
              {historical ?
                <ReactHighcharts config={highchartsConfig(historical)} className='img-fulid' />
                : <div className="loading"> Loading Historical Data...</div>
              }
            </div>
          </div>

        </Tile>
      }
    </AppContext.Consumer >
  )
}
