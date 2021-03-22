
import ProvinceLayer from '@antv/l7-district/lib/layer/province';
import * as React from 'react';
import {Marker, MarkerLayer} from '@antv/l7';
import city from '../data/city';
import {getColor,addTableContent,deleteTableContent, IdGenerator,bigger} from './MarkerManage';
import { MapboxScene } from '@antv/l7-react';
import { SceneContext } from '@antv/l7-react';
import './Province.css';

function Province() {

    return (
        <div id="mapbox">
            <MapboxScene option={{
                logoVisible: false
            }}
                map={{
                    center: [114, 29],
                    pitch: 0,
                    style: 'blank',
                    zoom: 3,
                    minZoom: 6,
                    maxZoom: 6,
                }}
            >
                <SceneContext.Consumer>
                    {(scene) => {
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
                                    "#0a2dae", 
                                    "#4cabce", 
                                    "#006699"
                                ],
                            }
                        },
                        popup: {
                            enable: false,
                        }
                        
                    });
                }} 
                </SceneContext.Consumer>
                <SceneContext.Consumer>
                    {(scene) => {
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
                                el.style = `
                                    top: 50%;
                                    transform: translateY(-50%);
                                    font-size: 20px;
                                    text-align: center;
                                    width: 24px;
                                    height: 24px;
                                    border-radius: 50%;
                                    background-color: #B9AF57;
                                    :hover {color: blue}
                                `;


                                
                                
                                const marker = new Marker({
                                    element: el
                                }).setLnglat({ lng: city[i].longitude, lat: city[i].latitude});
                                markerLayer.addMarker(marker);
                                marker.on('click', (e) => {
                                    const idIterator = IdGenerator();
                                    deleteTableContent();
                                    for(let j = 0; j < nodes.length; j++) {
                                        if(nodes[j].city === city[i].name) {
                                            addTableContent(idIterator.next().value,nodes[j].name,nodes[j].city);
                                        }
                                    }
                                });
                            }
                            scene.addMarkerLayer(markerLayer);
                        });
                    }}
                </SceneContext.Consumer>
            </MapboxScene>
        </div>
    )
}

export default Province;