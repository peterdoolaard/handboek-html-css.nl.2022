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
\t
\t
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
\t<li>Stroomvoorziening <!-- item niet afsluiten, de volgende lijst hoort bij dit onderwerp -->
\t\t<ol type="1">
\t\t\t<li>Kabel <!-- item niet afsluiten, de volgende lijst hoort bij dit onderwerp -->
\t\t\t\t<ol type="a">
\t\t\t\t\t<li>Apparaataansluiting</li>
\t\t\t\t\t<li>Lichtnetaansluiting</li>
\t\t\t\t</ol> <!-- einde letterlijst -->
\t\t\t</li> <!-- einde item Kabel -->
\t\t\t<li>Aan-uitschakelaar</li>
\t\t</ol> <!-- einde nummerlijst -->
\t</li> <!-- einde item Stroomvoorziening -->
\t<li>Toetsenbord <!-- vervolg Romeinse lijst; de volgende lijst hoort bij dit onderwerp -->
\t\t<ol>
\t\t\t<li>Aansluiting</li>
\t\t</ol>
\t</li> <!-- einde item toetsenbord -->
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
\t<li>voorwiel
\t\t<ul>
\t\t\t<li>trommelrem</li>
\t\t\t<li>naafdynamo</li>
\t\t</ul>
\t</li>
\t<li>achterwiel</li>
\t<li>stuur</li>
\t<li>trappers</li>
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
\t<ul>
\t\t<li><a href="index.html">Home</a></li>
\t\t<li><a href="producten.html">Producten</a></li>
\t\t<li><a href="diensten.html">Diensten</a></li>
\t\t<li><a href="service.html">Klantenservice</a></li>
\t</ul>
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
\t<li>boerenkool</li>
\t<li>aardappelen</li>
</ul>
<h3>Bereiding</h3>
\t<ol>
\t\t<li>Schil de aardappelen.</li>
\t\t<li>Snij de boerenkool fijn.</li>
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
\t<figcaption>Kenmerken van onze fietsen</figcaption>
\t<ul>
\t\t<li>voorwiel
\t\t\t<ul>
\t\t\t\t<li>trommelrem</li>
\t\t\t\t<li>naafdynamo</li>
\t\t\t</ul>
\t\t</li>
\t\t<li>achterwiel</li>
\t\t<li>stuur</li>
\t\t<li>trappers</li>
\t</ul>
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
\t<figcaption>Chips, van veld naar zak</figcaption>
\t<figure> 
\t\t<img src="/assets/voorbeelden/aardappelveld.jpg" alt="Aardappels op het veld." loading="lazy">
\t\t<figcaption>De aardappels staan op het veld.</figcaption>
\t</figure>
\t<figure> 
\t\t<img src="/assets/voorbeelden/fabriek.jpg" alt="Aardappels in de fabriek." loading="lazy">
\t\t<figcaption>De aardappels worden verwerkt in de fabriek.</figcaption>
\t</figure>
\t<figure> 
\t\t<img src="/assets/voorbeelden/chips.jpg" alt="Chips in zakken." loading="lazy">
\t\t<figcaption>De zakken chips staan klaar voor de consument.</figcaption>
\t</figure>
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
\t<dt>Hoe markeer ik een kop?</dt>
\t<dd>Met de elementen &lt;h1&gt; tot &lt;h6&gt;.</dd>
\t<dt>Hoe markeer ik een alinea?</dt>
\t<dd>Met het element &lt;p&gt;.</dd>
\t<dt>Hoe markeer ik een FAQ?</dt>
\t<dd>Met de elementen &lt;dl&gt;, &lt;dt&gt; en &lt;dd&gt;.</dd>
</dl>
<h2>Lijst van afkortingen</h2>
<dl>
\t<dt><dfn>HTML</dfn></dt>
\t<dd>Hypertext Markup Language</dd>
\t<dt><dfn>CSS</dfn></dt>
\t<dd>Cascading Style Sheets</dd>
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
\t\t<h3>Voormalige Britse politicus Clegg wordt rechterhand Zuckerberg bij Meta</h3>
\t\t<p>In zijn nieuwe functie ... </p>
\t\t<img src="" alt="">
</a>
<a href="#" aria-labelledby="id1">
\t\t<h3 id="id1">Voormalige Britse politicus Clegg wordt rechterhand Zuckerberg bij Meta</h3>
\t\t<p>In zijn nieuwe functie ... </p>
\t\t<img src="" alt="">
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
<img src="/assets/voorbeelden/usemap.png" usemap="#vormen">
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
             /assets/voorbeelden/waterlelie_hires.webp">
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
     sizes="(max-width: 1024px) 100vw 50vw">
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
  <img src="/assets/voorbeelden/zeilschip-1024.webp" alt="Zeilschip op zee bij ondergaande zon.">
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
 <img src="/assets/voorbeelden/mark-harpur-748500-unsplash.jpg" alt="" width="1024" height="683">
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
\t<table>
\t\t<caption>Tabel 1. Tijdlijn van HTML-specificaties.</caption>
\t\t<colgroup>
\t\t\t<col span="4">
\t\t\t<col span="5">
\t\t</colgroup>
\t\t<thead>
\t\t<tr>
\t\t\t<th colspan="4" scope="col">Prehistorie</th>
\t\t\t<th colspan="5" scope="col">Moderne tijd</th>
\t\t</tr>
\t\t</thead>
\t\t<tr>
\t\t\t<td>1995</td>
\t\t\t<td>1997</td>
\t\t\t<td>1998</td>
\t\t\t<td>1999</td>
\t\t\t<td>2014</td>
\t\t\t<td>2016</td>
\t\t\t<td>2018</td>
\t\t\t<td>2020</td>
\t\t\t<td>2021 tot nu</td>
\t\t</tr>
\t\t<tr>
\t\t\t<td>HTML 2.0</td>
\t\t\t<td>HTML 3.2</td>
\t\t\t<td>HTML 4.0</td>
\t\t\t<td>HTML 4.01</td>
\t\t\t<td>HTML 5</td>
\t\t\t<td>HTML 5.1</td>
\t\t\t<td>HTML 5.2</td>
\t\t\t<td>HTML 5.3</td>
\t\t\t<td>HTML Living Standard</td>
\t\t</tr>
\t</table>
`,
      codeStyle: `
      table {
\t\t\tborder-collapse: collapse; /* voegt de randen samen tot 1 rand */
\t\t\tbox-shadow: 0 1px 1px hsl(0 0% 0% / 0.25),
\t\t\t0 2px 2px hsl(0 0% 0% / 0.20),
\t\t\t0 4px 4px hsl(0 0% 0% / 0.15),
\t\t\t0 8px 8px hsl(0 0% 0% / 0.10),
\t\t\t0 16px 16px hsl(0 0% 0% / 0.05);;
\t\t\tmargin: 2rem 0;
\t\t\tpadding: 1rem;
\t\t\tinline-size: auto;
\t\t}

