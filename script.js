// Pour la gestion de la barre de navigation (menu) pour les smartphones
    const burger = document.getElementById('burger');
    const navLinks = document.getElementById('nav-links');

    burger.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });
	
  // ✅ Fermer le menu quand un lien est cliqué
  const navItems = navLinks.querySelectorAll('a');
  navItems.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('show');
    });
  });


// ====================
// BLOG (Section Actualités)
// ====================
const blogPosts = [
  {
    title: "Rentrée 2025 : Nouveau bâtiment en service",
    date: "Juin 2025",
    content: "Le nouveau bloc scientifique avec laboratoire moderne est désormais fonctionnel. Une étape importante pour la filière scientifique.",
    image: "images/laboratoire4.jpg"
  },
  {
    title: "Visite de l’évêque : un moment fort",
    date: "Mai 2025",
    content: "L’évêque de Sangmélima a tenu une messe spéciale au sein du collège pour bénir nos élèves avant les différents examens.",
    image: "images/religieuse2.jpg"
  },
  {
    title: "Concours internes : nos élèves brillent",
    date: "Avril 2025",
    content: "Félicitations aux lauréats du concours mathématiques et du tournoi de débat inter-établissements.",
    image: "images/actualite2.jpg"
  },
  {
    title: "Club d’anglais : victoire au concours régional",
    date: "Mars 2025",
    content: "Nos élèves du club English for Life ont remporté le prix d’éloquence au concours régional anglophone.",
    image: "images/actualite4.jpg"
  }
];

const blogContainer = document.getElementById('blog-posts');

// Fonction pour créer un post
function createPost(post, index) {
  const div = document.createElement('div');
  div.className = 'post';
  div.setAttribute('data-aos', 'fade-up');

  div.innerHTML = `
    <h3>${post.title}</h3>
    <p><em>${post.date}</em></p>
    <img src="${post.image}" alt="${post.title}" />
    <p>${post.content.substring(0, 100)}...</p>
    <button style="background-color: skyblue" class="read-more" data-index="${index}">Lire plus</button>
  `;

  return div;
}

// Affiche les deux premiers
blogPosts.slice(0, 2).forEach((post, i) => {
  blogContainer.appendChild(createPost(post, i));
});

// Les anciens posts (du 3e en bas)
const moreContainer = document.createElement('div');
moreContainer.id = 'more-posts';
moreContainer.style.display = 'none'; // Caché au départ
blogPosts.slice(2).forEach((post, i) => {
  moreContainer.appendChild(createPost(post, i + 2));
});
blogContainer.appendChild(moreContainer);

// Bouton Voir plus / moins
const toggleButton = document.createElement('button');
toggleButton.textContent = "Voir plus d’actualités";
toggleButton.className = "see-more-button";
toggleButton.style.margin = "2rem auto 0";
toggleButton.style.display = "block";

if (blogPosts.length > 2) {
  blogContainer.appendChild(moreContainer);
  blogContainer.appendChild(toggleButton);
}

toggleButton.addEventListener('click', () => {
  const isHidden = moreContainer.style.display === 'none';
  moreContainer.style.display = isHidden ? 'block' : 'none';
  toggleButton.textContent = isHidden ? "Voir moins" : "Voir plus d’actualités";
});

blogContainer.appendChild(toggleButton);

// ====================
// Modale - Lire plus
// ====================
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalDate = document.getElementById('modal-date');
const modalImage = document.getElementById('modal-image');
const modalText = document.getElementById('modal-text');
const modalClose = document.getElementById('modal-close');

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('read-more')) {
    const index = e.target.getAttribute('data-index');
    const post = blogPosts[index];

    modalTitle.textContent = post.title;
    modalDate.textContent = post.date;
    modalImage.src = post.image;
    modalImage.alt = post.title;
    modalText.textContent = post.content;

    modal.classList.remove('hidden');
  }
});

modalClose.addEventListener('click', () => {
  modal.classList.add('hidden');
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.add('hidden');
  }
});


// ====================
// FAQ - Questions/Réponses
// ====================
const faqData = [
  {
    question: "Quels sont les frais d’inscription pour l’année 2025–2026 ?",
    answer: "Les frais d’inscription varient selon le niveau. Pour les classes de 6e à 3e, ils s’élèvent à 75 000 FCFA. Pour les classes de Seconde à Terminale, ils sont de 90 000 FCFA."
  },
  {
    question: "Quels sont les documents à fournir pour une inscription ?",
    answer: "Il faut fournir : 1 photocopie d’acte de naissance, 2 photos d’identité, le dernier bulletin, et une fiche d’inscription disponible à la direction."
  },
  {
    question: "Proposez-vous un internat ?",
    answer: "Oui, le collège dispose d’un internat sécurisé pour les garçons et les filles avec encadrement éducatif."
  },
  {
	question: "Y a-t-il un service de transport scolaire pour les élèves ?",
	answer: "Bien évidemment. Le collège met à disposition un bus scolaire sécurisé pour faciliter les déplacements des élèves chaque jour."	  
  },
  {
    question: "Comment contacter le secrétariat ?",
    answer: "Vous pouvez appeler le 6 77 00 00 00 ou envoyer un email à contact@collegenotredame.cm."
  }
];

const faqContainer = document.getElementById('faq-container');

faqData.forEach((item, index) => {
  const faqItem = document.createElement('div');
  faqItem.classList.add('faq-item');
  faqItem.innerHTML = `
    <div class="faq-question" data-index="${index}">
      <h3>${item.question}</h3>
      <span class="faq-toggle">+</span>
    </div>
    <div class="faq-answer" id="faq-answer-${index}">
      <p>${item.answer}</p>
    </div>
  `;
  faqContainer.appendChild(faqItem);
});

// Ajoute le toggle d'affichage
document.querySelectorAll('.faq-question').forEach((question) => {
  question.addEventListener('click', () => {
    const index = question.getAttribute('data-index');
    const answer = document.getElementById(`faq-answer-${index}`);
    const toggleIcon = question.querySelector('.faq-toggle');

    answer.classList.toggle('visible');
    toggleIcon.textContent = answer.classList.contains('visible') ? '–' : '+';
  });
});
