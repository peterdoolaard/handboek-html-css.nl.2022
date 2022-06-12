let NAV_IS_FIXED = false;
const toTop = document.querySelector('.to-top');
const fixedNav = document.querySelector('.nav-main');
const pageWrapper = document.querySelector('.page-wrapper');
const navLink = document.querySelectorAll('.nav-main a');
const navList = document.querySelector('.nav-list');
const sliderBtn = document.querySelectorAll('.slider');

// Markeer in de navigatie de actieve optie en scroll de content in beeld
function setActivePage() {
  document.querySelectorAll('.nav-list a').forEach(elm => {
    if (elm.getAttribute('href') === document.location.hash) {
      elm.setAttribute('aria-current', 'page');
      const currentChapterWrapper = document.querySelector(elm.getAttribute('href'));
      let offsetCorrection;
      NAV_IS_FIXED ? offsetCorrection = 87 : offsetCorrection = 180;
      const offsetPosition = currentChapterWrapper.getBoundingClientRect().top + window.scrollY - offsetCorrection;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    } else {
      elm.removeAttribute('aria-current');
    }
  });
}

// Zoek en vervang de punthaken van de tags door tekenreferenties
function escapeMarkup(snippet) {
  return snippet.replaceAll(/\t/g, ' ').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
}

// Deze ResizeObserver houdt de breedte van de pageWrapper in de gaten
// en zorgt ervoor dat de navigatie altijd net zo breed is
// en dat de offset links gelijk is aan de marge van de pageWrapper.
// Dat is nodig omdat position: fixed werkt t.o.v. de viewport.
// Zonder correctie zou de navigatie dan niet op de goede plek staan.
function resizeFixedNav(entries) {
  entries.map(entry => {
    fixedNav.style.left = entry.borderBoxSize[0].marginBlockStart + 'px';
    fixedNav.style.inlineSize = entry.borderBoxSize[0].inlineSize + 'px';
  });
}

const observeFixedNav = new ResizeObserver(resizeFixedNav);
observeFixedNav.observe(pageWrapper);

// window.addEventListener('hashchange', setActivePage);

navLink.forEach(elm => elm.addEventListener('click', (event) => {
  if (event.target.getAttribute('href') !== '/') {
    event.preventDefault();
    window.location.hash = event.target.getAttribute('href');
    setActivePage();
  }
}));

function clearCurrentPage() {
  document.querySelectorAll('.nav-list a').forEach(elm => {
    if (elm.getAttribute('href') === document.location.hash) {
      elm.removeAttribute('aria-current');
    }
  });
}

toTop.addEventListener('click', (event) => {
  event.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
  clearCurrentPage()
  window.history.pushState(null, 'Test', '/');
});

// intersectionObserver maakt navigatie fixed
let navigationObserver = new IntersectionObserver(entries => {
  if (entries[0].boundingClientRect.y < 0) {
    fixedNav.classList.add('fixed');
    toTop.removeAttribute('hidden');
    NAV_IS_FIXED = true;
  } else {
    fixedNav.classList.remove('fixed');
    toTop.setAttribute('hidden', 'true');
    NAV_IS_FIXED = false;
  }
});
navigationObserver.observe(document.querySelector('#navigationobserver'));

// knoppen voor het horizontale menu
sliderBtn.forEach(btn => {
  btn.addEventListener('click', (event) => {
    if (event.currentTarget.classList.contains('slider-left')) {
      navList.scrollBy({ left: 500, top: 0, behavior: 'smooth' });
    }
    if (event.currentTarget.classList.contains('slider-right')) {
      navList.scrollBy({ left: -500, top: 0, behavior: 'smooth' });
    }
  });
});

const firstItem = document.querySelector('.nav-list > li:first-child > a');
const lastItem = document.querySelector('.nav-list > li:last-child > a');
let sliderObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.intersectionRatio === 1) {
      if (entry.target.innerHTML === firstItem.innerHTML) {
        sliderBtn[1].querySelector('.secondary').classList.add('inactive');
      } else {
        sliderBtn[0].querySelector('.secondary').classList.add('inactive');
      }
    }
    if (entry.intersectionRatio !== 1) {
      if (entry.target.innerHTML === firstItem.innerHTML) {
        sliderBtn[1].querySelector('.secondary').classList.remove('inactive');
      } else {
        sliderBtn[0].querySelector('.secondary').classList.remove('inactive');
      }
    }
  });
}, { root: document.querySelector('.nav-list'), rootMargin: '0px', threshold: 1 });
sliderObserver.observe(firstItem);
sliderObserver.observe(lastItem);

