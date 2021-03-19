import Link from "next/link";
import Head from 'next/head';

function home(){
    return (
        
        <div>
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
                            <Link href="/sobre">
                            <a className='link' style={{textDecoration: 'none'}}>Sobre</a>
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
                        <h2>Introdução</h2>
                        <p>As fontes renováveis de energia têm-se tornado atualmente muito importante
e hoje formam parte da matriz energética de muitos países do mundo. Quase
todas as fontes de energia – hidráulica, biomassa, eólica, combustíveis fósseis e
energia dos oceanos – são formas indiretas de energia solar.<br/>
Além disso, a radiação solar pode ser utilizada diretamente como fonte de
energia térmica, para aquecimento de fluidos e ambientes e para geração de
potência mecânica ou elétrica. Pode ainda ser convertida diretamente em
energia elétrica, através de efeitos sobre determinados materiais, entre os
quais se destacam o termoelétrico e o fotovoltaico.<br/>
Entre os vários processos de aproveitamento da energia solar, os mais usados
atualmente são o aquecimento de água e a geração fotovoltaica de energia
elétrica.<br/>
O uso eficiente de energia elétrica traz para o consumidor redução de gastos
com consumo de energia elétrica, melhoria dos sistemas presentes em sua
instalação elétrica, além de uma imagem associada à preservação da natureza,
o que é muito valorizado atualmente</p>
                    </article>
                </section>
                <section>
                    <article style={{width:'42%', marginRight:'2%',float: 'left'}}>
                        <h2>Equipes</h2>
                        <p> Somos duas equipes de Introdução e duas de aplicações.<br/>
                        <img src=''/>
                        Todos desenvolvemos pesquisas e compilação de informações sobre energias renováveis e disponbilizamos por meio desse site uma perspectiva dos nossos projetos.
                        </p>
                        <img style={{width: '55%', float: 'right'}}/>
                    </article>
                </section>
            </body>
        </div>
    
    )
}

export default home