\t\tcolgroup > col {
\t\t\tbackground: #eeeeee;
\t\t}

\t\tcolgroup > col:last-child {
\t\t\tbackground: #cccccc;
\t\t}

\t\t/*hier staat: selecteer elk element td of th dat niet leeg is*/
\t\t:is(td, th):not(:empty) {
\t\t\tborder: 1px solid black;
\t\t\tpadding: 4px;
\t\t\ttext-align: center;
\t\t}`,
      captionNumber: '',
      captionText: ''
    },
    {
      chapterNumber: '7',
      exampleNumber: '2',
      id: '72',
      title: 'Tabel met lege hoekcel',
      code: `
\t<table>
\t\t<tr>
\t\t\t<th></th>
\t\t\t<th scope="col">Product 1</th>
\t\t\t<th scope="col">Product 2</th>
\t\t\t<th scope="col">Product 3</th>
\t\t</tr>
\t\t<tr>
\t\t\t<th scope="row">Kenmerk 1</th>
\t\t\t<td>ja</td>
\t\t\t<td>ja</td>
\t\t\t<td>nee</td>
\t\t</tr>
\t\t<tr>
\t\t\t<th scope="row">Kenmerk 2</th>
\t\t\t<td>ja</td>
\t\t\t<td>ja</td>
\t\t\t<td>ja</td>
\t\t</tr>
\t\t<tr>
\t\t\t<th scope="row">Kenmerk 3</th>
\t\t\t<td>nee</td>
\t\t\t<td>nee</td>
\t\t\t<td>ja</td>
\t\t</tr>
\t</table>
`,
      codeStyle: `
      table {
\t\t\tborder-collapse: collapse; /* voegt de randen samen tot 1 rand */
\t\t\tbox-shadow: 0 1px 1px hsl(0 0% 0% / 0.25),
\t\t\t0 2px 2px hsl(0 0% 0% / 0.20),
\t\t\t0 4px 4px hsl(0 0% 0% / 0.15),
\t\t\t0 8px 8px hsl(0 0% 0% / 0.10),
\t\t\t0 16px 16px hsl(0 0% 0% / 0.05);;
\t\t\tmargin: 2rem 0;
\t\t\tpadding: 1rem;
\t\t\tinline-size: auto;
\t\t}