// web component voor de codevoorbeelden
class CodeExample extends HTMLElement {
  constructor(example) {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });
    const template = document.createElement('template');
    template.innerHTML = `
<link rel="stylesheet" href="/css/prism.css">
  <style>
  :host {
    font-family: initial;
  }
  
  a:any-link, button, [type="button"] {
    -webkit-tap-highlight-color: transparent;
  }
  
  .screen-reader-text:not(:focus):not(:active) {
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }
  
  .figure-container {
    margin: 1rem 1rem 3rem 0;
  }
  
  .figure-container__inner {
    box-shadow: var(--box-shadow-sharp);
    margin-block-end: 0.5rem;
    padding: 1rem;
  }
  
  .example-title {
    background: hsl(300deg 40% 90%);
    font-family: var(--font-sans), sans-serif;
    font-size: 1.4rem;
    font-weight: 500;
    margin-block: -1rem 2rem;
    margin-inline: -1rem;
    padding: 0.5rem 0.5rem 0.5rem 1rem;
  }
  
  .example-html {
    white-space: pre-wrap!important;
  }
  
  .code-wrapper pre {
    position: relative;
    overflow-x: auto;
  }
  
  .btn-copy-code {
    -webkit-appearance: none;
    background: url('/assets/icons/icon-duplicate.svg') no-repeat, hsl(0 0% 100% / 0);
    background-size: contain;
    block-size: 2.5rem;
    border: none;
    cursor: pointer;
    inline-size: 2.5rem;
    position: absolute;
    right: 0.25rem;
    top: 0.25rem;
    transition: transform ease-in-out 250ms;
  }
  
  .btn-copy-code-click {
    transform: scale(0.75);
  }
  
  div.alert {
    animation: fade 250ms ease-in forwards;
    box-shadow: var(--box-shadow-sharp);
    opacity: 0;
    padding: 0.5rem .75rem;
    position: absolute;
    right: 3.5rem;
    top: 0.25rem;
  }
  
  @keyframes fade {
    0% {
      opacity: 0
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 1;
    }
  }
  
  div.success {
    background: hsl(0 0% 90%);
  }
  
  div.failed {
    background: hsl(0 0% 90%);
  }
  
  .actions {
    display: flex;
    column-gap: 1em;
  }
  
  .code-edit__label {
    display: flex;
    font-family: var(--font-sans);
    inline-size: 8em;
    position: relative;
  }
  
  .code-edit__slider {
    background: hsl(300deg 0% 55%);
    block-size: 1.25em;
    border-radius: 0.6em;
    inline-size: 3em;
    position: absolute;
    left: 4.5em;
  }
  
  .code-edit__thumb {
    background: hsl(300deg 0% 85%);
    block-size: 1.7em;
    border-radius: 50%;
    inline-size: 1.7em;
    position: absolute;
    left: 4.4em;
    margin-block-start: -0.2em;
    transition: all 200ms ease-in-out; 
  }
  
  input:checked ~ .code-edit__thumb {
    background: hsl(300deg 40% 35%);
    left: 5.9em;
  }
  
  input:checked + .code-edit__slider {
    background: hsl(300deg 40% 85%);
    }
   
  .code-edit__label > input {
    opacity: 0;
  }
  
  .btn-reset-code {
    background: hsl(300deg 40% 85%);
    border: none;
    box-shadow: none;
    border-radius: 0.25em;
    color: inherit;
    font-size: inherit;
    opacity: 0;
    padding: 0.25em 0.5em; 
    transition: all 200ms ease-in-out;
  }
  
  .btn-reset-code:hover {
    background: hsl(300deg 40% 35%);
    color: white;
  }
    
  .btn-reset-code:active {
    box-shadow: inset var(--box-shadow-sharp) ;
    transform: scale(0.95);
  }
    
</style>
<figure class="figure-container" spellcheck="false">
    <div class="figure-container__inner"> <!-- custom element -->
      <div class="example">
        <style class="example-styles"></style>
        <h3 class="example-title"></h3>
        <div class="example-code"></div>
      </div>
      <div class="code-wrapper">
        <pre class="language-html">
          <button type="button" class="btn-copy-code"><span class="screen-reader-text">Kopieer de code</span></button>
          <code class="example-html" onpaste="return false"></code>
        </pre>
        <pre class="language-css">
          <button type="button" class="btn-copy-code"><span class="screen-reader-text">Kopieer de code</span></button>
          <code class="example-css"></code>
        </pre>
      </div>
      <div class="actions">
        <label class="code-edit__label">Bewerken
          <input type="checkbox">
          <span class="code-edit__slider"></span>
          <span class="code-edit__thumb"></span>
        </label>
        <button type="button" class="btn-reset-code">Herstellen</button>
      </div>
    </div>
    <figcaption>
    <span class="caption-number"></span><span class="caption-text"></span>
  </figcaption>
</figure>
`;
    shadowRoot.appendChild(template.content.cloneNode(true));
    if (example) {
      shadowRoot.querySelector('.btn-reset-code').setAttribute('id', `example-${ example.chapterNumber }${ example.exampleNumber }`);
      shadowRoot.querySelector('.example-title').innerHTML = `Voorbeeld ${ example.chapterNumber }.${ example.exampleNumber } &mdash; ${ example.title }`;
      shadowRoot.querySelector('.example-code').innerHTML = `${ example.code }`;
      // maak nu het codeblok
      let html;
      let css;
      if (example.code !== '') {
        html = `${ escapeMarkup(example.code) }`;
      } else {
        html = '';
      }
      if (example.codeStyle !== '') {
        css = `${ example.codeStyle }`;
      } else {
        css = '';
      }
      if (html) {
        shadowRoot.querySelector('.example-html').innerHTML = html;
      } else {
        shadowRoot.querySelector('pre.language-html').setAttribute('hidden', '');
      }
      if (css) {
        shadowRoot.querySelector('.example-css').innerHTML = css;
      } else {
        shadowRoot.querySelector('pre.language-css').setAttribute('hidden', '');
      }
      shadowRoot.querySelector('.example-styles').innerHTML = css;
    }

    // Maak de custom alert voor kopiëren naar klembord
    function createAlertElm(textNode, className) {
      const alertElm = document.createElement('div');
      const alertElmContent = document.createTextNode(textNode);
      alertElm.classList.add(...className);
      alertElm.appendChild(alertElmContent);
      return alertElm;
    }

    // Verwijder een element na een gegeven wachttijd
    function removeElm(parent, child, delay) {
      setTimeout(() => {
        parent.removeChild(child);
      }, delay);
    }

    // Kopieer voorbeeldcode naar het klembord
    function copyCode(event) {
      let codeWrapper = event.target.parentElement;
      if (!codeWrapper.querySelector('div.alert')) {
        let codeSnippet = codeWrapper.querySelector('code');
        navigator.clipboard.writeText(codeSnippet.innerText)
          .then(() => {
            codeWrapper.appendChild(createAlertElm('Code gekopieerd\nnaar klembord', [ 'alert', 'success' ]));
            let alertElm = codeWrapper.querySelector('div.alert');
            alertElm.focus();
            removeElm(codeWrapper, alertElm, 1000);
          }, () => {
            console.log('Kopiëren is niet toegestaan');
            codeWrapper.appendChild(createAlertElm('Kopiëren is niet toegestaan', [ 'alert', 'failed' ]));
            let alertElm = codeWrapper.querySelector('div.alert');
            removeElm(codeWrapper, alertElm, 1000);
          });
      }
    }

    // event listener voor de codekopieerknop
    this.shadowRoot.querySelectorAll('.btn-copy-code').forEach(btn => btn.addEventListener('click', copyCode));
    this.shadowRoot.querySelectorAll('.btn-copy-code').forEach(elm => elm.addEventListener('pointerdown', (event) => {
      event.target.classList.add('btn-copy-code-click');
    }));
    this.shadowRoot.querySelectorAll('.btn-copy-code').forEach(elm => elm.addEventListener('pointerup', (event) => {
      event.target.classList.remove('btn-copy-code-click');
    }));
    // event listener voor de resetknop
    this.shadowRoot.querySelector('.btn-reset-code').addEventListener('click', (event) => {
      const resetEditButton = event.target.previousElementSibling.querySelector('[type="checkbox"]');
      resetCode(resetEditButton);
    });

    // voorkom plakken, want dat veroorzaakt problemen
    this.shadowRoot.querySelectorAll('.code-wrapper').forEach( elm => { elm.addEventListener('paste', (event) => event.preventDefault())});

    // observeer wijzigingen van de voorbeeldcode
    // geeft ze door aan custom element
    const config = {
      attributes: false,
      subtree: true,
      childList: false,
      characterData: true,
      characterDataOldValue: false
    };
    const observeCodeWrapper = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        if (mutation.target.length > 0) {
          this.shadowRoot.querySelector('.btn-reset-code').style.opacity = '1';
          if (mutation.target.parentElement.classList.contains('example-html')) {
            this.shadowRoot.querySelector('.example-code').innerHTML = this.shadowRoot.querySelector('.example-html').textContent;
          }
          if (mutation.target.parentElement.classList.contains('example-css')) {
            this.shadowRoot.querySelector('.example-styles').innerHTML = this.shadowRoot.querySelector('.example-css').textContent;
          }
        }
      });
    });

    const codeWrapper = this.shadowRoot.querySelector('.code-wrapper');
    const toggleEdit = this.shadowRoot.querySelector('.code-edit__label > input');

    // Return/Enter maakt een nieuw blokelelement. Dat is ongewenst.
    // Wordt omgezet naar Shift+Enter, een 'zachte return'
    function reAssignEnterKey(event) {
      if (event.keyCode === 13 && event.shiftKey === false) {
        event.preventDefault();
        document.execCommand('insertLineBreak');
      }
    }

    function runPrism() {
      Prism.highlightAllUnder(shadowRoot);
      Prism.plugins.NormalizeWhitespace.setDefaults({
        'remove-trailing': true,
        'remove-indent': true,
        'left-trim': true,
        'right-trim': true,
        'indent': 0,
        'remove-initial-line-feed': true,
        'tabs-to-spaces': 2,
      });
    }

    // Schakel bewerken in of uit
    toggleEdit.addEventListener('change', () => {
      if (toggleEdit.checked) {
        this.shadowRoot.addEventListener('keydown', reAssignEnterKey);
        codeWrapper.setAttribute('contenteditable', true);
        codeWrapper.focus();
        // verwijder prism color coding door alle spans te verwijderen
        this.shadowRoot.querySelector('.example-html').textContent = this.shadowRoot.querySelector('.example-html').textContent;
        this.shadowRoot.querySelector('.example-css').textContent = this.shadowRoot.querySelector('.example-css').textContent;
        observeCodeWrapper.observe(codeWrapper, config);
      } else {
        codeWrapper.setAttribute('contenteditable', false);
        observeCodeWrapper.disconnect();
        Prism.highlightAllUnder(this.shadowRoot);
        Prism.plugins.NormalizeWhitespace.setDefaults({
          'remove-trailing': true,
          'remove-indent': true,
          'left-trim': true,
          'right-trim': true,
          'indent': 0,
          'remove-initial-line-feed': true,
          'tabs-to-spaces': 2,
        });
      }
    });

    function resetCode(resetEditButton) {
      import('./modules/examples.js')
        .then(result => {
          result.examples.forEach(example => {
            if (`example-${ example.id }` === shadowRoot.querySelector('.btn-reset-code').id) {
              shadowRoot.querySelector('.example-code').innerHTML = `${ example.code }`;
              shadowRoot.querySelector('.example-html').innerHTML = `${ escapeMarkup(example.code) }` || '';
              shadowRoot.querySelector('.example-css').innerHTML = `${ example.codeStyle }` || '';
              shadowRoot.querySelector('.example-styles').innerHTML = shadowRoot.querySelector('.example-css').textContent;
              shadowRoot.querySelector('.btn-reset-code').style.opacity = '0';
              resetEditButton.checked ? resetEditButton.click() : runPrism();
            }
          });
        });
    }

  } // einde constructor

  connectedCallback() {
    // activeer de codekleuring
    Prism.highlightAllUnder(this.shadowRoot);
    Prism.plugins.NormalizeWhitespace.setDefaults({
      'remove-trailing': true,
      'remove-indent': true,
      'left-trim': true,
      'right-trim': true,
      'indent': 0,
      'remove-initial-line-feed': true,
      'tabs-to-spaces': 2,
    });
  }
}

// definieer het custom element
customElements.define('code-example', CodeExample);

// importeer de codevoorbeelden
// voeg voor elke voorbeeld een custom element toe aan het desbetreffende hoofdstuk
import('./modules/examples.js')
  .then(result => {
    result.examples.forEach(example => {
      document.querySelector(`.chapter-main-${ example.chapterNumber }`).appendChild(new CodeExample(example));
    });
  });
