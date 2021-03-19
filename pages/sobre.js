import Link from "next/link";
import Head from 'next/head';

function sobre(){
    return (
        
        <div style={{backgroundColor:''}}>
            <Head>
                <title>Fontes Renováveis </title>
            </Head>
            <style jsx global>{`{body {background: #c3fadd}`}</style>
            <style jsx>{`
        .link:hover {
          color: blue;
        }
      `}</style>
            <header style ={{padding: '10px', textAlign: 'center', background: '#1abc9c', color: 'white', fontSize: '30px'}}> 
                <h1>
                    Projetos
                </h1>
            </header>
            <body>
            <nav style={{width: '55%', marginRight:'2%', float: 'left'}}>
                <table border='2' style={{borderCollapse:'collapse', width:'500x', fontSize:'20px'}}>
                        <div style={{backgroundColor:'lightblue'}}>
                        <th style={{width:'10px',color: 'white', backgroundColor:'#1abc9c'}}>Informações</th>
                        <tr>
                        <td>
                            <Link href="/">
                            <a className='link' style={{textDecoration: 'none'}}>Início</a>
                            </Link>
                        </td>
                        </tr>
                        <tr>
                        <td>
                            <Link href="/fundamentos">
                            <a className='link' style={{textDecoration: 'none'}}>Fundamentos de Energias Renováveis</a>
                            </Link>
                        </td>
                        </tr>
                        <tr>
                        <td>
                            <Link href="/aplicacoes">
                            <a className='link' style={{textDecoration: 'none'}}>Aplicações em Energias Renováveis</a>
                            </Link>
                        </td>
                        </tr>
                        </div>
                    </table>
                </nav> 
                <section style={{width:'42%' ,float: 'left'}}>
                    <article>
                        <h2>Título</h2>
                        <p>Parágrafo</p>
                    </article>
                </section>
                <section>
                    <article style={{paddingTop:'200px'}}>
                        <h2>Título</h2>
                        <img src=''/>
                        <p>
                          Parágrafo  
                        </p>
                    </article>
                </section>
            </body>
        </div>
    
    )
}

export default sobre