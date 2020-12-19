/** @jsx jsx */
import React from 'react';
import { usePageContext, useTranslation } from '@3nvi/gatsby-theme-intl';
import { graphql } from 'gatsby';
import { jsx } from 'theme-ui';
import { Container } from '../components/container';
import { Hero } from '../components/Hero';
import SEO from '../components/seo';
import { useLocalizedWpData } from '../hooks/useLocalizedWpData';

export const PAGE_QUERY = graphql`
  {
    allWpPage {
      nodes {
        language {
          code
        }
        homePageSections {
          content {
            ...HeroSection
          }
        }
      }
    }
  }
`;

const IndexPage = ({ data }) => {
  const { lang } = usePageContext();
  const { t } = useTranslation();
  const [localizedPageData] = useLocalizedWpData(data.allWpPage.nodes);
  const content = localizedPageData.homePageSections.content;

  return (
    <>
      <SEO title="Home" />
      {content.map((section, i) => {
        const fieldGroupName = section.fieldGroupName;
        switch (fieldGroupName) {
          case 'page_Homepagesections_Content_Hero': {
            return <Hero key={i} {...section} />;
          }
          default:
            return <p>Something Went wrong...</p>;
        }
      })}
      <Container>
        <h1>{t('home')}</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam
          repellat, dolore quod non sed accusantium expedita nobis beatae modi
          laboriosam itaque? Molestias, voluptatibus quam cumque minima, porro
          rem eligendi facere, rerum magnam provident maiores esse omnis atque
          tenetur autem sunt. Recusandae laborum nam dolorum eum quidem
          voluptatum aliquid mollitia ipsum labore eos rem vel sed,
          necessitatibus explicabo modi unde alias, provident ratione cumque
          obcaecati corporis a iure. Voluptatem sit sunt aliquam iste deleniti
          quidem consectetur sequi quisquam aperiam similique voluptatum dolor
          quae, quas quos corrupti labore illum praesentium dolorem excepturi
          magnam veniam minus dolores cupiditate quasi? Nam et expedita ab ipsa
          aspernatur dignissimos rerum sapiente corrupti, voluptate excepturi
          commodi maiores atque inventore enim explicabo illo eligendi nobis
          fugiat. Libero pariatur velit beatae laudantium sint itaque odit
          magnam, tenetur perspiciatis placeat maxime est incidunt cumque
          ratione possimus eum dolore! Dignissimos harum sint eligendi optio
          tenetur sit eos rem nemo recusandae, culpa laborum libero ratione
          blanditiis, iure sed quam vitae, accusamus excepturi? Eos alias nihil,
          perferendis ullam, voluptatem quasi architecto nesciunt exercitationem
          eius illo blanditiis maiores deserunt recusandae a atque molestiae
          nisi odio accusantium ad laudantium corporis. Id voluptas dolores quod
          ratione numquam aut? Voluptatibus aliquid enim nulla aperiam repellat
          a iusto cupiditate blanditiis saepe reiciendis velit, culpa tempore
          provident vitae vel ipsum quibusdam! Facilis aliquam voluptas tempore
          quo corporis, natus quasi quisquam eos error nobis soluta quae vero
          nostrum maiores, consequatur minus ut numquam odio enim laudantium,
          exercitationem asperiores quaerat. Eum incidunt maxime dicta fugit?
          Quasi, unde natus cupiditate illo dolore atque, ut, illum animi
          corrupti cumque perspiciatis. Iure voluptates dolor deserunt sunt
          harum delectus molestias culpa tempora placeat. Nemo sit facilis,
          assumenda possimus atque suscipit iusto, officiis animi dicta modi
          libero cupiditate excepturi beatae corrupti quibusdam, blanditiis
          aperiam corporis deserunt ab nobis qui numquam. Obcaecati nihil
          reprehenderit et voluptate, rerum optio velit molestiae aliquam porro
          culpa nam unde doloribus! Eius facere, accusamus ipsa explicabo
          dolorum fuga animi veniam pariatur nisi fugit perferendis repellat
          ipsum nam numquam neque dolore voluptate cumque quae totam placeat
          distinctio. Sequi enim possimus ipsa nam, totam illo libero
          dignissimos fuga recusandae iure molestias in, voluptates quod unde
          debitis tenetur hic quibusdam est porro reiciendis pariatur! Quas quod
          fugiat consequuntur cum unde perferendis quidem maiores dicta corrupti
          minus obcaecati odit odio dignissimos et ex beatae facilis placeat
          molestiae, voluptatibus, voluptatum iure magni praesentium. Omnis
          distinctio dolore minima repellat, doloremque cupiditate in. Eos
          quibusdam ipsum corporis voluptatum aliquam illo nisi, repellat vitae
          debitis, ipsa eaque recusandae odit distinctio? Facere, iste debitis
          laboriosam officiis nulla rerum dolor veritatis vitae omnis aspernatur
          quaerat impedit, dolores fugit, eum cupiditate? Doloribus provident
          quibusdam quod dolorum, vero culpa necessitatibus pariatur quas hic
          amet consequuntur unde enim assumenda odit explicabo id nostrum nemo
          voluptate officia optio dolore est voluptatum illum aspernatur?
          Quibusdam aut nostrum, voluptatibus dignissimos dicta rem, placeat,
          officia quisquam dolores harum hic! Laudantium reiciendis odit nam
          deserunt at tenetur molestias tempore et unde ducimus laborum numquam
          aperiam voluptate sint illum, ex maxime sed est aliquid. Beatae quam
          eius minima veritatis ipsum delectus iusto provident distinctio, saepe
          quas minus voluptate ab error ad debitis, laudantium est sapiente
          aliquid cupiditate odio nihil laborum ratione aspernatur? Eum ipsum
          aspernatur sapiente error vel cupiditate veritatis libero fugit
          exercitationem quam, commodi totam id vitae laudantium suscipit velit,
          ducimus maxime placeat quibusdam. Debitis optio similique recusandae
          accusamus velit quae enim, facere tempora, consequatur eaque
          aspernatur, id quam sapiente quod quibusdam porro repellat fuga
          corrupti eius harum. Quia, ipsum temporibus soluta laudantium suscipit
          perspiciatis dolor quo facere eum sapiente, necessitatibus eius
          placeat eos eveniet similique vitae at? Commodi provident hic
          repudiandae maiores magni, voluptates itaque necessitatibus maxime,
          deserunt quia autem! Aspernatur, laudantium? Autem assumenda facere
          officiis veniam alias repudiandae. Possimus obcaecati consectetur
          numquam natus reprehenderit saepe distinctio repellendus libero eius
          adipisci. Labore pariatur quia velit quisquam qui aliquid. Quibusdam
          earum porro numquam fugit officia! Inventore vel perferendis,
          repudiandae quam pariatur, tempore nam dolore nobis possimus illum aut
          animi libero maiores nesciunt explicabo sunt blanditiis minima in
          quaerat aspernatur vitae minus obcaecati recusandae repellat. Corrupti
          quod minima natus aut expedita. Impedit harum repellat earum cumque
          aperiam, minima exercitationem expedita recusandae qui voluptate
          aliquam sint sunt excepturi possimus perferendis odit atque? Ut,
          animi. Accusamus sapiente, odio maiores at rem doloremque commodi,
          aliquid impedit possimus maxime asperiores eos. Accusantium, minus!
          Facere odio consequuntur voluptatibus fuga aperiam beatae explicabo
          ipsum provident cum, odit accusantium sapiente quia autem tempore
          magnam repellendus, illo perferendis et non esse atque eum iusto
          voluptates iure. Repudiandae suscipit expedita, cumque vero architecto
          adipisci dolor iste! Dignissimos nobis, omnis consequuntur laborum
          necessitatibus eius placeat eos eveniet similique vitae at? Commodi
          provident hic repudiandae maiores magni, voluptates itaque
          necessitatibus maxime, deserunt quia autem! Aspernatur, laudantium?
          Autem assumenda facere officiis veniam alias repudiandae. Possimus
          obcaecati consectetur numquam natus reprehenderit saepe distinctio
          repellendus libero eius adipisci. Labore pariatur quia velit quisquam
          qui aliquid. Quibusdam earum porro numquam fugit officia! Inventore
          vel perferendis, repudiandae quam pariatur, tempore nam dolore nobis
          possimus illum aut animi libero maiores nesciunt explicabo sunt
          blanditiis minima in quaerat aspernatur vitae minus obcaecati
          recusandae repellat. Corrupti quod minima natus aut expedita. Impedit
          harum repellat earum cumque aperiam, minima exercitationem expedita
          recusandae qui voluptate aliquam sint sunt excepturi possimus
          perferendis odit atque? Ut, animi. Accusamus sapiente, odio maiores at
          rem doloremque commodi, aliquid impedit possimus maxime asperiores
          eos. Accusantium, minus! Facere odio consequuntur voluptatibus fuga
          aperiam beatae explicabo ipsum provident cum, odit accusantium
          sapiente quia autem tempore magnam repellendus, illo perferendis et
          non esse atque eum iusto voluptates iure. Repudiandae suscipit
          expedita, cumque vero architecto adipisci dolor iste! Dignissimos
          nobis, omnis consequuntur laborum necessitatibus eius placeat eos
          eveniet similique vitae at? Commodi provident hic repudiandae maiores
          magni, voluptates itaque necessitatibus maxime, deserunt quia autem!
          Aspernatur, laudantium? Autem assumenda facere officiis veniam alias
          repudiandae. Possimus obcaecati consectetur numquam natus
          reprehenderit saepe distinctio repellendus libero eius adipisci.
          Labore pariatur quia velit quisquam qui aliquid. Quibusdam earum porro
          numquam fugit officia! Inventore vel perferendis, repudiandae quam
          pariatur, tempore nam dolore nobis possimus illum aut animi libero
          maiores nesciunt explicabo sunt blanditiis minima in quaerat
          aspernatur vitae minus obcaecati recusandae repellat. Corrupti quod
          minima natus aut expedita. Impedit harum repellat earum cumque
          aperiam, minima exercitationem expedita recusandae qui voluptate
          aliquam sint sunt excepturi possimus perferendis odit atque? Ut,
          animi. Accusamus sapiente, odio maiores at rem doloremque commodi,
          aliquid impedit possimus maxime asperiores eos. Accusantium, minus!
          Facere odio consequuntur voluptatibus fuga aperiam beatae explicabo
          ipsum provident cum, odit accusantium sapiente quia autem tempore
          magnam repellendus, illo perferendis et non esse atque eum iusto
          voluptates iure. Repudiandae suscipit expedita, cumque vero architecto
          adipisci dolor iste! Dignissimos nobis, omnis consequuntur laborum
          necessitatibus eius placeat eos eveniet similique vitae at? Commodi
          provident hic repudiandae maiores magni, voluptates itaque
          necessitatibus maxime, deserunt quia autem! Aspernatur, laudantium?
          Autem assumenda facere officiis veniam alias repudiandae. Possimus
          obcaecati consectetur numquam natus reprehenderit saepe distinctio
          repellendus libero eius adipisci. Labore pariatur quia velit quisquam
          qui aliquid. Quibusdam earum porro numquam fugit officia! Inventore
          vel perferendis, repudiandae quam pariatur, tempore nam dolore nobis
          possimus illum aut animi libero maiores nesciunt explicabo sunt
          blanditiis minima in quaerat aspernatur vitae minus obcaecati
          recusandae repellat. Corrupti quod minima natus aut expedita. Impedit
          harum repellat earum cumque aperiam, minima exercitationem expedita
          recusandae qui voluptate aliquam sint sunt excepturi possimus
          perferendis odit atque? Ut, animi. Accusamus sapiente, odio maiores at
          rem doloremque commodi, aliquid impedit possimus maxime asperiores
          eos. Accusantium, minus! Facere odio consequuntur voluptatibus fuga
          aperiam beatae explicabo ipsum provident cum, odit accusantium
          sapiente quia autem tempore magnam repellendus, illo perferendis et
          non esse atque eum iusto voluptates iure. Repudiandae suscipit
          expedita, cumque vero architecto adipisci dolor iste! Dignissimos
          nobis, omnis consequuntur laborum
        </p>
      </Container>
    </>
  );
};

export default IndexPage;
