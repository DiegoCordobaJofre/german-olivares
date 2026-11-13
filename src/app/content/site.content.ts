import { SiteContent } from './site.model';

/**
 * ÚNICO ARCHIVO PARA EDITAR EL SITIO.
 * No hay base de datos. Cambiás un texto, guardás, y la web se actualiza.
 *
 * Fotos: copiá el archivo a public/images/ y poné la ruta, por ejemplo
 * portrait: '/images/german.jpg'
 * gallery: [{ src: '/images/dakar.jpg', alt: 'Germán Olivares en el bivouac del Dakar' }]
 *
 * Datos a confirmar con Germán antes de publicar:
 * - honda en timeline: "ocho años en Japón" sale de lo que contaste vos. No está en las notas.
 * - "tres títulos": la prensa documenta el Dakar 2021 (Honda) y el Dakar 2023 (KTM)
 *   junto a Kevin Benavides. El tercero hay que nombrarlo (año, campeonato, piloto).
 * - KTM: el sitio dice que sigue como mecánico oficial de KTM (dato de Diego, nov 2026).
 * - email, linkedinUrl (todavía no tiene), brandName y brandUrl están vacíos a propósito.
 *   Cuando existan, se muestran solos.
 */
export const SITE: SiteContent = {
  url: 'https://germanolivares.com',
  publicName: 'Germán Olivares',
  fullName: 'Rafael Germán Olivares',
  alternateNames: [
    'Rafael Germán Olivares',
    'Rafael German Olivares',
    'German Olivares',
    'Germán Olivares',
  ],
  role: 'Mecánico oficial de rally raid · KTM',
  jobTitle: 'Mecánico oficial de rally raid en KTM',
  knowsAbout: [
    'Rally raid',
    'Dakar Rally',
    'Honda',
    'KTM',
    'Kevin Benavides',
    'Motorsport mechanic',
    'KTM Factory Racing',
    'Workshop design',
    'Mobiliario de taller',
  ],
  portrait: '',
  gallery: [],
  email: '',
  instagramHandle: '@german.olivares',
  instagramUrl: 'https://www.instagram.com/german.olivares/',
  linkedinUrl: '',
  brandName: '',
  brandUrl: '',
  // Firma del desarrollador en el pie. Si url está vacía, se muestra sin enlace.
  credit: { name: 'Diego Córdoba Jofre', url: '' },
  nav: [
    { path: '/trayectoria', label: 'Trayectoria' },
    { path: '/historia', label: 'Historia' },
    { path: '/prensa', label: 'Prensa' },
    { path: '/taller', label: 'Taller' },
    { path: '/contacto', label: 'Contacto' },
  ],
  heroKicker: 'Rally raid · Honda · KTM · Dakar',
  heroItalic: 'El trabajo que no se ve en la llegada',
  heroDeck:
    'Mecánico oficial de rally raid. Hoy en KTM. Antes, ocho años con Honda. Dos Dakar ganados junto a Kevin Benavides.',
  stats: [
    { value: 'Oficial', label: 'Mecánico de carreras', detail: 'El Tribuno, 2021' },
    { value: '2021', label: 'Dakar con Honda', detail: 'Junto a Kevin Benavides' },
    { value: '2023', label: 'Dakar con KTM', detail: 'Junto a Kevin Benavides' },
    { value: 'KTM', label: 'Mecánico oficial', detail: 'En activo' },
  ],
  ficha: [
    { label: 'Nombre completo', value: 'Rafael Germán Olivares' },
    { label: 'Nombre público', value: 'Germán Olivares' },
    { label: 'Oficio', value: 'Mecánico de rally raid' },
    { label: 'Piloto', value: 'Kevin Benavides' },
    { label: 'Equipos', value: 'Honda · KTM' },
    { label: 'Ahora', value: 'Mecánico oficial KTM' },
    { label: 'En paralelo', value: 'Equipamiento de taller' },
  ],
  chapters: [
    {
      id: 'honda',
      index: '01',
      title: 'Honda',
      summary: 'Ocho años en Japón, dentro de un programa oficial. El ciclo cierra en público con el Dakar 2021.',
      body: [
        'Germán trabajó ocho años con Honda en Japón. No era una visita: era la forma de trabajar de un programa oficial, donde la moto se prepara con método y el error se corrige antes de la etapa, no después.',
        'Esa etapa cierra en público el 30 de marzo de 2021. Kevin Benavides deja Honda después de ganar el Dakar y El Tribuno cubre la despedida. En la foto están Tomás «Cholito» Acedo, Helder Rodrigues y Germán Olivares, a quien el diario identifica como mecánico oficial de carreras.',
      ],
    },
    {
      id: 'dakar',
      index: '02',
      title: 'Dakar',
      summary: 'El resultado se ve en la llegada. El trabajo de Germán está en el bivouac, cuando la moto vuelve.',
      body: [
        'El resultado se ve en la llegada. El trabajo está en el bivouac: la moto que entra de noche, el tiempo que queda, lo que tiene que estar perfecto cuando el piloto vuelva a salir.',
        'En ese lugar Germán acompañó a Kevin Benavides. La prensa deja dos campañas a la vista. En 2021, el Dakar con Honda. En 2023, el Dakar con KTM. Forman parte de una trayectoria de tres títulos internacionales en rally raid.',
      ],
    },
    {
      id: 'ktm',
      index: '03',
      title: 'KTM',
      summary: 'El mismo oficio, otra marca. Sigue hoy dentro del programa oficial de KTM.',
      body: [
        'Con KTM el oficio sigue siendo el mismo y el contexto cambia de marca. En enero de 2025, con el Dakar en marcha, La Nación cuenta el momento en que Kevin va hasta su moto. La había presentado Germán Olivares, su mecánico. Sobre el número 47, escrito a marcador: «Volveré por más».',
        'En la previa del Dakar 2026 Kevin ya corre en auto. Cadena 3 lo ve saludar a la gente de KTM y nombra a Germán como su ex mecánico. Kevin cambió de categoría; Germán sigue en el box de KTM.',
      ],
    },
    {
      id: 'taller',
      index: '04',
      title: 'Taller',
      summary: 'Un proyecto nuevo, en paralelo a KTM: equipamiento de taller diseñado con criterio de box oficial.',
      body: [
        'Un box de competición es un taller llevado al límite: poco espacio, poco tiempo, ninguna herramienta de más. Eso no se aprende en un catálogo de mobiliario.',
        'En paralelo a su trabajo en KTM, Germán está lanzando una línea de cajas de herramientas y mobiliario de taller con ese criterio. Lo que funciona en un bivouac del Dakar funciona en cualquier taller.',
      ],
    },
  ],
  timeline: [
    {
      id: 'honda',
      period: 'Honda',
      kicker: 'Programa oficial',
      title: 'Ocho años con Honda en Japón',
      body: 'Trabajo dentro de la estructura oficial, en Japón y en las campañas internacionales. En marzo de 2021, al cierre del ciclo de Kevin Benavides con la marca, El Tribuno lo identifica como mecánico oficial de carreras.',
    },
    {
      id: 'dakar-2021',
      period: '2021',
      kicker: 'Dakar · Honda',
      title: 'La moto del campeón',
      body: 'Kevin Benavides gana el Dakar con Honda. Germán está en el grupo de la despedida: mecánico oficial de carreras, junto a Tomás «Cholito» Acedo y Helder Rodrigues.',
    },
    {
      id: 'dakar-2023',
      period: '2023',
      kicker: 'Dakar · KTM',
      title: 'Otra marca, el mismo oficio',
      body: 'Kevin Benavides gana el Dakar con KTM. Es la segunda campaña documentada de Germán junto al piloto, ya dentro del programa de rally de la marca austríaca.',
    },
    {
      id: 'dakar-2025',
      period: '2025',
      kicker: 'Dakar · KTM',
      title: 'La número 47, lista',
      body: 'La Nación lo nombra como el mecánico que presentó impecable la moto de Kevin. Sobre el 47, el piloto escribió: «Volveré por más».',
    },
    {
      id: 'ahora',
      period: 'Ahora',
      kicker: 'KTM · En activo',
      title: 'Sigue en el box oficial',
      body: 'Germán sigue como mecánico oficial de KTM en rally raid. En paralelo arranca un proyecto propio: equipamiento de taller pensado desde el box de competición.',
    },
  ],
  press: [
    {
      id: 'tribuno-2021',
      outlet: 'El Tribuno',
      date: '30 de marzo de 2021',
      title: 'Kevin Benavides cierra su ciclo en Honda y le abre la puerta a KTM',
      excerpt:
        'En la despedida de Honda, el diario identifica a Germán Olivares como mecánico oficial de carreras. La foto lo muestra junto a Tomás «Cholito» Acedo y Helder Rodrigues.',
      url: 'https://www.eltribuno.com/nota/2021-3-30-21-52-0-kevin-benavides-cierra-su-ciclo-en-honda-y-le-abre-la-puerta-a-ktm',
    },
    {
      id: 'nacion-2025',
      outlet: 'La Nación',
      date: '10 de enero de 2025',
      title: 'Kevin Benavides y la dura decisión de abandonar el Dakar',
      excerpt:
        'Kevin va hasta la moto que Germán Olivares, su mecánico, presentó impecable, y firma el número 47: «Volveré por más».',
      url: 'https://www.lanacion.com.ar/deportes/automovilismo/kevin-benavides-y-la-dura-decision-de-abandonar-el-dakar-volvere-por-mas-nid10012025/',
    },
    {
      id: 'cadena3-2026',
      outlet: 'Cadena 3',
      date: 'Previa del Dakar 2026',
      title: 'Kevin Benavides, en el campamento de Yanbu',
      excerpt:
        'El corresponsal ve a Kevin saludar a la gente de KTM y nombra el encuentro con Germán Olivares, su ex mecánico.',
      url: 'https://www.cadena3.com/noticia/desde-el-podio/dakar-2026-kevin-benavides-deja-guardado-a-max-en-los-primeros-pasos-en-auto_504134',
    },
  ],
  principles: [
    {
      id: 'mano',
      title: 'Todo a la mano',
      body: 'Cada herramienta en su sitio y a un movimiento. En el Dakar un segundo perdido buscando una llave es un segundo que el piloto no recupera.',
    },
    {
      id: 'dura',
      title: 'Hecho para durar',
      body: 'Probado con la lógica de un bivouac: arena, golpes, traslados y jornadas de veinte horas. Si aguanta eso, aguanta tu taller.',
    },
    {
      id: 'resta',
      title: 'Nada de más',
      body: 'Diseñado restando. Lo que no se usa estorba, se pierde o se rompe. Solo queda lo que un mecánico de verdad necesita.',
    },
  ],
  boilerplate:
    'Germán Olivares (Rafael Germán Olivares) es mecánico oficial de rally raid en KTM. Antes trabajó ocho años en el programa oficial de Honda. Ganó el Dakar 2021 y 2023 como mecánico de Kevin Benavides. En paralelo lanza una línea de equipamiento de taller.',
  pages: {
    career: {
      index: '02',
      kicker: 'Carrera',
      title: 'Trayectoria',
      deck: 'Una carrera escrita en boxes. Honda, el Dakar, KTM y el paso al diseño de talleres.',
      description:
        'Trayectoria de Germán Olivares, mecánico de rally raid: Honda, Dakar y KTM junto a Kevin Benavides.',
    },
    story: {
      index: '03',
      kicker: 'Historia',
      title: 'Del bivouac al taller',
      deck: 'El nombre, los equipos y el oficio, en un solo relato.',
      description:
        'La historia de Germán Olivares: de los programas oficiales de Honda y KTM al diseño de talleres.',
    },
    press: {
      index: '04',
      kicker: 'Archivo',
      title: 'Prensa',
      deck: 'La trayectoria ya estaba en los diarios. Acá queda ordenada, con enlace a cada nota.',
      description:
        'Germán Olivares en la prensa: El Tribuno, La Nación y Cadena 3, junto a Kevin Benavides, Honda y KTM.',
    },
    workshop: {
      index: '05',
      kicker: 'Nuevo proyecto · Próximamente',
      title: 'Taller de Dakar',
      deck: 'Cajas de herramientas y mobiliario de taller diseñados por un mecánico oficial del Dakar.',
      description:
        'Cajas de herramientas y mobiliario de taller con criterio de box oficial del Dakar, por Germán Olivares, mecánico de KTM. Próximamente.',
    },
    contact: {
      index: '06',
      kicker: 'Contacto',
      title: 'Hablemos',
      deck: 'Para una nota, una entrevista o el proyecto del taller.',
      description: 'Contacto de Germán Olivares, mecánico de rally raid y diseñador de talleres.',
    },
  },
};
