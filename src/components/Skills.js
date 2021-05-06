import React from 'react';
import {FaBootstrap, FaNodeJs, FaReact, FaHtml5, FaCss3} from 'react-icons/fa';
import {DiMongodb, DiJavascript1} from 'react-icons/di';

export default function Skills(){

return (
    <div class="icon-container">
    <div>
    <FaBootstrap className="icon"/>
    <li class="skills"> Bootstrap </li>
    <FaNodeJs className="icon"/>
    <li class="skills"> Node.JS</li>
    <FaReact className="icon"/>
    <li class="skills"> React </li>
    </div><div>
    <FaHtml5 className="icon"/>
    <li class="skills"> HTML5 </li>
    <FaCss3 className="icon"/>
    <li class="skills"> CSS3 </li>
    <DiMongodb className="icon"/>
    <li class="skills"> MongoDB </li>
    <DiJavascript1 className="icon"/>
    <li class="skills"> JavaScript </li>
    </div>
</div>)
}





