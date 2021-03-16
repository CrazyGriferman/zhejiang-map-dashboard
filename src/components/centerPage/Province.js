import { Scene } from '@antv/l7';
import ProvinceLayer from '@antv/l7-district/lib/layer/province';
import { Mapbox } from '@antv/l7-maps';
import * as React from 'react';
import {Marker, MarkerLayer} from '@antv/l7';
import city from '../data/city';
import {getColor,addTableContent,deleteTableContent} from './MarkerManage';

function Province() {

    var number = 1;
    const scene = new Scene({
        id: 'map',
        map: new Mapbox({
            center: [116.2825, 39.9],
            pitch: 0,
            style: 'blank',
            zoom: 4,
            minZoom: 3,
            maxZoom: 6,
        }),
        logoVisible: false
    });
    scene.on('loaded', () => {
        new ProvinceLayer(scene, {
            joinBy: [ 'adcode', 'code'],
            zIndex: 1,
            adcode: [ '330000' ],
            depth: 2,
            label: {
                field: 'NAME_CHN',
                textAllowOverlap: false,
            },
            fill: {
                color: {
                    field: 'NAME_CHN',
                    values: [
                        '#feedde',
                        '#fdd0a2',
                        '#fdae6b',
                        '#fd8d3c',
                        '#e6550d',
                        '#a63603',
                    ],
                }
            },
            popup: {
                enable: false,
            }
        });
        addMarkers();
        scene.render();
    });

    function addMarkers() {
        fetch(
            './data.json'
        )
            .then(res => res.json())
            .then(nodes => {
              // 写了十一个object literal，用来统计json里各个城市站点的个数
            for (let i = 0; i < nodes.length; i++) {
                if (nodes[i].city === "杭州市") {
                    city.hangzhou.count++;
                }
                else if (nodes[i].city === "金华市") {
                    city.jinhua.count++;
                }
                else if (nodes[i].city === "丽水市") {
                    city.lishui.count++;
                }
                else if (nodes[i].city === "温州市") {
                    city.wenzhou.count++;
                }
                else if (nodes[i].city === "台州市") {
                    city.taizhou.count++;
                }
                else if (nodes[i].city === "宁波市") {
                    city.ningbo.count++;
                }
                else if (nodes[i].city === "舟山市") {
                    city.zhoushan.count++;
                }
                else if (nodes[i].city === "绍兴市") {
                    city.shaoxing.count++;
                }
                else if (nodes[i].city === "嘉兴市") {
                    city.jiaxing.count++;
                }
                else if (nodes[i].city === "湖州市") {
                    city.huzhou.count++;
                }
                else if (nodes[i].city === "衢州市") {
                    city.quzhou.count++;
                }
            }
            const markerLayer = new MarkerLayer({
                cluster: false
            });

            for(let i in city) {
                const el = document.createElement('label');
                el.className = 'labelclass';
                el.textContent = city[i].count;
                el.style.background = getColor(city[i].count);
                el.style.borderColor = getColor(city[i].count);
                el.style = `
                    top: 50%;
                    transform: translateY(-50%);
                    font-size: 24px;
                    text-align:center;
                    width: 24px;
                    height: 24px;
                    border-radius: 50%;
                    background-color: #1E90FF;
                `;
                
                const marker = new Marker({
                    element: el
                }).setLnglat({ lng: city[i].longitude, lat: city[i].latitude});
                markerLayer.addMarker(marker);
                marker.on('click', (e) => {
                    deleteTableContent();
                    for(let j = 0; j < nodes.length; j++) {
                        if(nodes[j].city == city[i].name) {
                            console.log(nodes[j].name);
                            addTableContent(number,nodes[j].name,nodes[j].city);
                            number++;
                        }
                    }
                    number = 1;
                });
            }
            scene.addMarkerLayer(markerLayer);
        });
    }
    
    return (
        <div id="map">

        </div>
    );
};




export default Province;