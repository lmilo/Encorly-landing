export type LegalSection = {
  heading: string;
  paragraphs?: string[];
  list?: string[];
};

export type LegalDoc = {
  slug: string;
  title: string;
  lastUpdated: string;
  intro: string[];
  sections: LegalSection[];
};

export const privacyPolicy: LegalDoc = {
  slug: 'privacidad',
  title: 'Política de Privacidad',
  lastUpdated: '17 de junio de 2026',
  intro: [
    'En Encorely tu privacidad es parte del producto, no una nota al pie. Esta Política de Privacidad explica qué datos personales tratamos, con qué finalidad, bajo qué fundamento legal y qué derechos tienes sobre ellos.',
    'El responsable del tratamiento de tus datos es [ENTIDAD_RESPONSABLE], con domicilio en [CIUDAD], Colombia. El tratamiento se rige por la Ley 1581 de 2012, el Decreto 1377 de 2013 y demás normas concordantes. Si en el futuro operamos en otros mercados, aplicaremos además la normativa local que corresponda.',
  ],
  sections: [
    {
      heading: '1. Información que recopilamos',
      paragraphs: ['Recopilamos los datos estrictamente necesarios para operar la Plataforma y conectarte con personas afines:'],
      list: [
        'Datos que nos das: tu correo electrónico al unirte a la lista de espera (waitlist). Al crear una cuenta: nombre, nombre de usuario, fotografía de perfil, biografía, ciudad y estado de ánimo de concierto (concert mood).',
        'Datos de Spotify (con tu autorización previa): historial de reproducción, artistas favoritos, géneros musicales y características de audio. Nunca recopilamos ni solicitamos tu contraseña de Spotify.',
        'Datos de uso: swipes (desplazamientos), matches realizados y contenido de los chats internos.',
        'Datos técnicos: tipo de dispositivo, idioma del sistema, datos de diagnóstico y fallos.',
      ],
    },
    {
      heading: '2. Datos sensibles',
      paragraphs: [
        'Para las funciones básicas de Encorely no requerimos datos sensibles. Sin embargo, debes saber que tu fotografía de perfil podría constituir un dato biométrico y que ciertas interacciones (por ejemplo, con quién haces match) podrían llegar a revelar información sensible, como tu orientación sexual.',
        'No estás obligado a autorizar el tratamiento de datos sensibles, y negarte a hacerlo no te impide usar las funciones básicas de la Plataforma, conforme al artículo 6 del Decreto 1377 de 2013. Cualquier tratamiento de datos sensibles requerirá tu autorización expresa, separada y facultativa.',
        'Te recomendamos no incluir información sensible (salud, creencias religiosas o políticas, orientación sexual, datos de menores) en campos de texto libre como tu biografía o los chats.',
      ],
    },
    {
      heading: '3. Finalidades del tratamiento',
      paragraphs: ['Tratamos tus datos para:'],
      list: [
        'Calcular la compatibilidad musical a través de nuestros algoritmos.',
        'Crear y administrar tu cuenta y tu perfil.',
        'Habilitar las funciones de match y chat una vez alcanzas el umbral de interacciones.',
        'Mostrarte eventos y carteleras musicales mediante nuestras integraciones.',
        'Notificarte sobre el lanzamiento y novedades si estás en la lista de espera.',
        'Garantizar la seguridad de la plataforma, prevenir abusos y cumplir obligaciones legales.',
      ],
    },
    {
      heading: '4. Autorización y fundamento legal',
      paragraphs: [
        'El tratamiento de tus datos se basa en tu autorización previa, expresa e informada, de conformidad con la Ley 1581 de 2012. Puedes revocar esta autorización en cualquier momento, sin efectos retroactivos, a través de los canales indicados en esta política.',
      ],
    },
    {
      heading: '5. Integraciones con terceros',
      paragraphs: ['La Plataforma se integra con servicios de terceros para ofrecerte la experiencia completa:'],
      list: [
        'Spotify: con tu autorización, para la gestión y lectura de tu perfil musical. El uso de Spotify se rige también por su propia política de privacidad.',
        'Ticketmaster: para mostrarte cartelera local de eventos. La compra de entradas y el uso de su plataforma se rigen por los términos y la política de privacidad de Ticketmaster.',
      ],
    },
    {
      heading: '6. Cómo compartimos la información',
      paragraphs: [
        'No vendemos, rentamos ni comercializamos tus datos personales. Solo compartimos información en estos casos: (i) la información de tu perfil que decides mostrar a tus matches; (ii) datos con proveedores tecnológicos esenciales (alojamiento, analítica, envío de correos) que actúan como encargados del tratamiento bajo estrictos acuerdos de confidencialidad y seguridad; y (iii) requerimientos de autoridades competentes mediante orden legal.',
      ],
    },
    {
      heading: '7. Conservación de los datos',
      paragraphs: [
        'Conservamos tus datos mientras tu cuenta permanezca activa o sea estrictamente necesario para cumplir las finalidades descritas. Al eliminar tu cuenta, procederemos a la supresión o anonimización irreversible de los datos, salvo que exista una obligación legal o contractual de conservarlos.',
        'Con fines de seguridad y para atender reportes de conducta indebida, podemos conservar y revisar el contenido de los chats durante un periodo razonable, conforme a esta política y a la ley.',
      ],
    },
    {
      heading: '8. Seguridad de la información',
      paragraphs: [
        'Implementamos medidas técnicas, humanas y administrativas razonables y proporcionales para proteger tus datos contra pérdida, uso indebido o acceso no autorizado.',
        'En caso de un incidente de seguridad que comprometa tus datos personales, lo reportaremos a la Superintendencia de Industria y Comercio (SIC) y, cuando corresponda, te informaremos, conforme a la normativa vigente.',
      ],
    },
    {
      heading: '9. Tus derechos (Habeas Data)',
      paragraphs: ['Como titular de los datos tienes derecho a:'],
      list: [
        'Conocer, actualizar y rectificar tus datos personales.',
        'Solicitar prueba de la autorización otorgada.',
        'Ser informado sobre el uso que se ha dado a tus datos.',
        'Presentar quejas ante la Superintendencia de Industria y Comercio (SIC) por infracciones a la ley.',
        'Revocar la autorización y/o solicitar la supresión del dato cuando sea legalmente procedente.',
        'Acceder de forma gratuita a tus datos personales.',
      ],
    },
    {
      heading: '10. Cómo ejercer tus derechos',
      paragraphs: [
        'El área responsable de la protección de datos atenderá tus consultas, solicitudes y reclamos en el correo electrónico encorely.dev@edav.com.co. Indica tu solicitud y los datos que permitan identificarte.',
        'Las consultas se atenderán en un máximo de diez (10) días hábiles y los reclamos en un máximo de quince (15) días hábiles, prorrogables en los términos de los artículos 14 y 15 de la Ley 1581 de 2012.',
      ],
    },
    {
      heading: '11. Menores de edad',
      paragraphs: [
        'El servicio está dirigido exclusivamente a personas mayores de 18 años. No recopilamos conscientemente datos de menores de edad. Si detectamos una cuenta perteneciente a un menor, será eliminada de inmediato.',
      ],
    },
    {
      heading: '12. Transmisiones y transferencias internacionales',
      paragraphs: [
        'Para operar el servicio podemos realizar transmisiones internacionales de datos a proveedores de infraestructura en la nube (encargados del tratamiento) ubicados fuera de Colombia, asegurando que cuenten con estándares idóneos de protección de datos. Cuando se trate de transferencias internacionales, adoptaremos las garantías exigidas por la ley. Si ampliamos operaciones a otros mercados, te informaremos de los cambios que correspondan.',
      ],
    },
    {
      heading: '13. Cookies y tecnologías similares',
      paragraphs: [
        'Utilizamos cookies y tecnologías similares para recordar tus preferencias (como el idioma) y medir el uso de la plataforma. Puedes configurarlas o deshabilitarlas a través de las opciones de tu navegador o dispositivo, aunque algunas funciones podrían verse afectadas.',
      ],
    },
    {
      heading: '14. Cambios a esta política',
      paragraphs: [
        'Nos reservamos el derecho de modificar esta política para reflejar cambios en el servicio o en la normativa. Publicaremos la versión vigente con su respectiva fecha de actualización en nuestra plataforma. Te recomendamos revisarla periódicamente.',
      ],
    },
    {
      heading: '15. Contacto',
      paragraphs: [
        'Para cualquier duda sobre esta política o el tratamiento de tus datos, escríbenos a encorely.dev@edav.com.co.',
      ],
    },
  ],
};

