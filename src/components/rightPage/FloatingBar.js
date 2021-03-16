import React from 'react';
import './FloatingBar.css';

function FloatingBar() {
    
    return (
        <div id="floating-bar">
            <table id="floating-table">
                <thead>
                    <tr><th>11省</th></tr>
                    <tr>
                        <th>序号</th>
                        <th>站点名字</th>
                        <th>所属城市</th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
        </div>
    )
}

export default FloatingBar;