# ldnpk-button WebComponent

This is a completely native javascript implementation of the component for the 
LondonParkour.com website. 
There are no dependencies for frameworks, react, vue, etc... and can be used
in any HTML page.

## How to use

You can load the javascript file like any normal javascript and then use the new 
tag on the page.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
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

    <script src="./blockTitle.js"></script>

</body>
</html>
```

## Storybook

You can use the `blockTitle.stories.js` file in storybook.js to dynamically describe 
the webcomponent.

## Properties

- `highlighted`

## CSS Properties

- `--gradientFrom`
- `--gradientTo`
- `--highlighted`