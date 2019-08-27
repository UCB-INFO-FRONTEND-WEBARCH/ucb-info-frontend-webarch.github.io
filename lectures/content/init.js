Reveal.initialize({
    // Display controls in the bottom right corner
    controls: true,
    // Display a presentation progress bar
    progress: true,
    // If true; each slide will be pushed to the browser history
    history: true,
    // Loops the presentation, defaults to false
    loop: false,
    // Flags if mouse wheel navigation should be enabled
    mouseWheel: true,
    // Apply a 3D roll to links on hover
    rollingLinks: true,
    // UI style
    theme: Reveal.getQueryHash().theme || 'default',
    // Transition style
    transition: Reveal.getQueryHash().transition || 'default',
    // Optional libraries used to extend on reveal.js
    dependencies: [
        { 
            src: '../../reveal/plugin/highlight/highlight.js', 
            async: true 
        }
    ]
});