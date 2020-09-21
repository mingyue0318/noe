// import _ from 'lodash';
// import printMe from './print.js';
// import './styles.css';
// if (process.env.NODE_ENV !== 'production') {
//     console.log('Looks like we are in development mode!');
// }
function getComponent() {

    return import("loadsh").then(_=>{
        var element = document.createElement('div');

        element.innerHTML = _.join(['Hello', 'webpack'], ' ');
        return element;
    }).catch(error => 'An error occurred while loading the component');
}

getComponent().then(component =>{
    document.body.appendChild(component)
})