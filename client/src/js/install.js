const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
 event.preventDefault();

    // Remove the hidden class from the button.
    butInstall.style.visibility = 'visible';
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click',  () => {
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
     return;
    }
    // Show prompt
    promptEvent.prompt();
    // Reset the deferred prompt variable, it can only be used once.
    window.deferredPrompt = null;
     butInstall.setAttribute('disabled', true);
    butInstall.textContent = 'Installed!';
  
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log('👍', 'appinstalled', event);
});

console.log("hello install.js")