function copyParagraph(element) {
    var text = element.textContent;
    var clipboard = document.getElementById('clipboard');
    clipboard.value = text;
    clipboard.select();
    document.execCommand('copy');
    clipboard.value = '';
    alert('Le paragraphe a été copié dans le presse-papiers !');
  }
  