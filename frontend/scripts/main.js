function generateSecureUrl() {
    const inputUrl = document.getElementById('inputUrl').value;
    const outputUrl = document.getElementById('outputUrl');
  
    // Validate the input URL
    if (!inputUrl.startsWith('http://') && !inputUrl.startsWith('https://')) {
      outputUrl.textContent = 'Please enter a valid URL starting with http:// or https://';
      return;
    }
  
    // Add security parameters (e.g., token)
    const secureToken = 'YOUR_SECURE_TOKEN'; // You can generate this dynamically in a real app
    const newUrl = new URL(inputUrl);
    newUrl.searchParams.set('auth_token', secureToken); // Append the token as a query parameter
  
    // Display the new secure URL
    outputUrl.textContent = `Secure URL: ${newUrl.toString()}`;
  }
  