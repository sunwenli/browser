import getMime from '../method/getMime.js';
import _Chrome from './Chrome.js';
import _360 from './360.js';
import _globalThis from '../runtime/globalThis.js';

export default {
    name:'360EE',
    match(ua){
        let isMatch = false;
        if(getMime('type','application/cenroll.cenroll.version.1')||getMime('type','application/hwepass2001.installepass2001')){
            isMatch = true;
        }else if(_360.match(ua)){
            if(_globalThis?.navigator?.userAgentData?.brands.filter(item=>item.brand=='Not A(Brand'||item.brand=='Not?A_Brand').length){
                isMatch = true;
            }
        }
        return ua.includes('360EE')||isMatch;
    },
    version(ua){
        let hash = {
            '122':'(X)22.3',
            '119':'(X)22.0',
            '108':'14.0',
            '95':'(X)21.0',
            '86':'13.0',
            '78':'12.0',
            '69':'11.0',
            '63':'9.5',
            '55':'9.0',
            '50':'8.7',
            '30':'7.5'
        };
        let chrome_version = parseInt(_Chrome.version(ua));
        return hash[chrome_version]||'';
    }
};
