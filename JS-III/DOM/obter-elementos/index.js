function show() {
  // Obter um elemento único a partir do seu id
  const contactList = document.getElementById('contact-list')
  console.log(contactList);
  
  // Obter vários elementos (HTMLCollection) a partir de um nome de tag
  const liElements = document.getElementsByTagName('li')
  console.log(liElements);
  
  // Obter vários elementos (HTMLCollection) a partir de uma classe
  const contactInputs = document.getElementsByClassName('contact-input')
  console.log(contactInputs);
  
  // Obter vários elementos (NodeList) a partir do atributo name
  const contact2 = document.getElementsByName('contact2')
  console.log(contact2);
  
  //Obter vários elementos (NodeList) a partir de uma query (semelhante aos seletores do CSS)
  const contacts = document.querySelectorAll('#contact-list > li > label')
  console.log(contacts);
  
  // Obter um elemento a partir de uma query (o primeiro elemento a corresponder)
  const contact = document.querySelector('#contact-list > li > label')
  console.log(contact);
  console.log(contact.textContent);
}