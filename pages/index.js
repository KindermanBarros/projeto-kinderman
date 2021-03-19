import Link from "next/link";
import Head from 'next/head';
import styles from './styles.module.css';

function home(){
    return (
        <div className={styles.site}>
            <div className={styles.body}>
            <header className={styles.header}>
	            <div className={styles.overlay}>
                    <h1 className={styles.h1}>Simply The Best</h1>
                    <h3 className={styles.h3}>Reasons for Choosing US</h3>
                    <p className={styles.p}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero nostrum quis, odio veniam itaque ullam debitis qui magnam consequatur ab. Vero nostrum quis, odio veniam itaque ullam debitis qui magnam consequatur ab.</p>
	                <br/>
	                <button className={styles.button}>READ MORE</button>
		        </div>
            </header>
            </div>
        </div>
    )
}

export default home