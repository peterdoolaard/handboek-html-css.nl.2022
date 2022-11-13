export const examples =
  [
    {
      chapterNumber: '1',
      exampleNumber: '1',
      id: '11',
      title: 'Kale HTML',
      code: `<article>
  <h1>De functie van HTML</h1>
  <p>HTML staat voor Hypertext Markup Language. Met HTML worden de <i>structuur</i> van de pagina en de <i>betekenis</i> van de elementen in die pagina aangegeven.</p>
</article>`,
      codeStyle: '',
      captionNumber: '5',
      captionText: 'Een artikel met een kop en een alinea met benadrukte woorden. Het uiterlijk is bepaald door de browser. Deze bevat een basisopmaak voor elk HTML-element: zwarte tekst met een schreef en ruime marges.'
    },
    {
      chapterNumber: '1',
      exampleNumber: '2',
      id: '12',
      title: 'HTML met CSS',
      code: `<article>
  <h1>De functie van HTML</h1>
  <p>HTML staat voor Hypertext Markup Language. Met HTML worden de <i>structuur</i> van de pagina en de <i>betekenis</i> van de elementen in die pagina aangegeven.</p>
</article>`,
      codeStyle: `h1 {
  color: hsl(0 0% 15%);
  font-family: serif;
  font-weight: 500;
}
p {
  color: hsl(0 0% 5%);
  font-family: sans-serif;
  font-weight: 400;
}`,
      captionNumber: '6',
      captionText: 'Dezelfde HTML als in het voorgaande voorbeeld, maar nu opgemaakt met CSS.'
    },
    {
      chapterNumber: '2',
      exampleNumber: '1',
      id: '21',
      title: 'Lege tag',
      code: `<img class="img-zonnebloem" src="/assets/voorbeelden/zonnebloem.jpg" height="640" width="960" alt="Zonnebloemenen in bloei." loading="lazy">`,
      codeStyle: `
      .img-zonnebloem {
        aspect-ratio: 3/2;
        block-size: auto;
        inline-size: 100%;
      }`,
      captionNumber: '',
      captionText: ''
    },
    {
      chapterNumber: '3',
      exampleNumber: '1',
      id: '31',
      title: 'Alineatekst markeren',
      code: `<p>Om in een webpagina een nieuwe alinea te beginnen, wordt de tekst in het element &lt;p&gt; geplaatst.</p>
<p>De stylesheet van de browser voegt witruimte tussen de alinea's toe.</p>
<p>Meerdere regeleinden en tabs in de broncode 
  
  
worden door de browser genegeerd. Er wordt gewoon één alinea van gemaakt.</p>
`,
      codeStyle: ``,
      captionNumber: '',
      captionText: ''
    },
    {
      chapterNumber: '3',
      exampleNumber: '2',
      id: '32',
      title: 'Regeleinden',
      code: `<p>Dikke huisjesslak,<br>
ook jij beklimt de Fuji<br>
– maar langzaam, langzaam.<br>
<cite>Issa (1763 – 1828)</cite></p>
`,
      codeStyle: ``,
      captionNumber: '',
      captionText: ''
    },
    {
      chapterNumber: '3',
      exampleNumber: '3',
      id: '33',
      title: 'Woordafbreking',
      code: `<p>(Maak het venster smaller om het effect te kunnen zien.) Een fobie voor lange woorden heet hippo<wbr>potomonstroses<wbr>quippedalio<wbr>fobie.</p>`,
      codeStyle: ``,
      captionNumber: '',
      captionText: ''
    },
    {
      chapterNumber: '3',
      exampleNumber: '4',
      id: '34',
      title: 'Het element em',
      code: `<p>De <em>kat</em> krabt de krullen van de trap.</p>
        <p>De kat krabt de krullen van de <em>trap</em>.</p>`,
      codeStyle: '',
      captionNumber: '',
      captionText: ''
    },
    {
      chapterNumber: '3',
      exampleNumber: '5',
      id: '35',
      title: 'Het element strong',
      code: `<h1>Hoofdstuk 3: <strong>Aan de slag met HTML</strong></h1>
        <p><strong>Let op.</strong> Vergeet niet het element af te sluiten.</p>
        <p><strong>Waarschuwing!</strong> Deze route kan gevaarlijk zijn. <strong>Houd rechts!</strong></p>`,
      codeStyle: '',
      captionNumber: '',
      captionText: ''
    },
    {
      chapterNumber: '3',
      exampleNumber: '6',
      id: '36',
      title: 'Aanvullende informatie',
      code: `<p><small>Op al onze leveringen zijn de algemene voorwaarden van toepassing.</small></p>
        <p>Deze bezemkast kost 450.000 euro <small>exclusief overdrachtsbelasting</small></p>`,
      codeStyle: '',
      captionNumber: '',
      captionText: ''
    },
    {
      chapterNumber: '3',
      exampleNumber: '7',
      id: '37',
      title: 'Ongeldige informatie',
      code: `<p>Browsers te koop. <s>Nu slechts 5 euro.</s> Gratis af te halen.</p>`,
      codeStyle: '',
      captionNumber: '',
      captionText: ''
    },
    {
      chapterNumber: '3',
      exampleNumber: '8',
      id: '38',
      title: 'Verwijzing',
      code: `<p>We hebben de film <cite>No time to die</cite> gezien.</p>
      <p>Hier staat: <q cite="https://www.trainjedraak.nl">Alleen in de openlucht proberen.</q></p>
      <p>In de folder <cite>Ideeën voor kinderfeestjes</cite> staat: 
      <q cite="http://www.trainjedraak.nl">Alleen in de openlucht proberen.</q></p>
      `,
      codeStyle: '',
      captionNumber: '',
      captionText: ''
    },
    {
      chapterNumber: '3',
      exampleNumber: '9',
      id: '39',
      title: 'Afkortingen en definities',
      code: `<p>We hebben het over <abbr title="Hypertext Markup Language">HTML</abbr>.</p>
<p>We hebben het over <dfn><abbr title="Hypertext Markup Language">HTML</abbr></dfn>.</p>
<p>We hebben het over <dfn title="Hypertext Markup Language">HTML</dfn>.</p>
<p>We hebben het over <dfn id="abbr-html"><abbr title="Hypertext Markup Language">HTML</abbr></dfn>.</p>
<p>Deze regel verwijst terug naar de voorgaande over <a href="#abbr-html"><abbr title="Hypertext Markup Language">HTML</abbr></a>, ...</p>
`,
      codeStyle: '',
      captionNumber: '',
      captionText: ''
    },
    {
      chapterNumber: '3',
      exampleNumber: '10',
      id: '310',
      title: 'Programmacode ',
      code: `<p>Wijs de waarde toe aan a: <code>var a = 10;</code></p>
<pre><code>start() {
  go
  end
}</code></pre>
<p>U ziet de melding <samp>Klik op Start om te stoppen</samp>.</p>
<p>Typ <kbd>console.log('Hello, world');</kbd>.</p>
`,
      codeStyle: '',
      captionNumber: '',
      captionText: ''
    },
    {
      chapterNumber: '3',
      exampleNumber: '11',
      id: '311',
      title: 'Subscript en superscript',
      code: `<p>Jij verdient dus geld als H<sub>2</sub>O</p>
<p>De uitkomst van 10<sup>4</sup> is 10000</p>
`,
      codeStyle: '',
      captionNumber: '',
      captionText: ''
    },
    {
      chapterNumber: '3',
      exampleNumber: '12',
      id: '312',
      title: 'De inline container &lt;span&gt;',
      code: `<p>Een RGB-kleur bestaat uit <span class="rood">rood</span>, <span class="groen">groen</span> en <span class="blauw">blauw</span>.</p>
`,
      codeStyle: '.rood { color: red; }' +
        '.groen { color: green; }' +
        '.blauw { color: blue; }',
      captionNumber: '',
      captionText: ''
    },
    {
      chapterNumber: '3',
      exampleNumber: '13',
      id: '313',
      title: 'Toegevoegd of verwijderd',
      code: `<h2>Een lay-out maken</h2>
<p><del>HTML-tabellen zijn het ideale hulpmiddel om een webpagina vorm te geven.</del></p>
<p><ins>De lay-out van een webpagina bepaalt u met CSS.</ins></p>
`,
      codeStyle: ``,
      captionNumber: '',
      captionText: ''
    },
    {
      chapterNumber: '3',
      exampleNumber: '14',
      id: '314',
      title: 'Citaten',
      code: `<blockquote cite="<https://nl.wikiquote.org/wiki/Asterix">Rare jongens, die Romeinen.</blockquote>
      <p>Obelix in <cite>De ronde van Gallia</cite></p>
`,
      codeStyle: ``,
      captionNumber: '',
      captionText: ''
    },
    {
      chapterNumber: '3',
      exampleNumber: '15',
      id: '315',
      title: 'Ongeordende lijst',
      code: `<p>Volg deze stappen:</p>
<ol>
  <li>Klik op Start.</li>
  <li>Klik op Doorgaan.</li>
  <li>Klik op Voltooien.</li>
  <li>Klik op OK.</li>
</ol>
<p>Als het misgaat doet u het volgende:</p>
<ol start="5">
  <li>Klik op Probeer opnieuw.</li>
  <li>Klik op Herstel fabrieksinstellingen.</li>
  <li>Klik op OK.</li>
</ol> 
`,
      codeStyle: ``,
      captionNumber: '',
      captionText: ''
    },
    {
      chapterNumber: '3',
      exampleNumber: '16',
      id: '316',
      title: 'Geordende lijst',
      code: `<ol type="I">
  <li>Stroomvoorziening <!-- item niet afsluiten, de volgende lijst hoort bij dit onderwerp -->
    <ol type="1">
      <li>Kabel <!-- item niet afsluiten, de volgende lijst hoort bij dit onderwerp -->
        <ol type="a">
          <li>Apparaataansluiting</li>
          <li>Lichtnetaansluiting</li>
        </ol> <!-- einde letterlijst -->
      </li> <!-- einde item Kabel -->
      <li>Aan-uitschakelaar</li>
    </ol> <!-- einde nummerlijst -->
  </li> <!-- einde item Stroomvoorziening -->
  <li>Toetsenbord <!-- vervolg Romeinse lijst; de volgende lijst hoort bij dit onderwerp -->
    <ol>
      <li>Aansluiting</li>
    </ol>
  </li> <!-- einde item toetsenbord -->
</ol> <!-- einde Romeinse lijst -->
`,
      codeStyle: ``,
      captionNumber: '',
      captionText: ''
    },
    {
      chapterNumber: '3',
      exampleNumber: '17',
      id: '317',
      title: 'Ongeordende lijst',
      code: `<ul>
  <li>voorwiel
    <ul>
      <li>trommelrem</li>
      <li>naafdynamo</li>
    </ul>
  </li>
  <li>achterwiel</li>
  <li>stuur</li>
  <li>trappers</li>
</ul>
`,
      codeStyle: ``,
      captionNumber: '',
      captionText: ''
    },
    {
      chapterNumber: '3',
      exampleNumber: '18',
      id: '318',
      title: 'Ongeordende lijst',
      code: `<nav>
  <ul>
    <li><a href="index.html">Home</a></li>
    <li><a href="producten.html">Producten</a></li>
    <li><a href="diensten.html">Diensten</a></li>
    <li><a href="service.html">Klantenservice</a></li>
  </ul>
</nav>
`,
      codeStyle: ``,
      captionNumber: '',
      captionText: ''
    },
    {
      chapterNumber: '3',
      exampleNumber: '19',
      id: '319',
      title: 'Kop boven een lijst',
      code: `<h2>Recept voor stamppot boerenkool</h2>
<h3>Ingrediënten</h3>
<ul>
  <li>boerenkool</li>
  <li>aardappelen</li>
</ul>
<h3>Bereiding</h3>
  <ol>
    <li>Schil de aardappelen.</li>
    <li>Snij de boerenkool fijn.</li>
</ol>
`,
      codeStyle: ``,
      captionNumber: '',
      captionText: ''
    },
    {
      chapterNumber: '3',
      exampleNumber: '20',
      id: '320',
      title: 'Lijst als illustratie',
      code: `<figure>
  <figcaption>Kenmerken van onze fietsen</figcaption>
  <ul>
    <li>voorwiel
      <ul>
        <li>trommelrem</li>
        <li>naafdynamo</li>
      </ul>
    </li>
    <li>achterwiel</li>
    <li>stuur</li>
    <li>trappers</li>
  </ul>
</figure>
`,
      codeStyle: ``,
      captionNumber: '',
      captionText: ''
    },
    {
      chapterNumber: '3',
      exampleNumber: '21',
      id: '321',
      title: 'Illustratie met bijschrift',
      code: `<figure>
  <figcaption>Chips, van veld naar zak</figcaption>
  <figure> 
    <img src="/assets/voorbeelden/aardappelveld.jpg" alt="Aardappels op het veld." loading="lazy">
    <figcaption>De aardappels staan op het veld.</figcaption>
  </figure>
  <figure> 
    <img src="/assets/voorbeelden/fabriek.jpg" alt="Aardappels in de fabriek." loading="lazy">
    <figcaption>De aardappels worden verwerkt in de fabriek.</figcaption>
  </figure>
  <figure> 
    <img src="/assets/voorbeelden/chips.jpg" alt="Chips in zakken." loading="lazy">
    <figcaption>De zakken chips staan klaar voor de consument.</figcaption>
  </figure>
</figure>
`,
      codeStyle: `
      img {
        inline-size: 100%;
        max-inline-size: 400px;
        block-size: auto;
      }
      figure {
        margin: 0;
      }
      figcaption {
        margin-block-end: 1em
      }`,
      captionNumber: '',
      captionText: ''
    },
    {
      chapterNumber: '3',
      exampleNumber: '22',
      id: '322',
      title: 'Definitielijst',
      code: `
<h2>Handboek HTML 5 en CSS</h2>
<dl> 
	<dt>ISBN</dt>
	<dd>978-94-6356-264-5</dd>
	<dt>NUR</dt>
	<dd>994</dd>
	<dt>Trefwoorden</dt>
	<dd>Webdesign</dd>
	<dd>Internet</dd>
</dl>
<h2>Veelgestelde vragen</h2>
<dl>
  <dt>Hoe markeer ik een kop?</dt>
  <dd>Met de elementen &lt;h1&gt; tot &lt;h6&gt;.</dd>
  <dt>Hoe markeer ik een alinea?</dt>
  <dd>Met het element &lt;p&gt;.</dd>
  <dt>Hoe markeer ik een FAQ?</dt>
  <dd>Met de elementen &lt;dl&gt;, &lt;dt&gt; en &lt;dd&gt;.</dd>
</dl>
<h2>Lijst van afkortingen</h2>
<dl>
  <dt><dfn>HTML</dfn></dt>
  <dd>Hypertext Markup Language</dd>
  <dt><dfn>CSS</dfn></dt>
  <dd>Cascading Style Sheets</dd>
</dl>
`,
      codeStyle: `
      dt {
        font-weight: 500;
      }
      `,
      captionNumber: '',
      captionText: ''
    },
    {
      chapterNumber: '4',
      exampleNumber: '1',
      id: '41',
      title: 'Toegankelijke linktekst',
      code: `
<a href="#" aria-label="Voormalige Britse politicus Clegg wordt rechterhand Zuckerberg bij Meta">
    <h3>Voormalige Britse politicus Clegg wordt rechterhand Zuckerberg bij Meta</h3>
    <p>In zijn nieuwe functie ... </p>
    <img src="" alt="">
</a>
<a href="#" aria-labelledby="id1">
    <h3 id="id1">Voormalige Britse politicus Clegg wordt rechterhand Zuckerberg bij Meta</h3>
    <p>In zijn nieuwe functie ... </p>
    <img src="" alt="">
</a>
`,
      codeStyle: ``,
      captionNumber: '',
      captionText: ''
    },
    {
      chapterNumber: '4',
      exampleNumber: '2',
      id: '42',
      title: 'Downloadlink',
      code: `<div>
  <a href="/assets/voorbeelden/zonnebloem.jpg" download>
    <img src="/assets/voorbeelden/zonnebloem.jpg" alt="Zonnebloemen in bloei" loading="lazy">
    <span>Download een zonnebloem!</span>
  </a>
</div>
`,
      codeStyle: `a {
        display: flex;
        column-gap: 1em;
      }
      img {
        block-size: 120px;
        inline-size: auto;
      }`,
      captionNumber: '',
      captionText: ''
    },
    {
      chapterNumber: '4',
      exampleNumber: '3',
      id: '43',
      title: 'Bladwijzer',
      code: `<p>De bovenkant van deze pagina heeft een bladwijzer met de naam <code>#top</code>.</p>
<p>Met <a href="#top">deze link</a> navigeert u omhoog. Met de knop <strong>Terug</strong> brengt de browser u terug naar dit punt.</p>
`,
      codeStyle: ``,
      captionNumber: '',
      captionText: ''
    },
    {
      chapterNumber: '4',
      exampleNumber: '4',
      id: '44',
      title: 'Link naar een grote foto',
      code: `<a href="/assets/voorbeelden/ballonnen_groot.webp">
  <img src="/assets/voorbeelden/ballonnen_klein.webp" alt="Heteluchtballonnen boven een meer">
</a>
`,
      codeStyle: `
      img {
        block-size: 120px;
        aspect-ratio: 300/199;
      }`,
      captionNumber: '',
      captionText: ''
    },
    {
      chapterNumber: '4',
      exampleNumber: '5',
      id: '45',
      title: 'E-maillink',
      code: `<a href="mailto:reacties@handboek-html-css.nl?Subject=Vraag over hyperlinks" rel="author">Mail de auteur.</a>`,
      codeStyle: ``,
      captionNumber: '',
      captionText: ''
    },
    {
      chapterNumber: '4',
      exampleNumber: '6',
      id: '46',
      title: 'Telefoonlink',
      code: `<a href="tel:+31612345678">Bel 06-12345678</a>`,
      codeStyle: ``,
      captionNumber: '',
      captionText: ''
    },
    {
      chapterNumber: '4',
      exampleNumber: '7',
      id: '47',
      title: 'Link naar pdf',
      code: `<p>Lees de <a href="/assets/pdf/hoofdstuk4.pdf">pdf van hoofdstuk 4</a>. (Of <a href="/assets/pdf/hoofdstuk4.pdf" download="hoofdstuk 4">download de pdf</a>.)</p>`,
      codeStyle: ``,
      captionNumber: '',
      captionText: ''
    },
    {
      chapterNumber: '4',
      exampleNumber: '8',
      id: '48',
      title: 'Klikbare kaart, korte linktekst',
      code: `<article class="clickable" lang="nl">
  <h2><a href="https://example.com">Eenvoudige klikbare kaart</a></h2>
  <p>Maak een artikel of lijstitem en geef de het <code>position: relative</code>. Maak van de kop een link.</p>
  <p>Geef de link een pseudo-element <code>::after</code> (<code>::before</code> kan ook) en geef dat <code>position: absolute</code>. Stel alle zijden in op 0 zodat het de container bedekt. </p>
  <p>Nu is het hele blok klikbaar, terwijl de toegankelijke tekst alleen bestaat uit de kop. Ook staat alleen de kop in de tabvolgorde. </p>
  <p>Nadeel: de tekst is alleen te selecteren door de hele kaart te selecteren.</p>
</article>`,
      codeStyle: `.clickable {
  border-radius: 0.25rem;
  border: 1px solid hsl(0 0% 0% / 0.2);
  max-width: 60ch;
  padding: 0.5rem;
  position: relative;
  transition: box-shadow 150ms ease-out;
}
.clickable:hover,
.clickable:focus-within {
  box-shadow: 1px 1px 4px 2px hsl(0 0% 0% / 0.2);
}
.clickable a::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

body {
  display: grid;
  font: 1.125rem / 1.25 -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  min-height: 100vh;
  place-content: center;
}

a:any-link {
  text-decoration: none;
  color: inherit;
}
`,
      captionNumber: '',
      captionText: ''
    },
    {
      chapterNumber: '5',
      exampleNumber: '1',
      id: '51',
      title: 'SVG-afbeelding',
      code: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 100">
  <circle cx="50" cy="50" r="45" style="fill:#F00;stroke:#000"/>
</svg>`,
      codeStyle: `
      svg {
        inline-size: 50%;
        block-size: auto;
        }
        `,
      captionNumber: '',
      captionText: ''
    },
    {
      chapterNumber: '5',
      exampleNumber: '2',
      id: '52',
      title: 'Usemap',
      code: `
<img src="/assets/voorbeelden/usemap.png" usemap="#vormen" alt="Een vierkant, een cirkel en een driehoek." loading="lazy">
<map name="vormen">
  <area shape="rect" coords="30,25, 225,225" href="/">
  <area shape="circle" coords="360,120,100" href="/">
  <area shape="poly" coords="450,225, 650,225, 550,25" href="/">
</map>
`,
      codeStyle: `
      img {
        display: inline-block;
        inline-size: 100%;
        block-size: auto;
      }`,
      captionNumber: '',
      captionText: ''
    },
    {
      chapterNumber: '5',
      exampleNumber: '3',
      id: '53',
      title: 'Srcset dpi',
      code: `
<img src="/assets/voorbeelden/waterlelie_640.webp"
     width="640"
     height="423"
     alt="Een bloeiende waterlelie." 
     srcset="/assets/voorbeelden/waterlelie_640.webp 1x, 
             /assets/voorbeelden/waterlelie_1280.webp 2x, 
             /assets/voorbeelden/waterlelie_1920.webp 3x,
             /assets/voorbeelden/waterlelie_hires.webp"
     loading="lazy"
>
`,
      codeStyle: `
      img {
        display: inline-block;
        inline-size: 100%;
        block-size: auto;
      }`,
      captionNumber: '',
      captionText: ''
    },
    {
      chapterNumber: '5',
      exampleNumber: '4',
      id: '54',
      title: 'Srcset en sizes',
      code: `
<img src="/assets/voorbeelden/waterlelie_640.webp"
     width="640"
     height="423"
     alt="Een bloeiende waterlelie."
     srcset="/assets/voorbeelden/waterlelie_640.webp 640w, 
             /assets/voorbeelden/waterlelie_1280.webp 1280w, 
             /assets/voorbeelden/waterlelie_1920.webp 1920w,
             /assets/voorbeelden/waterlelie_1920.webp 1920w"
     sizes="(max-width: 1024px) 100vw 50vw"
     loading="lazy"
     >
`,
      codeStyle: `
      img {
        display: inline-block;
        inline-size: 100%;
        block-size: auto;
      }`,
      captionNumber: '',
      captionText: ''
    },
    {
      chapterNumber: '5',
      exampleNumber: '5',
      id: '55',
      title: 'Picture',
      code: `
<picture>
  <source media="(max-width: 360px)" srcset="/assets/voorbeelden/zeilschip-320.webp">
  <source media="(max-width: 800px)" srcset="/assets/voorbeelden/zeilschip-800.webp">
  <source media="(max-width: 1024px)" srcset="/assets/voorbeelden/zeilschip-1024.webp">
  <source srcset="/assets/voorbeelden/zeilschip-1920.webp">
  <img src="/assets/voorbeelden/zeilschip-1024.webp" alt="Zeilschip op zee bij ondergaande zon." loading="lazy">
</picture>
`,
      codeStyle: `
      img {
        display: inline-block;
        inline-size: 100%;
        block-size: auto;
      }`,
      captionNumber: '',
      captionText: ''
    },
    {
      chapterNumber: '5',
      exampleNumber: '6',
      id: '56',
      title: 'Resolutie en afmeting',
      code: `
<picture>
  <source media="(min-width: 1024px)" srcset="/assets/voorbeelden/waterlelie_1024.webp 1x, /assets/voorbeelden/waterlelie_2048.webp 2x">
  <img src="/assets/voorbeelden/waterlelie_640.webp" alt="Bloem van een waterlelie">
</picture>
`,
      codeStyle: `
      img {
        display: inline-block;
        inline-size: 100%;
        block-size: auto;
      }`,
      captionNumber: '',
      captionText: ''
    },
    {
      chapterNumber: '5',
      exampleNumber: '7',
      id: '57',
      title: 'Browser bestandsformaat laten kiezen',
      code: `
<picture>
  <source srcset="/assets/voorbeelden/mark-harpur-748500-unsplash.avif" type="image/avif">
  <source srcset="/assets/voorbeelden/mark-harpur-748500-unsplash.webp" type="image/webp">
 <img src="/assets/voorbeelden/mark-harpur-748500-unsplash.jpg" alt="" width="1024" height="683" loading="lazy">
</picture>
`,
      codeStyle: `
      img {
        display: inline-block;
        inline-size: 100%;
        block-size: auto;
      }`,
      captionNumber: '',
      captionText: ''
    },
    {
      chapterNumber: '5',
      exampleNumber: '8',
      id: '58',
      title: 'Video aanbieden',
      code: `
<video controls preload="metadata" width="640" height="360" poster="/assets/voorbeelden/big-buck-bunny_poster.jpg">
  <source src="/assets/voorbeelden/big_buck_bunny.mp4" type="video/mp4">
  <source src="/assets/voorbeelden/big_buck_bunny.ogv" type="video/ogg">
  <source src="/assets/voorbeelden/big_buck_bunny.webm" type="video/webm">
    <p>Upgrade uw browser. Intussen kunt u <a href="/assets/voorbeelden/big_buck_bunny.mov">de film</a> downloaden.</p>
</video>
`,
      codeStyle: ``,
      captionNumber: '',
      captionText: ''
    },
    {
      chapterNumber: '5',
      exampleNumber: '9',
      id: '59',
      title: 'Video met ondertitels',
      code: `
<video src="/assets/voorbeelden/wildlife.mp4" poster="/assets/voorbeelden/wildlife_poster.png" controls preload="metadata" width="512" height="512">
  <track kind="subtitles" src="/assets/voorbeelden/wildlife_subtitles.vtt" srclang="nl" label="Nederlands" default>
  <track kind="subtitles" src="/assets/voorbeelden/wildlife_subtitles2.vtt" srclang="en" label="English">
</video>
`,
      codeStyle: ``,
      captionNumber: '',
      captionText: ''
    },
    {
      chapterNumber: '7',
      exampleNumber: '1',
      id: '71',
      title: 'Tabel met kolomgroepen',
      code: `
  <table>
    <caption>Tabel 1. Tijdlijn van HTML-specificaties.</caption>
    <colgroup>
      <col span="4">
      <col span="5">
    </colgroup>
    <thead>
    <tr>
      <th colspan="4" scope="col">Prehistorie</th>
      <th colspan="5" scope="col">Moderne tijd</th>
    </tr>
    </thead>
    <tr>
      <td>1995</td>
      <td>1997</td>
      <td>1998</td>
      <td>1999</td>
      <td>2014</td>
      <td>2016</td>
      <td>2018</td>
      <td>2020</td>
      <td>2021 tot nu</td>
    </tr>
    <tr>
      <td>HTML 2.0</td>
      <td>HTML 3.2</td>
      <td>HTML 4.0</td>
      <td>HTML 4.01</td>
      <td>HTML 5</td>
      <td>HTML 5.1</td>
      <td>HTML 5.2</td>
      <td>HTML 5.3</td>
      <td>HTML Living Standard</td>
    </tr>
  </table>
`,
      codeStyle: `
      table {
      border-collapse: collapse; /* voegt de randen samen tot 1 rand */
      box-shadow: 0 1px 1px hsl(0 0% 0% / 0.25),
      0 2px 2px hsl(0 0% 0% / 0.20),
      0 4px 4px hsl(0 0% 0% / 0.15),
      0 8px 8px hsl(0 0% 0% / 0.10),
      0 16px 16px hsl(0 0% 0% / 0.05);
      margin: 2rem 0;
      padding: 1rem;
      inline-size: auto;
    }

    colgroup > col {
      background: #eeeeee;
    }

    colgroup > col:last-child {
      background: #cccccc;
    }

    /*hier staat: selecteer elk element td of th dat niet leeg is*/
    :is(td, th):not(:empty) {
      border: 1px solid black;
      padding: 4px;
      text-align: center;
    }`,
      captionNumber: '',
      captionText: ''
    },
    {
      chapterNumber: '7',
      exampleNumber: '2',
      id: '72',
      title: 'Tabel met lege hoekcel',
      code: `
  <table>
    <tr>
      <th></th>
      <th scope="col">Product 1</th>
      <th scope="col">Product 2</th>
      <th scope="col">Product 3</th>
    </tr>
    <tr>
      <th scope="row">Kenmerk 1</th>
      <td>ja</td>
      <td>ja</td>
      <td>nee</td>
    </tr>
    <tr>
      <th scope="row">Kenmerk 2</th>
      <td>ja</td>
      <td>ja</td>
      <td>ja</td>
    </tr>
    <tr>
      <th scope="row">Kenmerk 3</th>
      <td>nee</td>
      <td>nee</td>
      <td>ja</td>
    </tr>
  </table>
`,
      codeStyle: `
      table {
      border-collapse: collapse; /* voegt de randen samen tot 1 rand */
      box-shadow: 0 1px 1px hsl(0 0% 0% / 0.25),
      0 2px 2px hsl(0 0% 0% / 0.20),
      0 4px 4px hsl(0 0% 0% / 0.15),
      0 8px 8px hsl(0 0% 0% / 0.10),
      0 16px 16px hsl(0 0% 0% / 0.05);
      margin: 2rem 0;
      padding: 1rem;
      inline-size: auto;
    }

    /*hier staat: selecteer elk element td of th dat niet leeg is*/
    :is(td, th):not(:empty) {
      border: 1px solid black;
      padding: 4px;
      text-align: center;
    }`,
      captionNumber: '',
      captionText: ''
    },
    {
      chapterNumber: '7',
      exampleNumber: '3',
      id: '73',
      title: 'Tabel met verkoopresultaten',
      code: `
  <table>
    <caption>Verkopen in augustus</caption>
    <thead>
    <tr>
      <td></td>
      <td></td>
      <th colspan="3" scope="colgroup">Kleding</th>
      <th colspan="2" scope="colgroup">Accessoires</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td></td>
      <td></td>
      <th scope="col">Broeken</th>
      <th scope="col">Rokken</th>
      <th scope="col">Jurken</th>
      <th scope="col">Armbanden</th>
      <th scope="col">Ringen</th>
    </tr>
    <tr>
      <th rowspan="3" scope="rowgroup">België</th>
      <th scope="row">Antwerpen</th>
      <td>56</td>
      <td>22</td>
      <td>43</td>
      <td>72</td>
      <td>23</td>
    </tr>
    <tr>
      <th scope="row">Gent</th>
      <td>46</td>
      <td>18</td>
      <td>50</td>
      <td>61</td>
      <td>15</td>
    </tr>
    <tr>
      <th scope="row">Brussel</th>
      <td>51</td>
      <td>27</td>
      <td>38</td>
      <td>69</td>
      <td>28</td>
    </tr>
    <tr>
      <th rowspan="2" scope="rowgroup">Nederland</th>
      <th scope="row">Amsterdam</th>
      <td>89</td>
      <td>34</td>
      <td>69</td>
      <td>85</td>
      <td>38</td>
    </tr>
    <tr>
      <th scope="row">Utrecht</th>
      <td>80</td>
      <td>12</td>
      <td>43</td>
      <td>36</td>
      <td>19</td>
    </tr>
    </tbody>
  </table>
`,
      codeStyle: `
      table {
      border-collapse: collapse; /* voegt de randen samen tot 1 rand */
      box-shadow: 0 1px 1px hsl(0 0% 0% / 0.25),
      0 2px 2px hsl(0 0% 0% / 0.20),
      0 4px 4px hsl(0 0% 0% / 0.15),
      0 8px 8px hsl(0 0% 0% / 0.10),
      0 16px 16px hsl(0 0% 0% / 0.05);
      margin: 2rem 0;
      padding: 1rem;
      inline-size: auto;
    }

    /*hier staat: selecteer elk element td of th dat niet leeg is*/
    :is(td, th):not(:empty) {
      border: 1px solid black;
      padding: 4px;
      text-align: center;
    }`,
      captionNumber: '',
      captionText: ''
    },
    {
      chapterNumber: '10',
      exampleNumber: '1',
      id: '101',
      title: 'Remake nos.nl met CSS Grid Layout',
      code: `
          <article>
            <h3>Remake nos.nl met CSS Grid Layout</h3>
            <p>Voor het boek is de website nos.nl <a href="nos_voorbeeld.html">nagebouwd met gridlay-out</a>. (Het origineel gebruikt flexbox.) De uitleg bij deze grid-versie staat in het boek.</p>
            <p>De broncode is op twee manieren te kopi&euml;ren.</p>
            <h4>Methode 1</h4>
            <ol>
              <li>Rechtsklik in de code, kies <strong>Paginabron weergeven</strong>.</li>
              <li>Klik in de pagina met de code, druk op Ctrl+A en druk op Ctrl+C.</li>
              <li>Plak de code in een leeg HTML-bestand.</li>
            </ol>
            <h4>Methode 2</h4>
            <ol>
              <li>Open DevTools en activeer het tabblad <strong>Elementen</strong>.</li>
              <li>Rechtsklik in de codeweergave op het element <code>html</code> en kies de optie <strong>Kopi&euml;ren</strong>, <strong>OuterHTML kopi&euml;ren</strong>. Wilt u niet alle code uit de head, kopieer dan de outerHTML van body.</li>
              <li>Plak de code in een nieuw HTML-bestand.</li>
            </ol>
          </article>`,
      codeStyle: ``,
      captionNumber: '',
      captionText: ''
    },
    {
      chapterNumber: '6',
      exampleNumber: '1',
      id: '61',
      title: 'Verschillende formulieren',
      code: `
<article>
  <h3>Voorbeelden van formulieren</h3>
  <p>Aan voorbeelden van meer soorten formulieren wordt gewerkt.</p>
  <ul>
    <li>
      <a href="form-aanmelden.php">Voorbeeld van een aanmeldingsformulier</a>
    </li>
  </ul>
  <p>De broncode van de formulieren is op twee manieren te kopi&euml;ren.</p>
  <h4>Methode 1</h4>
  <ol>
    <li>Rechtsklik in de code, kies <strong>Paginabron weergeven</strong>.</li>
    <li>Klik in de pagina met de code, druk op Ctrl+A en druk op Ctrl+C.</li>
    <li>Plak de code in een leeg HTML-bestand.</li>
  </ol>
  <h4>Methode 2</h4>
  <ol>
    <li>Open DevTools en activeer het tabblad <strong>Elementen</strong>.</li>
    <li>Rechtsklik in de codeweergave op het element <code>html</code> en kies de optie <strong>Kopi&euml;ren</strong>, <strong>OuterHTML kopi&euml;ren</strong>. Wilt u niet alle code uit de head, kopieer dan de outerHTML van body.</li>
    <li>Plak de code in een nieuw HTML-bestand.</li>
  </ol>      
</article>`,
      codeStyle: ``,
      captionNumber: '',
      captionText: ''
    },
    {
      chapterNumber: '8',
      exampleNumber: '1',
      id: '81',
      title: 'Cascade layers, volgorde telt',
      code: `
<p>Verander de volgorde van de lagen en kijk wat dat doet met de tekstkleur.</p>
<p><a href="">Wordt de link green, indianred of deepskyblue?</a></p>
`,
      codeStyle: `
      @layer reset, base, theme;
  
@layer reset {
   p a {
      color: green;
   }
}
@layer base {
   a.link {
      color: indianred;
   }
}
@layer theme {
   a {
      color: deepskyblue;
   }
}
`,
      captionNumber: '',
      captionText: ''
    },
    {
      chapterNumber: '8',
      exampleNumber: '2',
      id: '82',
      title: 'Cascade layers, regels buiten een laag gaan voor',
      code: `
<p>Varieer de plaats van de chocolate-opmaakregel en kijk wat dat doet met de tekstkleur.</p>
<p><a href="">Wordt de link chocolat, green, indianred of deepskyblue?</a></p>
`,
      codeStyle: `
@layer reset, base, theme;
  
a {
  color: chocolate;
}
  
@layer reset {
   p a {
      color: green;
   }
}
@layer base {
   a.link {
      color: indianred;
   }
}
@layer theme {
   a {
      color: deepskyblue;
   }
}
`,
      captionNumber: '',
      captionText: ''
    },
  ];
