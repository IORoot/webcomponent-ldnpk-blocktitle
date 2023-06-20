// links
// https://css-tricks.com/a-complete-guide-to-links-and-buttons/


// ╭───────────────────────────────────────────────────────╮
// │                   Add the template                    │
// ╰───────────────────────────────────────────────────────╯
const template = document.createElement('template');

// ╭───────────────────────────────────────────────────────╮
// │              INCLUDES / LINKS / SCRIPTS               │
// ╰───────────────────────────────────────────────────────╯
let html = /* html */` 

`;

// ╭───────────────────────────────────────────────────────╮
// │                      STYLESHEET                       │
// ╰───────────────────────────────────────────────────────╯
html += /* html */` 
    <style>

        :host {
            /* Variables  */
            --gradientFrom: rgb(83, 165, 227);
            --gradientTo:   rgb(6, 182, 212);
            --highlighted:  #ffffff;
        }
        
        #blockTitle {
            /* Position */
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            /* Size */
            margin: 15rem 2.5rem 5rem 2.5rem;

            /* Presentation */
            text-align: center;
        }

        h2 {
            /* Size */
            margin: 0rem 0rem 2.5rem 0rem;

            /* Presentation */
            font-size: 8rem;
            line-height: 1;
        }

        h3 {

            /* Size */
            margin: 0rem 0rem 2.5rem 0rem;

            /* Presentation */
            font-size: 3.75rem;
            font-weight: 400;
            line-height: 1;
        }

        p {

            /* Size */
            margin: 0rem;

            /* Presentation */
            font-size: 1.875rem;
            line-height: 2.25rem;
        }
        
        h2 .highlight {
            background: linear-gradient(
                to right, 
                var(--gradientFrom), 
                var(--gradientTo)
            );

            color: var(--highlighted);

        }


    </style>
`;


// ╭───────────────────────────────────────────────────────╮
// │                       TEMPLATE                        │
// ╰───────────────────────────────────────────────────────╯
html += /* html */`

<div id="blockTitle">
	<h2>
        <slot name="title"></slot>
    </h2>
	<h3>
        <slot name="subheading"></slot>
    </h3>
	<p >
        <slot name="paragraph"></slot>
    </p>
</div>

`;

// ╭───────────────────────────────────────────────────────╮
// │                    ADD TO TEMPLATE                    │
// ╰───────────────────────────────────────────────────────╯
template.innerHTML =  html

// ╭───────────────────────────────────────────────────────╮
// │                  DEFINE WEBCOMPONENT                  │
// ╰───────────────────────────────────────────────────────╯
class Button extends HTMLElement {

    constructor() {

        // SETUP 
        super();
        const clone = template.content.cloneNode(true);
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(clone);

    }

    connectedCallback(){ 

        // Get Text
        let h2Slot = this.shadowRoot.querySelector('#blockTitle h2 slot');
        let h2Text = h2Slot.assignedNodes()[0]?.textContent || '';
        
        // Get index of highlighted word
        let word = this.highlightedAttribute;
        let index = h2Text.indexOf(word);
        
        // Highlight word
        if (index >= 0) {
            let highlightedWord = document.createElement('span');
            highlightedWord.classList.add('highlight');
            highlightedWord.textContent = word;
        
            let newContent = this.shadowRoot.querySelector('#blockTitle h2');
            newContent.innerHTML = h2Text.substring(0, index);
            newContent.appendChild(highlightedWord);
            newContent.innerHTML += h2Text.substring(index + word.length);
        }
 
    }


// ╭───────────────────────────────────────────────────────╮
// │                   GETTERS / SETTERS                   │
// ╰───────────────────────────────────────────────────────╯
    get highlightedAttribute() {
        return this.getAttribute("highlighted");
    }

}

customElements.define("ldnpk-blocktitle", Button);