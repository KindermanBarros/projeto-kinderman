import Link from "next/link";
function sobre(){
    return (
        <div>
            <head>
                <title>Fontes Renováveis </title>
                <link rel="stylesheet" type="text/css" href="style.css"></link>
            </head>
            <header> 
                <h1>
                    Projetos
                </h1>
                <nav>
                    <table id="info" border='1'>
                        <th>Informações</th>
                        <tr>
                        <td>
                            <Link href="/index">
                            <a>Início</a>
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
                        <tr>
                        <td>
                            <Link href="/aplicacoes">
                            <a>Aplicações em Energias Renováveis</a>
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

export default sobre