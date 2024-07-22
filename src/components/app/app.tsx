import { useEffect } from 'react';
import { encode, decode } from '@lib/index';
import styles from './app.module.less';

function App() {
    useEffect(() => {
        encode();

        return decode;
    }, [])

    return (
        <div className={styles.app}>Sam on page</div>
    )
}

export default App;

