
export default async function chat_controller() {
  
  const sets = {
    worms: [
      'Ringelwürmer',
      'Gürtelwürmer',
      'Igelwürmer',
      'Regenwürmer',
      'Süßwasser-Ringelwürmer',
      'Riesenregenwürmer',
      'Lumbricus',
      'Lumbricus terrestris',
      'Roter Waldregenwurm',
      'Badischer Riesenregenwurm',
      'Brauner Laubfresser',
    ],
    snails: [
      'Schnecken',
      'Muscheln',
      'Kopffüßer',
      'Kahnfüßer',
      'Einschaler Monoplacophora',
      'Lungenschnecken',
      'Hinterkiemerschnecken',
      'Schnirkelschnecken',
      'Strauchschnecken',
      'Grasschnecken',
      'Küstenschnecken',
      'Tellerschnecken',
      'Helix',
      'Bänderschnecken',
      'Weinbergschnecke = Helix pomatia',
      'Gestreifte Weinbergschnecke',
      'Podolische Weinbergschnecke',
    ],
    insects: [
      'Insekten',
      'Spinnentiere',
      'Hundertfüßer',
      'Doppelfüßer',
      'Höhere Krebse',
      'Hautflügler',
      'Ohrwürmer',
      'Tierläuse',
      'Fangschrecken',
      'Schaben',
      'Termiten',
      'Heuschrecken',
      'Käfer',
      'Flöhe',
      'Netzflügler',
      'Schmetterlinge',
      'Echte Bienen',
      'Echte Blattwespen',
      'Holzwespen',
      'Gallwespen',
      'Zwergwespen',
      'Ameisen',
      'Honigbienen',
      'Hummeln',
      'Trauerbienen',
      'Fleckbienen',
      'Schmuckbienen',
      'Westliche Honigbiene = Apis mellifera',
      'Asiatische rote Honigbiene',
      'Östliche Honigbiene',
      'Riesenhonigbiene',
      'Zwerghonigbiene',
      'Asiatische Bergbiene',
    ],
    classes: [
      'Spinnentiere',
      'Insekten',
      'Hundertfüßer',
      'Doppelfüßer',
      'Höhere Krebse',
    ],
    insect_order: [
      'Hautflügler',
      'Ohrwürmer',
      'Tierläuse',
      'Fangschrecken',
      'Schaben',
      'Termiten',
      'Heuschrecken',
      'Käfer',
      'Flöhe',
      'Netzflügler',
      'Schmetterlinge',
    ],
    ants: [
      'Waldameisen',
      'Rossameisen',
      'Feuerameisen',
      'Wegameisen',
      'Weberameisen',
      'Rote Waldameise = Formica rufa',
      'Große Wiesenameise',
      'Große Kerbameise',
      'Blutrote Raubameise',
      'Rotbärtige Sklavenameise',
    ],
    molluscs: [
      'Muscheln',
      'Schnecken',
      'Kopffüßer',
      'Kahnfüßer',
      'Einschaler',
      'Süßwassermuscheln (Unionida)',
      'Myida',
      'Arcida',
      'Fluss- und Teichmuscheln',
      'Flussperlmuscheln',
      'Iridinidae',
      'Teichmuscheln',
      'Flussmuscheln',
      'Potomida',
      'Große Teichmuschel = Anodonta cygnea',
      'Gemeine Teichmuschel',
    ],
    spiders: [
      'Webspinnen',
      'Weberknechte',
      'Webspinnen',
      'Pseudoskorpione',
      'Walzenspinnen',
      'Echte Radnetzspinnen',
      'Sechsaugenspinnen',
      'Speispinnen',
      'Fischernetzspinnen',
      'Zitterspinnen',
      'Kreuzspinnen',
      'Kürbisspinnen',
      'Araniella',
      'Argiope',
      'Gartenkreuzspinne = Araneus diadematus',
      'Riesenkreuzspinne',
      'Vierfleckkreuzspinne',
      'Gehörnte Kreuzspinne',
      'Schulterkreuzspinne',
    ],
  };

  const sets_sc = {
  worms: [
    'Annelida',
    'Clitellata',
    'Echiura',
    'Lumbricidae',
    'Oligochaeta',
    'Megascolecidae',
    'Lumbricus',
    'Lumbricus terrestris',
    'Lumbricus rubellus',
    'Lumbricus badensis',
    'Aporrectodea caliginosa',
  ],
  snails: [
    'Gastropoda',
    'Bivalvia',
    'Cephalopoda',
    'Scaphopoda',
    'Monoplacophora',
    'Pulmonata',
    'Opisthobranchia',
    'Helicidae',
    'Helicigona',
    'Cepaea hortensis',
    'Littorinidae',
    'Planorbidae',
    'Helix',
    'Cepaea',
    'Helix pomatia',
    'Helix lucorum',
    'Helix lutescens',
  ],
  insects: [
    'Insecta',
    'Arachnida',
    'Chilopoda',
    'Diplopoda',
    'Malacostraca',
    'Hymenoptera',
    'Dermaptera',
    'Phthiraptera',
    'Mantodea',
    'Blattodea',
    'Isoptera',
    'Orthoptera',
    'Coleoptera',
    'Siphonaptera',
    'Neuroptera',
    'Lepidoptera',
    'Apidae',
    'Tenthredinidae',
    'Siricidae',
    'Cynipidae',
    'Trichogrammatidae',
    'Formicidae',
    'Apis',
    'Bombus',
    'Anthophora',
    'Megachile',
    'Osmia',
    'Apis mellifera',
    'Apis cerana',
    'Apis dorsata',
    'Apis laboriosa',
    'Apis florea',
    'Apis andreniformis',
  ],
  classes: [
    'Arachnida',
    'Insecta',
    'Chilopoda',
    'Diplopoda',
    'Malacostraca',
  ],
  insect_order: [
    'Hymenoptera',
    'Dermaptera',
    'Phthiraptera',
    'Mantodea',
    'Blattodea',
    'Isoptera',
    'Orthoptera',
    'Coleoptera',
    'Siphonaptera',
    'Neuroptera',
    'Lepidoptera',
  ],
  ants: [
    'Formica',
    'Camponotus',
    'Solenopsis',
    'Tetramorium',
    'Oecophylla',
    'Formica rufa',
    'Formica pratensis',
    'Camponotus ligniperda',
    'Myrmica rubra',
    'Formica sanguinea',
  ],
  molluscs: [
    'Bivalvia',
    'Gastropoda',
    'Cephalopoda',
    'Scaphopoda',
    'Monoplacophora',
    'Unionida',
    'Myida',
    'Arcida',
    'Unionidae',
    'Margaritifera margaritifera',
    'Iridinidae',
    'Anodonta',
    'Unio',
    'Potomida',
    'Anodonta cygnea',
    'Anodonta anatina',
  ],
  spiders: [
    'Araneae',
    'Opiliones',
    'Araneae',
    'Pseudoscorpiones',
    'Solifugae',
    'Araneidae',
    'Hersiliidae',
    'Scytodidae',
    'Pisauridae',
    'Pholcidae',
    'Araneidae',
    'Araniella',
    'Argiope',
    'Araneus diadematus',
    'Araneus angulatus',
    'Araneus quadratus',
    'Gasteracantha cancriformis',
    'Araneus sturmi',
  ],
};

  let selected_set = '';
  let img_index = 0;

  // feed select with options
  const set_select = document.querySelector('#set_select');
  Object.keys(sets).forEach(key => {
    set_select.insertAdjacentHTML('beforeend', `
      <option value="${key}">${key}</option>
    `);
  })

  // Event listener to process one node per 'img-displayed'
  document.addEventListener('img-displayed', () => {
    console.info('display');
    setTimeout(() => {
      if (img_index < sets[selected_set].length) {
        crawl_set();
      }
    }, 1000);
  });

  // Your submit function (via fetch)
  function submit_term(name) {
    const form = document.getElementById('chat-form');
    const promptEl = document.getElementById('prompt');
    promptEl.value = name;

    console.log('Submitting:', name);

    form.querySelector('button').click();
  }

  // Trigger traversal manually
  function crawl_set () {
    let term = sets[selected_set][img_index];
    submit_term(term);
    img_index++;
  }

  document.querySelector('.start_btn').addEventListener('click', function () {
      selected_set = set_select.value;
      img_index = 0;
      console.log(selected_set, sets[selected_set])
      crawl_set();
  })
}
