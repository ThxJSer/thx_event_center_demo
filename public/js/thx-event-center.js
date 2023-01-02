(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.thxEventCenter = {})));
}(this, (function (exports) { 'use strict';

let eventCenterUuid = '';
  
const useEventCenter = (setUuid) => {

    eventCenterUuid = setUuid;
    
    return {
        initEventCenter: initEventCenter,
        callCenter : callCenter
    };
};

const callCenter = (v) => {

        const event = new CustomEvent(eventCenterUuid, {
        detail: v
    });
    document.dispatchEvent( event ) ;
};

const initEventCenter = (controller) => {

    document.addEventListener(eventCenterUuid, (e) => {

    const {eventName, params} = e.detail;
        // alert(eventName);
        // alert(params);

        if(typeof controller[eventName] == 'undefined'){

            console.log('no controller in initEventCenter!');
            return;
        }

        controller[eventName](params);
    }); 
};

exports.useEventCenter = useEventCenter;

Object.defineProperty(exports, '__esModule', { value: true });

})));