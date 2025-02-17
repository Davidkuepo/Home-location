import slide1 from '../assets/images/home-slide1.jpg';
import slide2 from '../assets/images/home-slide2.jpg';
import slide3 from '../assets/images/home-slide3.jpg';
import HomeGallery1 from '../assets/images/img-gallery1.jpg';
import HomeGallery2 from '../assets/images/img-gallery2.jpg';
import HomeGallery3 from '../assets/images/img-gallery3.jpg';
import HomeGallery4 from '../assets/images/img-gallery4.jpg';
import HomeGallery5 from '../assets/images/img-gallery5.jpg';
import HomeGallery6 from '../assets/images/img-gallery6.jpg';


export const CarouselSlides = [
  {
    id: 1,
    image: slide1,
    title: 'Trouvez votre chez-vous temporaire',
    description: 'Des maisons, appartements et chambres confortables pour tous les goûts',
    buttonText: 'Découvrir nos logements'
  },
  {
    id: 2,
    image: slide2,
    title: 'Locations de rêve',
    description: 'Des propriétés uniques pour des séjours inoubliables',
    buttonText: 'Voir les annonces'
  },
  {
    id: 3,
    image: slide3,
    title: 'Offres spéciales saisonnières',
    description: 'Profitez de nos meilleures réductions pour vos prochaines vacances',
    buttonText: 'Voir les offres'
  }
];
export const properties = [
  {
    image: 'https://via.placeholder.com/400',
    title: 'Maison de rêve',
    description: 'Belle maison avec jardin et piscine.'
  },
  {
    image: 'https://via.placeholder.com/400',
    title: 'Appartement moderne',
    description: 'Appartement spacieux en centre-ville.'
  },
  {
    image: 'https://via.placeholder.com/400',
    title: 'Chambre cosy',
    description: 'Chambre confortable avec vue sur la mer.'
  }
];

// export const serviceCards = [
//   {
//     icon: <FaHome className="text-3xl text-blue-500" />,
//     title: "Large Sélection de Propriétés",
//     description: "Découvrez une vaste gamme de maisons, appartements et villas pour tous les goûts et budgets."
//   },
//   {
//     icon: <FaSearch className="text-3xl text-green-500" />,
//     title: "Recherche Personnalisée",
//     description: "Utilisez nos filtres avancés pour trouver la location parfaite selon vos critères spécifiques."
//   },
//   {
//     icon: <FaHandshake className="text-3xl text-yellow-500" />,
//     title: "Réservation Facile",
//     description: "Processus de réservation simple et sécurisé, avec assistance client disponible 24/7."
//   },
//   {
//     icon: <FaShieldAlt className="text-3xl text-red-500" />,
//     title: "Sécurité Garantie",
//     description: "Toutes nos propriétés sont vérifiées et nous offrons une protection des paiements pour votre tranquillité d'esprit."
//   }
// ];


export const services = [
  {
    image: HomeGallery1,
    title: 'Locations de Luxe',
    gridArea: 'a'
  },
  {
    image: HomeGallery2,
    title: 'Locations Saisonnières',
    gridArea: 'b'
  },
  {
    image: HomeGallery3,
    title: 'Locations Longue Durée',
    gridArea: 'c'
  },
  {
    image: HomeGallery4,
    title: 'Gestion Locative',
    gridArea: 'd'
  },
  {
    image: HomeGallery5,
    title: 'Conciergerie',
    gridArea: 'e'
  },
  {
    image: HomeGallery6,
    title: 'Investissement Immobilier',
    gridArea: 'f'
  },
];

export default services;


export const testimonials = [
  {
    text: "J'ai trouvé la maison de mes rêves grâce à ce service. Le processus était simple et l'équipe très professionnelle.",
    author: "Marie D."
  },
  {
    text: "Excellent service client ! Ils ont répondu à toutes mes questions et m'ont aidé à trouver le parfait appartement.",
    author: "Thomas L."
  },
  {
    text: "La qualité des propriétés proposées est exceptionnelle. Je recommande vivement ce service de location.",
    author: "Sophie M."
  },
  {
    text: "Grâce à leur service de conciergerie, mon séjour a été absolument parfait. Je reviendrai certainement !",
    author: "Pierre G."
  }
];


export const faqs = [
  {
    question: "Comment puis-je réserver une propriété ?",
    answer: "Vous pouvez réserver une propriété directement sur notre site web en sélectionnant les dates de votre séjour et en suivant le processus de réservation. Vous pouvez également nous contacter par téléphone pour une assistance personnalisée."
  },
  {
    question: "Quelles sont les conditions d'annulation ?",
    answer: "Nos conditions d'annulation varient selon la propriété et la période de réservation. En général, nous offrons un remboursement complet pour les annulations effectuées au moins 30 jours avant la date d'arrivée. Veuillez consulter les conditions spécifiques de chaque propriété lors de votre réservation."
  },
  {
    question: "Les animaux de compagnie sont-ils autorisés ?",
    answer: "La politique concernant les animaux de compagnie varie selon les propriétés. Certaines acceptent les animaux, d'autres non. Veuillez vérifier la description de chaque propriété ou nous contacter pour plus d'informations."
  },
  {
    question: "Y a-t-il des frais supplémentaires ?",
    answer: "Le prix affiché inclut généralement tous les frais de base. Cependant, certains services supplémentaires comme le ménage, le linge de maison ou le parking peuvent être facturés en sus. Tous les frais sont clairement indiqués avant la confirmation de votre réservation."
  }
];
