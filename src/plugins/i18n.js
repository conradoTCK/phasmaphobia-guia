import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
    'en': {
        homeTitle: 'Register book',
        evidenceTitle: 'Gathering Evidence',
        toolsTitle: 'Tools',
        nameGhostTitle: 'Name ghosts',
        websTitle: 'Related websites',
        languageTitle: 'Language',
        version: '0.12.5',
        equipmentTitle: 'Equipment',
        nameGhost: 'Ghost',
        evidences: {
            title: {
                all: 'All',
                selectTrack:            'Select a track',
                emf:                    'EMF level 5',
                ghostWriting:           'Ghost writing Book',
                fingerprints:           'Fingerprints',
                ghostOrb:               'Ghost Orb',
                freezingTemperatures:   'Freezing Temperatures',
                spiritBox:              'Spirit Box',
                dots:                   'D.O.T.S Projector',
                photoCamera:            'Photo Camera',
                videoCamera:            'Video Camera',
                flashlightUV:           'UV Flashlight',
                flashlight:             'Flashlight',
                key:                    'Key',
                objectiveBoard:         'Objective Board',
                siteMap:                'Site Map',
                sanityMonitor:          'Sanity Monitor',
                siteActivityMonitor:    'Site Activity Monitor',
                soundMonitor:           'Sound Monitor',
                cameraSystem:           'Camera System',
                ouija:                  'Ouija Board',
                voodoo:                 'Voodoo Doll',
                bone:                   'Bone Evidence',
                candle: 'Candle',
                crucifix: 'Crucifix',
                glowStick: 'Glow Stick',
                headMountedCamera: 'Head Mounted Camera',
                lighter: 'Lighter',
                motionSensor: 'Motion Sensor',
                parabolicMicrophone: 'Parabolic Microphone',
                saltShaker: 'Salt Shaker',
                sanityPills: 'Sanity Pills',
                smudgeSticks: 'Smudge Sticks',
                soundSensor: 'Sound Sensor',
                strongFlashlight: 'Strong Flashlight',
                thermometer: 'Thermometer',
                tripod: 'Tripod',

            },
            desc: {
                emf: 'Some ghosts will leave EMF traces near them that will show up on an EMF Reader as level 5.',
                ghostWriting: 'Some ghosts are able to write inside this book if placed nearby.',
                fingerprints: 'Fingerprints can be found on doors, windows and light switches which are only revealed with a UV Light.',
                ghostOrb: 'Small, floating orbs of light that are only visible when using a camera.',
                freezingTemperatures: 'All ghosts make areas cold however some ghosts have been known to drop temperatures even further.',
                spiritBox: 'Only certain ghosts will talk through a Spirit Box when asked a question with your voice. Make sure the lights are off.',
                dots: 'A laser grid of light that can reveal the silhouette of a ghost.',
                videoCamera: "A camera is set up to take videos of the paranormal. The camera streams live and can be viewed from the van's computer monitor. Night vision is available to facilitate detection of the paranormal.",
                photoCamera: 'The Camera is equipment that is not used for gathering evidence. However, it may be required to complete additional objectives, daily challenges, or to acquire money from photo rewards upon finishing the investigation.',
                flashlightUV: 'The UV Flashlight is used to detect ghostly Fingerprints and Footprints.',
                flashlight: 'The Flashlights are your primary source of vision when in the dark, as without it, the pitch-black will engulf you. There are two flashlights at your disposal: the normal flashlight, and the strong flashlight',
                key: 'This key allows us to enter the place with paranormal activity. It is located above the desk, next to the computer.',
                objectiveBoard: "The objective board is located in the van. On this board we can find the list of objectives to be accomplished, the ghost's name and we can also find out if the ghost communicates with individuals or groups.",
                siteMap: '',
                sanityMonitor: '',
                siteActivityMonitor: '',
                soundMonitor: '',
            }
        },
        tools: {
            types: {
                starter: 'Starter equipment',
                van: 'Van equipment',
                onsite: 'Onsite equipment',
                extra: 'Extra equipment'
            },
            title: {
                ghostWriting: 'Ghost writing Book',
                ouija: 'Ouija Board',
                mudgeSticks: 'Smudge Sticks',
            }
        },
        cards: {
            fortress: 'Unique Strengths',
            weakness: 'Weaknesses',
            ghost: {
                type: {
                    spirit: 'spirit',
                    wraith: 'wraith',
                    phantom: 'phantom',
                    poltergeist: 'poltergeist',
                    banshee: 'banshee',
                    jinn: 'jinn',
                    mare: 'mare',
                    revenant: 'revenant',
                    shade: 'shade',
                    demon: 'demon',
                    yurei: 'yurei',
                    oni: 'oni',
                    hantu: 'hantu',
                    yokai: 'yokai',
                    goryo: 'goryo',
                    myling: 'myling',
                    onryo: 'onryo',
                    twins: 'the twins',
                    raiju: 'raiju',
                    obake: 'obake'
                },
                fortress: {
                    spirit: 'Nothing',
                    wraith: "Wraiths almost never touch the ground meaning it can't be tracked by footsteps.",
                    phantom: 'Looking at a Phantom will considerably drop your sanity.',
                    poltergeist: 'A Poltergeist can throw huge amounts of objects at once.',
                    banshee: 'A Banshee will only target one person at a time.',
                    jinn: 'A jinn will travel at a faster speed if its victim is far away.',
                    mare: 'A Mare will have an increased chance to attack in the dark.',
                    revenant: 'A Revenant will travel at a significantly faster speed when hunting a victim.',
                    shade: 'Being shy means the Ghost will be harder to find.',
                    demon: 'Demons will attack more often than any other Ghost. ',
                    yurei: 'Yurei have been known to have a stronger effect on people sanity. ',
                    oni: "Oni's are more active when people are nearby and have been seen moving objects at great speed.",
                    hantu: 'Lower temperatures can cause the Hantu to move at faster speeds.',
                    yokai: 'Talking near a Yokai will anger it and increase its chance of attacking.',
                    goryo: 'A Goryo will usually only show itself on camera if there are no people nearby.',
                    myling: 'A Myling is known to be quieter when hunting.',

                    onryo: 'Extinguishing a flame can cause an Onryo to attack.',
                    twins: 'Either twins can be angered and initiate an attack on their prey.',
                    raiju: 'A Raiju can siphon power from nearby electrical devices, making it move faster.',
                    obake: 'When interacting with the environment, an Obake will rarely leave a trace.'
                },
                weakness: {
                    spirit: 'Using Smudge Sticks on a Spirit will stop it attacking for a long period of time.',
                    wraith: 'Wraiths have a toxic reaction to Salt.',
                    phantom: 'Taking a photo of the Phantom will make it temporarily disappear.',
                    poltergeist: 'A Poltergeist is almost ineffective in an empty room.',
                    banshee: 'Banshees fear the Crucifix and will be less aggressive when near one.',
                    jinn: 'Turning off the locations power source will prevent the Jinn from using its ability.',
                    mare: 'Turning the lights on around the Mare will lower its chance to attack.',
                    revenant: 'Hiding from the Revenant will cause it to move very slowly.',
                    shade: 'The Ghost will not enter hunting mode if there is multiple people nearby.',
                    demon: "Asking a Demon successful questions on the Ouija Board won't lower the users sanity.",
                    yurei: "Smudging the Yurei's room will cause it to not wander around the location for a long time.",
                    oni: 'Being more active will make the Oni easier to find and identify. ',
                    hantu: 'A Hantu will move slower in warmer areas.',
                    yokai: 'When hunting, a Yokai can only hear voices close to it.',
                    goryo: 'They are rarely seen far from their place of death.',
                    myling: 'Mylings more frequently make paranormal sounds.',

                    onryo: 'When threatened, this ghost will be less likely to hunt.',
                    twins: 'The Twins will often interact with the environment at the same time.',
                    raiju: 'Raiju are constantly disrupting electrinic equipment when attacking, making it easier to track.',
                    obake: 'Sometimes this ghost will shapeshift, leaving behind unique evidence.'
                }
            }
        },
        actions: {
            init: 'Click here for new research.'
        }
    },
    'es': {
        homeTitle: 'Libro de registro',
        evidenceTitle: 'Reuniendo pruebas',
        toolsTitle: 'Herramientas',
        nameGhostTitle: 'Nombre fantasmas',
        websTitle: 'Webs relacionadas',
        languageTitle: 'Idioma',
        version: '0.12.5',
        equipmentTitle: 'Equipameinto',
        nameGhost: 'Fantasmas',
        evidences: {
            title: {
                all: 'Todo',
                selectTrack: 'Selecciona una pista',
                emf: 'EMF nivel 5',
                ghostWriting: 'Escritura fantasma',
                fingerprints: 'Huellas dactilares',
                ghostOrb: 'Orbes',
                freezingTemperatures: 'Temperatura bajo cero',
                spiritBox: 'Spirit Box',
                dots: 'Proyector D.O.T.S',
                photoCamera: 'C??mara de fotos',
                videoCamera: 'C??mara de video',
                flashlightUV: 'Linterna ultravioleta',
                flashlight: 'Linterna',
                key: 'Llave',
                objectiveBoard: 'Pizarra de objetivos',
                siteMap: 'Mapa del sitio',
                sanityMonitor: 'Monitor de cordura',
                siteActivityMonitor: 'Monitor de actividad del sitio',
                soundMonitor: 'Monitor de sonido',
                cameraSystem: 'Sistema de c??maras',
                ouija: 'Table de Ouija',
                voodoo: 'Mu??eco de Voodoo',
                bone: 'Pruebas ??seas',
                candle: 'Vela',
                crucifix: 'Crucifijo',
                glowStick: 'Barra luminosa',
                headMountedCamera: 'Camara frontal',
                lighter: 'Encendedor',
                motionSensor: 'Sensor de movimiento',
                parabolicMicrophone: 'Micr??fono parab??lico',
                saltShaker: 'Sal',
                sanityPills: 'P??ldoras de cordura',
                smudgeSticks: 'Varillas de Incienso',
                soundSensor: 'Sensor de sonido',
                strongFlashlight: 'Linterna potente',
                thermometer: 'Term??metro',
                tripod: 'Tr??pode',
            },
            desc: {
                emf: 'El medidor de campos electromagn??ticos (tambi??n llamado medidor EMF) detecta el rastro que dejan los fantasmas y podr??a alcanzar el nivel 5.',
                ghostWriting: 'Algunos fantasmas pueden escribir en estos cuadernos cuando se les coloca uno cerca.',
                fingerprints: 'Se conoce que algunos fantasmas pueden dejar huellas dactilares en puertas, ventanas e interruptores de la luz. Dichas huellas dactilares se mostrar??n bajo una luz ultravioleta.',
                ghostOrb: 'La evidencia paranormal m??s cl??sica, aunque no todos los fantasmas la presentan. Los orbes espectrales ser??n visibles a trav??s de una c??mara de v??deo.',
                freezingTemperatures: 'Todos los fantasmas hacen que una estancia est?? fr??a, pero algunos de ellos pueden hacer que las temperaturas desciendan m??s de lo normal.',
                spiritBox: 'Solo algunos fantasmas hablar??n a trav??s de una Spirit Box cuando les realices preguntas con tu voz. Aseg??rate de que las luces est??n apagadas antes de usarlo.',
                dots: 'Una red l??ser proyectada que puede revelar, la silueta de un fantasma.',
                videoCamera: 'Una c??mara est?? preparada para tomar videos de lo paranormal. La c??mara transmite en directo y podemos verlo desde el monitor del ordenador de la furgoneta. Dispone de visi??n nocturna para facilitar la detecci??n de lo paranormal',
                photoCamera: 'La c??mara es un equipo que no se utiliza para reunir pruebas. Sin embargo, puede ser necesaria para completar objetivos adicionales, desaf??os diarios o para adquirir dinero de recompensas fotogr??ficas al terminar la investigaci??n.',
                flashlightUV: 'La linterna UV se utiliza para detectar huellas dactilares y pisadas fantasmas.',
                flashlight: 'Las linternas son tu principal fuente de visi??n cuando est??s en la oscuridad, ya que sin ella, la oscuridad total te envolver??. Hay dos linternas a tu disposici??n: la linterna normal, y la linterna fuerte',
                key: 'Esta llave nos permite entrar al lugar con actividad paranormal. Se encuentra encima del escritorio, al lado del ordenador.',
                objectiveBoard: 'El tablero de objetivos se encuentra en la furgoneta. En este tablero podemos encontrar la lista de objetivos a cumplir, el nombre del fantasma y tambi??n podemos saber si el fantasma se comunica con personas solas o grupos. ',
                siteMap: '',
                sanityMonitor: '',
                siteActivityMonitor: '',
                soundMonitor: '',
            }
        },
        tools: {
            types: {
                starter: 'Equipamiento inicial',
                van: 'Equipamiento en la furgoneta',
                onsite: 'Equipamiento in situ',
                extra: 'Equipamiento extra'
            },
            title: {
                ghostWriting: 'Escritura fantasma',
                ouija: 'Ouija',
                mudgeSticks: 'Incienso'
            }
        },
        cards: {
            fortress: 'Fortaleza',
            weakness: 'Debilidad',
            ghost: {
                type: {
                    spirit: 'espiritu',
                    wraith: 'espectro',
                    phantom: 'ente',
                    poltergeist: 'poltergeist',
                    banshee: 'banshee',
                    jinn: 'jinn',
                    mare: 'pesadilla',
                    revenant: 'revenant',
                    shade: 'sombra',
                    demon: 'demonio',
                    yurei: 'yurei',
                    oni: 'oni',
                    hantu: 'hantu',
                    yokai: 'yokai',
                    goryo: 'goryo',
                    myling: 'myling',
                    onryo: 'onryo',
                    twins: 'los gemelos',
                    raiju: 'raiju',
                    obake: 'obake'
                },
                fortress: {
                    spirit: 'Ninguno.',
                    wraith: 'No deja pisadas rastreables en el suelo.',
                    phantom: 'Disminuye mucho la cordura de los jugadores que lo miran.',
                    poltergeist: 'Puede lanzar muchos objetos a la vez.',
                    banshee: 'Marca a los jugadores de uno en uno.',
                    jinn: 'Es m??s r??pido cuando est?? lejos de su v??ctima.',
                    mare: 'M??s probabilidad de ataque a oscuras.',
                    revenant: 'Se mueve a mayor velocidad cuando va tras su presa.',
                    shade: 'Es t??mida y dif??cil de encontrar.',
                    demon: 'Son los fantasmas que atacan con mayor frecuencia.',
                    yurei: 'Da??an especialmente la cordura de los jugadores.',
                    oni: 'Mientras m??s jugadores hay cerca de ??l se vuelve m??s activo y agresivo.',
                    hantu: 'M??s r??pido con temperaturas bajas.',
                    yokai: 'Hablar cerca de ??l aumenta las posibilidades de que ataque.',
                    goryo: 'Se mostrar?? en una camara solo si no hay nadie cerca.',
                    myling: 'Son silenciosos atacando.',
                    onryo: 'Apagar una llama puede provocar que Onryo ataque.',
                    twins: 'Cada uno de los gemelos puede enfadarse e iniciar un ataque sobre su presa.',
                    raiju: 'Obtiene su poder de los dispositivos el??ctricos cecanos, haciendo que se mueva mas r??pido.',
                    obake: 'Cuando interact??an con el entorno, rara vez dejaran rastro.'
                },
                weakness: {
                    spirit: 'Las varitas de incienso impiden que ataque durante un tiempo.',
                    wraith: 'Reaccion t??xica ante la sal.',
                    phantom: 'Desaparece temporalmente al hacerle una fotograf??a.',
                    poltergeist: 'Pr??cticamente In??til cuando la habitaci??n est?? vac??a.',
                    banshee: 'Temen al crucifijo y se vuelven menos agresivas.',
                    jinn: 'Si el cuadro el??ctrico est?? apagado no puede usar su habilidad.',
                    mare: 'Menos probabilidad de ataque cuando hay luz.',
                    revenant: 'Se vuelve lento cuando su presa se esconde.',
                    shade: 'No ataca cuando hay varios jugadores juntos.',
                    demon: 'Si hacemos preguntas exitosas con la Ouija no perderemos cordura.',
                    yurei: 'Las varitas de incienso evitan su presencia durante un gran tiempo.',
                    oni: 'Al ser m??s activos son m??s f??ciles de identificar.',
                    hantu: 'M??s lento con temperaturas calientes.',
                    yokai: 'Atacando, solo escucha las voces cercanas a ??l.',
                    goryo: 'Raramente se les ve lejos del lugar donde murieron.',
                    myling: 'Suelen hacer muscho ruido.',
                    onryo: 'Si se siente amenazado, atacar?? con menos frecuencia.',
                    twins: 'Suelen interactuar con el entorno al mismo tiempo.',
                    raiju: 'Debido a que siempre interfiere con los aparatos electr??nicos, es f??cil de rastrear cuando ataca.',
                    obake: 'A veces cambiar??n de forma, revelando asi pruebas indispensables.'
                }
            },
        },
        actions: {
            init: 'Pulse aqu?? para una nueva investigaci??n.'
        }
    }
};

const i18n = new VueI18n({
    locale: 'es', // set locale
    fallbackLocale: 'en', // set fallback locale
    messages, // set locale messages
});

export default i18n;