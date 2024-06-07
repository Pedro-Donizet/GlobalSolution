import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="title">
          <h1>CLean <span>Beach <br />Deixe um legado de limpeza para as próximas marés</span></h1>
        </div>
      </section>

      <section className="section-text-img">
        <div className="section-text">
          <h2>O lixo nas praias</h2>
          <p>Muitos animais marinhos ingerem os resíduos que veem na água, pois, ao contrário de nós, eles não conseguem diferenciar o que é lixo do que é comida. Uma vez em seus organismos, esses resíduos afetam a capacidade de absorção de nutrientes, o que com o tempo, debilita os animais e dificulta a sua sobrevivência.</p>
          <ul>
            <li><span>ingestão do lixo:</span> A ingestão de lixo também pode acarretar no sufocamento, obstrução do trato digestório, intoxicação e/ou contaminação de espécies marinhas.</li>
            <li><span>impactos registrados:</span> A pesquisa da Universidade de Queensland revelou que mais de 100 mil animais marinhos morrem anualmente devido ao lixo, principalmente plástico. Uma ampla variedade de espécies, incluindo aves, peixes, tartarugas e mamíferos marinhos, é afetada por esse problema.</li>
            <li><span>Problemas do descarte incorreto de resíduos:</span> O descarte inadequado de lixo gera emissão de gases poluentes, contaminação do solo, danos aos ecossistemas e poluição de corpos d'água.</li>
          </ul>
        </div>
        <div className="section-image">
          <Image src="/img1.jpg" alt="ocean drawing" width={400} height={600}></Image>
        </div>
      </section>

      <section className="section-text-img different">
        <div className="section-image">
          <Image src="/img2.jpg" alt="ocean drawing" width={400} height={600}></Image>
        </div>
        <div className="section-text">
          <h2>Ameaças aos Nossos Oceanos</h2>
          <p>Infelizmente, nossos oceanos estão sob grave ameaça devido a uma série de problemas ambientais. É vital que todos nós entendamos esses desafios para podermos agir e fazer a diferença.</p>
          <ul>
            <li><span>Poluição Plástica:</span> Todos os anos, milhões de toneladas de plástico entram nos oceanos, causando danos devastadores à vida marinha e aos ecossistemas.</li>
            <li><span>Mudanças Climáticas:</span> O aquecimento global está resultando na acidificação dos oceanos, elevação do nível do mar e perda de habitats vitais, como os recifes de coral.</li>
            <li><span>excesso de lixo em praias: </span>Estima-se que em torno de 6.4 milhões de toneladas de lixo marinho são descartadas nos oceanos e mares a cada ano. Mais de 13.000 pedaços de lixo plástico estão, atualmente, flutuando em cada quilômetro quadrado de oceano.</li>
          </ul>
        </div>
      </section>

      <section className="section-text-img">
        <div className="section-text">
          <h2>mais do que uma pegada na areia, deixe um legado de limpeza para as próximas marés.</h2>
          <p>Podemos nos unir para contribuir para a limpeza das praias e preservação dos mares do nosso planeta. Com a ajuda de todos podemos melhorar com iniciativas globais para um impacto positivo</p>
          <ul>
            <li><span>Reduza, Reutilize, Recicle:</span> Diminua o uso de plásticos descartáveis e adote práticas de reciclagem para reduzir a poluição.</li>
            <li><span>Apoie a Economia Azul:</span> Incentive práticas sustentáveis que protejam os ecossistemas marinhos e promovam o desenvolvimento econômico.</li>
            <li><span>Educação e Conscientização: </span> Participe de campanhas de conscientização, compartilhe informações e eduque-se sobre os problemas enfrentados pelos oceanos.</li>
            <li><span>Participe de Ações Locais: </span> Junte-se a iniciativas de limpeza de praias, programas de proteção de vida marinha e outros projetos que visam a preservação dos oceanos.</li>
          </ul>
        </div>
        <div className="section-image">
          <Image src="/img3.jpg" alt="ocean drawing" width={400} height={600}></Image>
        </div>
      </section>

    </main>
  );
}
