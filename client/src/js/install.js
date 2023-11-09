const butInstall = document.getElementById("buttonInstall");

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener("beforeinstallprompt", (event) => {
  // Prevent the default prompt from showing
  event.preventDefault();
  // Store the event for later use
  window.deferredPrompt = event;
  // Show the install button
  butInstall.classList.toggle("hidden", false);
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener("click", async () => {
  const promptE = window.deferredPrompt;
  if (!promptE) {
    return;
  }
  promptE.prompt();
  window.deferredPrompt = null;
  butInstall.classList.toggle("hidden", true);

  // // Show the install prompt
  // deferredPrompt.prompt();
  // // Wait for the user to respond to the prompt
  // const { outcome } = await deferredPrompt.userChoice;
  // // Log the user's choice
  // console.log(`User choice: ${outcome}`);
  // // Reset the deferredPrompt variable
  // deferredPrompt = null;
  // // Hide the install button
  // butInstall.style.display = "none";
});

// TODO: Add a handler for the `appinstalled` event
window.addEventListener("appinstalled", (event) => {
  // Log the installation event
  console.log("App installed");
  window.deferredPrompt = null;
});
