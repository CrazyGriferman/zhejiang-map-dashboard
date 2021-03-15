import React from 'react';
import './DashBoard.css';
import { Scene } from '@antv/l7';
import { Mapbox } from '@antv/l7-maps';
import { ProvinceLayer } from '@antv/l7-district';
import { CountryLayer } from '@antv/l7-district';
import {MapboxScene, LineLayer } from '@antv/l7-react'; 
import Province from './Province';
import MarkerInfo from './MarkerInfo';
import test from '../data/test.json'

function DashBoard() {
    var data = [
        {
            "id": 444,
            "name": "测试站点1",
            "location": "杭州市",
            "longitude": 120.285811,
            "latitude": 30.257297
        }, {
            "id": 456,
            "name": "测试站点2",
            "location": "杭州市",
            "longitude": 120.028249,
            "latitude": 30.145429
        }
    ];

    /* const [data, setData] = React.useState();
    React.useEffect(() => {
        const fetchData = async () => {
        const response = await fetch(
            'https://gw.alipayobjects.com/os/basement_prod/893d1d5f-11d9-45f3-8322-ee9140d288ae.json',
        );
        const data = await response.json();
        setData(data);
        };
        fetchData();
    }, []); */

    return (
        <div className="container">
            <Province />

        </div>
    )
}

export default DashBoard;