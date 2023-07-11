# Drum Kit

This is a simple drum kit application that allows you to play different drum sounds by pressing keyboard keys or clicking on buttons. It features sound playback, keyboard event handling, button event handling, and animation effects.

## Usage

To play the drum sounds, you can either press the corresponding keys on your keyboard or click on the buttons displayed on the screen. Each key/button corresponds to a specific drum sound. When a key is pressed or a button is clicked, the associated sound will be played.

## Keyboard Event Handling

The application listens for `keydown` events on the document. When a key is pressed, it triggers the `sound()` function to play the corresponding drum sound. Additionally, the `activeKey()` function is called to animate the pressed key/button.

## Button Event Handling

The application adds event listeners to each drum button on the page. When a button is clicked, it triggers the `sound()` function with the respective drum sound as an argument. Similarly, the `activeKey()` function is called to animate the clicked key/button.

## Drum Sounds

The drum sounds used in this application are provided in the `sounds/` folder. Each drum sound corresponds to a specific key/button and is played using the HTML5 `Audio` element.

## Animation Effects

When a key is pressed or a button is clicked, the associated key/button is animated briefly using the `pressed` class. This class is added to the respective element and then removed after a short delay, creating a visual feedback effect.

## Customization

To customize the drum kit, you can modify the following:

- Add or remove drum buttons in the HTML code.
- Replace the drum sounds in the `sounds/` folder with your own audio files.
- Modify the `sound()` function to add more drum sounds or change the existing ones.
- Adjust the animation effects by modifying the CSS styles in your own stylesheet.

Feel free to customize the drum kit according to your preferences and requirements.

## Compatibility

The drum kit application should work on most modern web browsers that support HTML5 and JavaScript. Ensure that your browser is up to date for the best experience.


 [🚀Click Here](https://sparkz-technology.github.io/drumkit/) 
> Author: github.com/sparkz-technology