export const termsOfService: LegalDoc = {
  slug: 'terminos',
  title: 'Términos y Condiciones',
  lastUpdated: '17 de junio de 2026',
  intro: [
    'Estos Términos y Condiciones regulan el acceso y uso de la aplicación y sitio web de Encorely (en adelante, la “Plataforma”), operada por [ENTIDAD_RESPONSABLE]. Al unirte a la lista de espera, crear una cuenta o usar la Plataforma, aceptas estos términos en su totalidad.',
    'Si no estás de acuerdo con ellos, abstente de utilizar Encorely.',
  ],
  sections: [
    {
      heading: '1. Descripción del servicio',
      paragraphs: [
        'Encorely es una plataforma de conexión social diseñada para conectar a fanáticos de la música basándose en su actividad dentro de la aplicación, la afinidad de perfiles y la integración de datos musicales de Spotify.',
        'Encorely actúa como un intermediario tecnológico que facilita conexiones entre usuarios; no organiza eventos ni participa en los encuentros o interacciones que los usuarios decidan tener entre sí.',
      ],
    },
    {
      heading: '2. Elegibilidad',
      paragraphs: [
        'Para registrarte debes ser mayor de 18 años. Al usar la Plataforma declaras y garantizas que cumples con la mayoría de edad y que toda la información que proporcionas es veraz, exacta y actualizada.',
      ],
    },
    {
      heading: '3. Registro y cuenta',
      paragraphs: [
        'Eres el único responsable de mantener la confidencialidad de tus credenciales de acceso (contraseñas o tokens) y de toda la actividad que ocurra bajo tu cuenta. Te comprometes a notificarnos de inmediato sobre cualquier uso no autorizado.',
      ],
    },
    {
      heading: '4. Uso aceptable',
      paragraphs: ['Queda estrictamente prohibido:'],
      list: [
        'Suplantar la identidad de otras personas o crear perfiles falsos.',
        'Acosar, amenazar, discriminar o enviar contenido ofensivo, violento o sexualmente explícito a otros usuarios.',
        'Usar la plataforma con fines comerciales no autorizados, publicidad o spam.',
        'Vulnerar la seguridad de la plataforma, realizar scraping, ingeniería inversa o extraer datos de forma automatizada.',
      ],
    },
    {
      heading: '5. Contenido del usuario',
      paragraphs: [
        'Conservas los derechos sobre las fotos, textos o información que publiques en Encorely. Al publicarlos, nos otorgas una licencia gratuita, mundial y no exclusiva para reproducir, adaptar y mostrar dicho contenido con el único fin de operar y prestar los servicios de la Plataforma. Nos reservamos el derecho de retirar cualquier contenido que infrinja estos términos o derechos de terceros.',
      ],
    },
    {
      heading: '6. Servicios de terceros',
      paragraphs: [
        'Las integraciones con Spotify y Ticketmaster están sujetas a sus propios términos y condiciones. Encorely actúa únicamente como intermediario tecnológico frente a estos servicios y no se hace responsable por fallas técnicas en ellos. La compra de entradas a conciertos se realiza directamente con el proveedor externo; Encorely no vende boletería ni responde por cancelaciones de eventos.',
      ],
    },
    {
      heading: '7. Propiedad intelectual',
      paragraphs: [
        'La marca, logotipos, diseños, interfaces, algoritmos y software asociados a Encorely son propiedad exclusiva de [ENTIDAD_RESPONSABLE] o de sus licenciantes y están protegidos por las leyes de propiedad intelectual. Queda prohibida su reproducción, modificación o uso sin autorización previa y por escrito.',
      ],
    },
    {
      heading: '8. Lista de espera (waitlist)',
      paragraphs: [
        'Unirte a la lista de espera no garantiza el acceso inmediato ni la creación automática de una cuenta. Usaremos tu correo electrónico exclusivamente para informarte sobre el estado de tu acceso y novedades del lanzamiento, conforme a nuestra Política de Privacidad.',
      ],
    },
    {
      heading: '9. Seguridad de los usuarios y exención de garantías',
      paragraphs: [
        'La Plataforma se proporciona “tal cual” y “según disponibilidad”. Encorely no garantiza que el servicio sea ininterrumpido o libre de errores, ni que las conexiones sugeridas cumplan tus expectativas.',
        'Encorely no verifica los antecedentes penales, la identidad ni la veracidad de la información de los usuarios, ni realiza controles de seguridad sobre las personas con las que interactúas. Las decisiones de chatear o reunirte físicamente con otros usuarios son de tu exclusiva responsabilidad.',
        'Por tu seguridad, te recomendamos: reunirte siempre en lugares públicos, informar a alguien de confianza sobre tus planes, no compartir datos financieros ni información sensible, y reportarnos cualquier conducta inapropiada.',
      ],
    },
    {
      heading: '10. Limitación de responsabilidad',
      paragraphs: [
        'En la máxima medida permitida por la legislación colombiana, y sin perjuicio de los derechos irrenunciables del consumidor, Encorely, sus creadores y afiliados no serán responsables por: (i) la conducta, acciones u omisiones de otros usuarios, dentro o fuera de la Plataforma, incluidos los encuentros en el mundo físico; (ii) daños indirectos, incidentales, morales o consecuenciales derivados del uso o la imposibilidad de uso de la Plataforma; ni (iii) fallas en servicios de terceros.',
        'Nada en estos términos excluye o limita la responsabilidad que, conforme a la ley, no pueda ser excluida ni limitada.',
      ],
    },
    {
      heading: '11. Suspensión y terminación',
      paragraphs: [
        'Podemos suspender o cancelar tu cuenta cuando determinemos un incumplimiento de estos términos o un riesgo para otros usuarios o para la Plataforma. En casos de incumplimientos graves o de riesgo para la seguridad, la suspensión podrá ser inmediata. Asimismo, puedes cerrar tu cuenta en cualquier momento desde las opciones de la aplicación.',
      ],
    },
    {
      heading: '12. Modificaciones de los términos',
      paragraphs: [
        'Podemos actualizar estos términos cuando sea necesario. Publicaremos la versión vigente con su fecha de actualización. El uso continuado de la Plataforma tras la publicación de los cambios constituye la aceptación de los nuevos términos.',
      ],
    },
    {
      heading: '13. Ley aplicable y jurisdicción',
      paragraphs: [
        'Estos términos se rigen e interpretan de conformidad con las leyes de la República de Colombia. Cualquier controversia será sometida ante los jueces competentes de la ciudad de [CIUDAD], Colombia, sin perjuicio de los derechos que la ley reconozca al consumidor.',
      ],
    },
    {
      heading: '14. Contacto',
      paragraphs: [
        'Si tienes preguntas sobre estos términos, contáctanos en encorely.dev@edav.com.co.',
      ],
    },
  ],
};

export const legalDocs = { privacyPolicy, termsOfService };