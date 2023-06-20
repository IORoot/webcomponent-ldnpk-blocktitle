import './blockTitle.js';


export default {
  title: 'LondonParkour/text/blockTitle',
  component: 'ldnpk-blockTitle',
  tags: ['autodocs'],
  // Docs Page Description
  parameters: { docs: { description: { component: 
    'The LondonParkour BlockTitle Component.',
  }, }, },

};


// ╔═══════════════════════════════════════════════════════════════════════════╗
// ║                                                                           ║
// ║                                  STORIES                                  ║
// ║                                                                           ║
// ╚═══════════════════════════════════════════════════════════════════════════╝


// ╭───────────────────────────────────────────────────────╮
// │                                                       │
// │                     Default Style                     │
// │                                                       │
// ╰───────────────────────────────────────────────────────╯
export const Default = ({}) => {

  const htmlString = 
  /* html */`
    <style>
      ldnpk-blocktitle {
          --gradientFrom: var(--color-emerald-300);
          --gradientTo:   var(--color-emerald-500);
          --highlighted:  var(--color-emerald-50);
      } 
        
    </style>

    <ldnpk-blocktitle highlighted="Title">
        <div slot="title">The Title with highlight.</div>

        <div slot="subheading">Subheading.</div>

        <div slot="paragraph">With well over a decade of full-time international parkour and movement coaching, our coaches are among the most accomplished in the world. Instructing all levels of ability, professions and demographics, we’re certain we can help you too.</div>
      </ldnpk-blocktitle>
  `

  return htmlString;
};
