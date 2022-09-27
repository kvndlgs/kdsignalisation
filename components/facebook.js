import {useEffect} from 'react'
import {init, cleanup} from './fb'

export default function Facebook(){
    useEffect(() => {
        console.log('facebook');
        init();

        return () => {
            cleanup();
        }
    },[]);

    return (
        <div>
            <div id='fb-root'></div>
            <div id='fb-customer-chat' className='fb-customerchat'></div>
        </div>
    );
}