
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
                    center: [340.2825, 89.9],
                    pitch: 0,
                    style: 'blank',
                    zoom: 6,
                    minZoom: 6,
                    maxZoom: 6,
                    logoVisible: false
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
                              // ???????????????object literal???????????????json??????????????????????????????
                            for (let i = 0; i < nodes.length; i++) {
                                if (nodes[i].city === "?????????") {
                                    city.hangzhou.count += nodes[i].count;
                                }
                                else if (nodes[i].city === "?????????") {
                                    city.jinhua.count += nodes[i].count;
                                }
                                else if (nodes[i].city === "?????????") {
                                    city.lishui.count += nodes[i].count;
                                }
                                else if (nodes[i].city === "?????????") {
                                    city.wenzhou.count += nodes[i].count;
                                }
                                else if (nodes[i].city === "?????????") {
                                    city.taizhou.count += nodes[i].count;
                                }
                                else if (nodes[i].city === "?????????") {
                                    city.ningbo.count += nodes[i].count;
                                }
                                else if (nodes[i].city === "?????????") {
                                    city.zhoushan.count += nodes[i].count;
                                }
                                else if (nodes[i].city === "?????????") {
                                    city.shaoxing.count += nodes[i].count;
                                }
                                else if (nodes[i].city === "?????????") {
                                    city.jiaxing.count += nodes[i].count;
                                }
                                else if (nodes[i].city === "?????????") {
                                    city.huzhou.count += nodes[i].count;
                                }
                                else if (nodes[i].city === "?????????") {
                                    city.quzhou.count += nodes[i].count;
                                }
                                else if (nodes[i].city === "????????????") {
                                    city.zhishu.count += nodes[i].count;
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
                                    padding: 5px;
                                    font-size: 12px;
                                    text-align: center;
                                    width: 20px;
                                    height: 20px;
                                    border-radius: 50%;
                                    background-color: #B9AF57;
                                    :hover {color: blue}
                                `;

                                const marker = new Marker({
                                    element: el
                                }).setLnglat({ lng: city[i].longitude, lat: city[i].latitude});
                                markerLayer.addMarker(marker);
                                marker.on('click', (e) => {
                                    deleteTableContent();
                                    for(let j = 0; j < nodes.length; j++) {
                                        if(nodes[j].city === city[i].name) {
                                            addTableContent(nodes[j].name,nodes[j].count,nodes[j].city);
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