\t\t/*hier staat: selecteer elk element td of th dat niet leeg is*/
\t\t:is(td, th):not(:empty) {
\t\t\tborder: 1px solid black;
\t\t\tpadding: 4px;
\t\t\ttext-align: center;
\t\t}`,
      captionNumber: '',
      captionText: ''
    },
    {
      chapterNumber: '7',
      exampleNumber: '3',
      id: '73',
      title: 'Tabel met verkoopresultaten',
      code: `
\t<table>
\t\t<caption>Verkopen in augustus</caption>
\t\t<thead>
\t\t<tr>
\t\t\t<td></td>
\t\t\t<td></td>
\t\t\t<th colspan="3" scope="colgroup">Kleding</th>
\t\t\t<th colspan="2" scope="colgroup">Accessoires</th>
\t\t</tr>
\t\t</thead>
\t\t<tbody>
\t\t<tr>
\t\t\t<td></td>
\t\t\t<td></td>
\t\t\t<th scope="col">Broeken</th>
\t\t\t<th scope="col">Rokken</th>
\t\t\t<th scope="col">Jurken</th>
\t\t\t<th scope="col">Armbanden</th>
\t\t\t<th scope="col">Ringen</th>
\t\t</tr>
\t\t<tr>
\t\t\t<th rowspan="3" scope="rowgroup">België</th>
\t\t\t<th scope="row">Antwerpen</th>
\t\t\t<td>56</td>
\t\t\t<td>22</td>
\t\t\t<td>43</td>
\t\t\t<td>72</td>
\t\t\t<td>23</td>
\t\t</tr>
\t\t<tr>
\t\t\t<th scope="row">Gent</th>
\t\t\t<td>46</td>
\t\t\t<td>18</td>
\t\t\t<td>50</td>
\t\t\t<td>61</td>
\t\t\t<td>15</td>
\t\t</tr>
\t\t<tr>
\t\t\t<th scope="row">Brussel</th>
\t\t\t<td>51</td>
\t\t\t<td>27</td>
\t\t\t<td>38</td>
\t\t\t<td>69</td>
\t\t\t<td>28</td>
\t\t</tr>
\t\t<tr>
\t\t\t<th rowspan="2" scope="rowgroup">Nederland</th>
\t\t\t<th scope="row">Amsterdam</th>
\t\t\t<td>89</td>
\t\t\t<td>34</td>
\t\t\t<td>69</td>
\t\t\t<td>85</td>
\t\t\t<td>38</td>
\t\t</tr>
\t\t<tr>
\t\t\t<th scope="row">Utrecht</th>
\t\t\t<td>80</td>
\t\t\t<td>12</td>
\t\t\t<td>43</td>
\t\t\t<td>36</td>
\t\t\t<td>19</td>
\t\t</tr>
\t\t</tbody>
\t</table>
`,
      codeStyle: `
      table {
\t\t\tborder-collapse: collapse; /* voegt de randen samen tot 1 rand */
\t\t\tbox-shadow: 0 1px 1px hsl(0 0% 0% / 0.25),
\t\t\t0 2px 2px hsl(0 0% 0% / 0.20),
\t\t\t0 4px 4px hsl(0 0% 0% / 0.15),
\t\t\t0 8px 8px hsl(0 0% 0% / 0.10),
\t\t\t0 16px 16px hsl(0 0% 0% / 0.05);;
\t\t\tmargin: 2rem 0;
\t\t\tpadding: 1rem;
\t\t\tinline-size: auto;
\t\t}

\t\t/*hier staat: selecteer elk element td of th dat niet leeg is*/
\t\t:is(td, th):not(:empty) {
\t\t\tborder: 1px solid black;
\t\t\tpadding: 4px;
\t\t\ttext-align: center;
\t\t}`,
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
  <p>Aan voorbeelden van diverse soorten formulieren wordt gewerkt. Deze worden binnenkort geplaatst, inclusief voorbeelden van PHP-code om de formulieren op de server te verwerken.</p>
  <ul>
    <li>
      <a href="form-aanmelden.php">Aanmeldingsformulier</a>
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
\t
@layer reset {
 \tp a {
 \t \tcolor: green;
 \t}
}
@layer base {
 \ta.link {
 \t \tcolor: indianred;
 \t}
}
@layer theme {
 \ta {
 \t \tcolor: deepskyblue;
 \t}
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
\t
a {
  color: chocolate;
}
\t
@layer reset {
 \tp a {
 \t \tcolor: green;
 \t}
}
@layer base {
 \ta.link {
 \t \tcolor: indianred;
 \t}
}
@layer theme {
 \ta {
 \t \tcolor: deepskyblue;
 \t}
}
`,
      captionNumber: '',
      captionText: ''
    },
  ];
