// Initialize button with user's preferred color
let autoCheckedbtn = document.getElementById("autoCheckedbtn");

// When the button is clicked, inject setPageBackgroundColor into current page
autoCheckedbtn.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: autoChecked,
    });
  });


function autoChecked() {
  let radioBtns = document.querySelectorAll('.radio-item input')

  for(let test = 0; test < radioBtns.length; test++) {
      if(radioBtns[test].value == 5) {
          radioBtns[test].checked = true
      }
  }
  radioBtns[23].checked = true

  // Auto submit
  document.querySelector('.btn-google').click()
}