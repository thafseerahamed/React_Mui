/**
 * Sample for Line Series
 */
import * as React from 'react';
import { useEffect } from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, LineSeries, Legend, DateTime, Tooltip, Highlight } from '@syncfusion/ej2-react-charts';
import { Browser } from '@syncfusion/ej2-base';
export let data1 = [{ x: new Date(2012, 6, 11), y: 13.5,color:"red" }, { x: new Date(2013, 6, 11), y: 12.4 }, { x: new Date(2014, 6, 11), y: 12.7 }, { x: new Date(2015, 6, 11), y: 12.5 }, { x: new Date(2016, 6, 11), y: 12.7 }, { x: new Date(2017, 6, 11), y: 13.7 }, { x: new Date(2018, 6, 11), y: 13.4 }, { x: new Date(2019, 6, 11), y: 12.9 }, { x: new Date(2020, 6, 11), y: 11.0 }];
export let data2 = [{ x: new Date(2012, 6, 11), y: 5.3 }, { x: new Date(2013, 6, 11), y: 5.6 }, { x: new Date(2014, 6, 11), y: 5.9 }, { x: new Date(2015, 6, 11), y: 5.7 }, { x: new Date(2016, 6, 11), y: 7.8 }, { x: new Date(2017, 6, 11), y: 10.3 }, { x: new Date(2018, 6, 11), y: 15.5 }, { x: new Date(2019, 6, 11), y: 17.5 }, { x: new Date(2020, 6, 11), y: 19.5 }];
export let data3 = [{ x: new Date(2012, 6, 11), y: 5.6 }, { x: new Date(2013, 6, 11), y: 4.7 }, { x: new Date(2014, 6, 11), y: 4.3 }, { x: new Date(2015, 6, 11), y: 3.8 }, { x: new Date(2016, 6, 11), y: 2.8 }, { x: new Date(2017, 6, 11), y: 2.8 }, { x: new Date(2018, 6, 11), y: 4.1 }, { x: new Date(2019, 6, 11), y: 6.8 }, { x: new Date(2020, 6, 11), y: 7.1 }];

const SAMPLE_CSS = `
    .control-fluid {
        padding: 0px !important;
    }
    .1{
        color:"red"
    }
    .charts {
        align :center
    }`;
const Line = () => {
    const onChartLoad = (args) => {
        let chart = document.getElementById('charts');
        chart.setAttribute('title', '');
    };
    const load = (args) => {
       const selectedTheme = 'Material';
        args.chart.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).
            replace(/-dark/i, "Dark").replace(/contrast/i, 'Contrast');
        args.chart.primaryXAxis.labelIntersectAction = 'Rotate45';
        args.chart.primaryXAxis.labelFormat = 'EEE';
    };
    return (<div className="control-pane">
            <style>{SAMPLE_CSS}</style>
            <div className="control-section">
                <ChartComponent id="charts" height='250px' style={{ textAlign: 'center' ,width:"350px"}} primaryXAxis={{ valueType: 'DateTime', edgeLabelPlacement: 'Shift', majorGridLines: { width: 0 }, labelFormat: 'y' }} load={load.bind(this)} primaryYAxis={{ title: 'Million Metric Tons', rangePadding: 'None', minimum: 0, maximum: 20, interval: 4, lineStyle: { width: 0 }, majorTickLines: { width: 0 }, minorTickLines: { width: 0 } }} chartArea={{ border: { width: 0 } }} tooltip={{ enable: true }} legendSettings={{ enableHighlight: true }} width={Browser.isDevice ? '100%' : '75%'} title="Crude Steel Production Annual Growth" loaded={onChartLoad.bind(this)}>
                    <Inject services={[LineSeries, DateTime, Legend, Tooltip, Highlight]}/>
                    <SeriesCollectionDirective>
                        <SeriesDirective id ="1" dataSource={data2} xName="x" fill="#FFA500" yName="y" name="On Time" width={2} marker={{ visible: false, width: 7, height: 7,  isFilled: false,   opacity:"#FFA500"}} type="Line"  ></SeriesDirective>
                        <SeriesDirective id="2" dataSource={data1} xName="x" yName="y" name="Late" width={2} marker={{ visible: false, width: 6, height: 6,  isFilled: false, fill: 'yellow', opacity:"#FFA500" }}  type="Line" ></SeriesDirective>
                        <SeriesDirective id="3" dataSource={data3} xName="x" yName="y" name="Absent" width={2} marker={{ visible: false, width: 7, height: 7, isFilled: false ,fill: 'yellow' ,opacity:"#FFA500" }} type="Line" ></SeriesDirective>
                       
                    </SeriesCollectionDirective>
                </ChartComponent>
            </div>
        </div>);
};
export default Line;