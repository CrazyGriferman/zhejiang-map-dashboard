import React from 'react';
import './FloatingBar.css';

function FloatingBar() {
    
    return (
        <div id="floating-bar">
            <table id="fl-table">
                <thead>
                    <tr>
                        <th>站点类型</th>
                        <th>数量</th>
                        <th>城市</th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
        </div>
    )
}

export default FloatingBar;