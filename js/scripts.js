const $cards = document.querySelector('.cards'),
  $template = document.getElementById('template-card').content,
  $fragment = document.createDocumentFragment(),
  $cardContent = [
    {
      image: 'https://placeimg.com/400/200/tech',
      title: 'I like the body. I like to design everything to do with the body.',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, vero recusandae eius eveniet culpa consequuntur.'
    },
    {
      image: 'https://placeimg.com/400/200/arch',
      title: 'Graphic design will save the world right after rock and roll does.',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, vero recusandae eius eveniet culpa consequuntur.'
    },
    {
      image: 'https://placeimg.com/400/200/people',
      title: 'Recognizing the need is the primary condition for design.',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, vero recusandae eius eveniet culpa consequuntur.'
    },
    {
      image: 'https://placeimg.com/400/200/nature',
      title: 'At a meta level, design connects the dots between mere survival and humanism.',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, vero recusandae eius eveniet culpa consequuntur.'
    },
  ]


const showCards = (cardInfo) => {
  if (Array.isArray(cardInfo)) {

    cardInfo.forEach(elem => {
      $template.querySelector('img').setAttribute('src', elem.image)
      $template.querySelector('img').setAttribute('alt', elem.title)
      $template.querySelector('h3').textContent = elem.title
      $template.querySelector('p').textContent = elem.description

      const $clone = document.importNode($template, true)
      $fragment.appendChild($clone)
    });

    $cards.appendChild($fragment)

  } else {
    let textNode = document.createTextNode('Information not found!'),
      textWarn = document.createElement('p')
    textWarn.appendChild(textNode)
    textWarn.style.textAlign = 'center'
    textWarn.style.fontSize = '2rem'
    $cards.appendChild(textWarn)
  }

}

showCards($cardContent)