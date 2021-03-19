import Link from "next/link";
import Head from 'next/head';

function aplicacoes(){
    return (
        <div>
            <Head>
           <title>Fontes Renováveis </title>
            </Head>
            <style jsx global>{`{body {background: #c3fadd }`}</style>
            <header style ={{padding: '10px', textAlign: 'center', background: '#1abc9c', color: 'white', fontSize: '30px'}}> 
                <h1>
                    Projetos
                </h1>
                <nav>
                    <table border='1'>
                        <th>Informações</th>
                        <tr>
                        <td>
                            <Link href="/">
                            <a>Início</a>
                            </Link>
                        </td>
                        </tr>
                        <tr>
                        <td>
                            <Link href="/sobre">
                            <a>Sobre o projeto</a>
                            </Link>
                        </td>
                        </tr>
                        <tr>
                        <td>
                            <Link href="/fundamentos">
                            <a>Fundamentos de Energias Renováveis</a>
                            </Link>
                        </td>
                        </tr>
                    </table>
                </nav> 
            </header>
            <body>
                <section>
                    <article>
                        <header></header>
                        <p></p>
                    </article>
                </section>
            </body>
        </div>
    
    )
}

export default aplicacoes