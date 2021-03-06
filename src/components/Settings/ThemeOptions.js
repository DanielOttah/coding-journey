import React from 'react';
import '../../App.css';
import SelectThemeList from './SelectThemeList';


function ThemeOptions(props) {
    return (
        <div className="col__3" >
            <SelectThemeList />
            <label><b>Toggle Light and Dark Theme:</b> ({props.themeType})</label>
            <label className="switch">
                <input id="themeId" type="checkbox" onChange={props.toggleLight_Dark} />
                <span className="slider round"></span>
            </label>
        </div>
    );

}

export default ThemeOptions;