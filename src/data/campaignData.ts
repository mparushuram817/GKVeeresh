export interface TranslationStrings {
  // Navigation & General
  navHome: string;
  navAboutRajamma: string;
  navAboutDrVeeresh: string;
  navCommitments: string;
  navService: string;
  navBallot: string;
  navContact: string;
  callNow: string;
  whatsappMsg: string;
  shareOnWhatsApp: string;

  // Hero Section
  electionTypeBadge: string;
  partyName: string;
  partyFullName: string;
  candidateName: string;
  candidateRole: string;
  villagesCoveredTitle: string;
  villages: string[];
  ballotBoxTitle: string;
  ballotNumberHighlight: string;
  ballotSymbolHighlight: string;
  ballotInstructionShort: string;
  heroSubheadline: string;

  // About Rajamma
  aboutRajammaTitle: string;
  aboutRajammaSubtitle: string;
  aboutRajammaIntro: string;
  aboutRajammaPillars: { title: string; desc: string }[];
  rajammaPlaceholderTitle: string;
  rajammaPlaceholderContent: string;

  // About Dr. Veeresh
  aboutDrVeereshTitle: string;
  aboutDrVeereshSubtitle: string;
  aboutDrVeereshIntro: string;
  drVeereshRoleBadge: string;
  drVeereshPoints: { title: string; desc: string }[];
  drVeereshPlaceholderTitle: string;
  drVeereshPlaceholderContent: string;

  // Commitments
  commitmentsTitle: string;
  commitmentsSubtitle: string;
  villageTabs: {
    name: string;
    description: string;
    focusAreas: string[];
  }[];
  universalCommitmentsTitle: string;
  universalCommitments: { title: string; desc: string }[];
  commitmentsPlaceholderTitle: string;
  commitmentsPlaceholderContent: string;

  // Service Work
  serviceTitle: string;
  serviceSubtitle: string;
  serviceTimeline: { period: string; title: string; desc: string }[];
  servicePlaceholderTitle: string;
  servicePlaceholderContent: string;

  // Ballot & How to vote
  ballotSectionTitle: string;
  ballotSectionSubtitle: string;
  sampleBallotNotice: string;
  tableColSerial: string;
  tableColName: string;
  tableColSymbol: string;
  tableColStamp: string;
  blankCandidateNotice: string;
  interactiveStampPrompt: string;
  stampedSuccessMsg: string;
  votingStepsTitle: string;
  votingSteps: { step: string; title: string; desc: string }[];

  // Contact
  contactTitle: string;
  contactSubtitle: string;
  phoneNumberLabel: string;
  emailLabel: string;
  villagesLabel: string;
  quickMessageTitle: string;
  quickMessageSubtitle: string;
  formVillageSelect: string;
  formSelectVillagePrompt: string;
  formMessageLabel: string;
  formMessagePlaceholder: string;
  formSendWhatsApp: string;
  formSendEmail: string;
  privacyNotice: string;

  // Footer
  footerDisclaimer: string;
  footerPublisher: string;
  backToTop: string;
}

export const CAMPAIGN_INFO = {
  candidateNameTe: "బురునదొడ్డి రాజమ్మ",
  candidateNameEn: "Burunadoddi Rajamma",
  drVeereshNameTe: "డా. గొంగళి కురువ వీరేష్",
  drVeereshNameEn: "Dr. Gongali Kuruva Veeresh",
  postTe: "ఎంపీటీసీ (MPTC) అభ్యర్థి",
  postEn: "MPTC Candidate",
  ballotNumber: "3",
  symbolTe: "సీలింగ్ ఫ్యాన్",
  symbolEn: "Ceiling Fan",
  phone: "9700949414",
  phoneDisplay: "+91 97009 49414",
  email: "info@gkveereshkhyruppalla.online",
  whatsappUrl: "https://wa.me/919700949414",
  candidatePhoto: "/assets/aistudio/WhatsApp_Image_2026-10-29_at_12.27.21_PM_05751e81.jpeg",
  drVeereshPhoto: "/assets/aistudio/WhatsApp_Image_2026-10-29_at_12.25.06_PM_52f8a6cc.jpeg",
  villages: [
    { te: "కైరుప్పల", en: "Kairuppala" },
    { te: "పుప్పాల దొడ్డి", en: "Puppala Doddi" },
    { te: "చెన్నంపల్లి", en: "Chennampalli" },
  ],
};

export const teluguContent: TranslationStrings = {
  navHome: "హోమ్",
  navAboutRajamma: "అభ్యర్థి గురించి",
  navAboutDrVeeresh: "డా. వీరేష్ గారి గురించి",
  navCommitments: "హామీలు & ప్రణాళిక",
  navService: "సేవా కార్యక్రమాలు",
  navBallot: "ఓటు వేసే విధానం",
  navContact: "సంప్రదించండి",
  callNow: "కాల్ చేయండి",
  whatsappMsg: "వాట్సాప్ సందేశం",
  shareOnWhatsApp: "వాట్సాప్‌లో షేర్ చేయండి",

  electionTypeBadge: "వైఎస్సార్ కాంగ్రెస్ పార్టీ (YSRCP) ఎంపీటీసీ ఎన్నికలు",
  partyName: "వైఎస్సార్ కాంగ్రెస్ పార్టీ (YSRCP)",
  partyFullName: "యువజన శ్రామిక రైతు కాంగ్రెస్ పార్టీ",
  candidateName: "బురునదొడ్డి రాజమ్మ",
  candidateRole: "MPTC అభ్యర్థి",
  villagesCoveredTitle: "పరిధిలోని గ్రామాలు:",
  villages: ["కైరుప్పల", "పుప్పాల దొడ్డి", "చెన్నంపల్లి"],
  ballotBoxTitle: "ఓటు వేయండి — మీ భవిష్యత్తు కోసం",
  ballotNumberHighlight: "క్రమ సంఖ్య: 3",
  ballotSymbolHighlight: "ఫ్యాన్ గుర్తు",
  ballotInstructionShort: "బ్యాలెట్ పత్రంలో 3వ నంబర్ బురునదొడ్డి రాజమ్మ గారి ఫ్యాన్ గుర్తుపై స్వస్తిక్ ముద్ర వేయండి",
  heroSubheadline:
    "ప్రజా సేవయే పరమావధిగా కైరుప్పల, పుప్పాల దొడ్డి, చెన్నంపల్లి గ్రామాల సమగ్ర అభివృద్ధి మరియు సంక్షేమం కోసం మీ అమూల్యమైన ఓటును ఫ్యాన్ గుర్తుపై వేసి గెలిపించండి.",

  aboutRajammaTitle: "అభ్యర్థి పరిచయం — బురునదొడ్డి రాజమ్మ",
  aboutRajammaSubtitle: "గ్రామ ప్రజల కష్టసుఖాలు తెలిసిన స్థానిక మహిళా నేత",
  aboutRajammaIntro:
    "బురునదొడ్డి రాజమ్మ గారు కైరుప్పల ప్రాంత ప్రజలతో మమేకమై, గ్రామీణ మహిళల సంక్షేమం, పిల్లల పౌష్టికాహారం, నిరుపేదల సంక్షేమ పథకాల సక్రమ అమలు కోసం నిరంతరం పరితపించే ప్రజా సేవకురాలు. గ్రామంలో ప్రతి గడపకూ అందుబాటులో ఉండే సుపరిచిత వ్యక్తి.",
  aboutRajammaPillars: [
    {
      title: "ప్రజలకు అందుబాటులో ఉండే నాయకత్వం",
      desc: "ఎల్లప్పుడూ గ్రామంలోనే ఉంటూ ప్రజల సమస్యలను ప్రత్యక్షంగా విని పరిష్కరించే నిబద్ధత.",
    },
    {
      title: "మహిళా సాధికారత & సంక్షేమం",
      desc: "స్వయం సహాయక సంఘాల పటిష్టత, గ్రామీణ మహిళలకు ఆర్థిక స్వావలంబన కల్పించడం ప్రధాన లక్ష్యం.",
    },
    {
      title: "పారదర్శక ప్రజాసేవ",
      desc: "ప్రభుత్వ సంక్షేమ పథకాలు అర్హులైన ప్రతి కుటుంబానికి దక్కేలా చిత్తశుద్ధితో కృషి చేయడం.",
    },
  ],
  rajammaPlaceholderTitle: "అదనపు వ్యక్తిగత వివరాల నివేదిక",
  rajammaPlaceholderContent:
    "[PLACEHOLDER: Rajamma's background / రాజమ్మ గారి సమగ్ర పూర్వరంగం, విద్యార్హతలు మరియు కుటుంబ నేపథ్య వివరాలు ఇక్కడ నమోదు చేయబడతాయి]",

  aboutDrVeereshTitle: "ప్రచార సారథి — డా. గొంగళి కురువ వీరేష్",
  aboutDrVeereshSubtitle: "నిస్వార్థ ప్రజా సేవకుడు • వైద్య రంగ ప్రముఖులు",
  aboutDrVeereshIntro:
    "బురునదొడ్డి రాజమ్మ గారి భర్త డా. గొంగళి కురువ వీరేష్ గారు ఈ ఎన్నికల ప్రచారానికి ముందుండి నాయకత్వం వహిస్తున్నారు. వైద్య వృత్తిలో ఉంటూనే సమాజ సేవ పట్ల ప్రగాఢ నిబద్ధత కలిగిన వ్యక్తిగా కైరుప్పల పరిసర ప్రాంత ప్రజల మన్ననలు పొందారు.",
  drVeereshRoleBadge: "ప్రచార సారథి & ప్రజా సేవకులు",
  drVeereshPoints: [
    {
      title: "నిస్వార్థ ప్రజా సేవ",
      desc: "ఆపదలో ఉన్న పేద ప్రజలకు, అత్యవసర సమయాల్లో గ్రామస్తులకు అండగా నిలబడే సేవా గుణం.",
    },
    {
      title: "సామాజిక బాధ్యత & వికాసం",
      desc: "గ్రామీణ ప్రాంతాల్లో ప్రజారోగ్య అవగాహన, పరిశుభ్రత, మరియు యువతలో విద్యా స్పృహ పెంచడంలో ఎల్లప్పుడూ ముందుంటారు.",
    },
    {
      title: "గ్రామాల సమస్యలపై స్పష్టమైన అవగాహన",
      desc: "కైరుప్పల, పుప్పాల దొడ్డి, చెన్నంపల్లి గ్రామాల ప్రాథమిక అవసరాలు, తాగునీరు, మౌలిక సదుపాయాల సమస్యలపై సంపూర్ణ దృష్టి.",
    },
  ],
  drVeereshPlaceholderTitle: "అదనపు విద్యార్హత & ప్రజాసేవ వివరాలు",
  drVeereshPlaceholderContent:
    "[PLACEHOLDER: Dr. Veeresh's education, profession, years of service / డా. వీరేష్ గారి ఉన్నత విద్యార్హతలు, వృత్తి మరియు ప్రజాసేవ కాలం వివరాలు ఇక్కడ నమోదు చేయబడతాయి]",

  commitmentsTitle: "మూడు గ్రామాల అభివృద్ధికి మన కార్యాచరణ",
  commitmentsSubtitle: "కైరుప్పల • పుప్పాల దొడ్డి • చెన్నంపల్లి సమగ్ర వికాసమే మా సంకల్పం",
  villageTabs: [
    {
      name: "కైరుప్పల (Kairuppala)",
      description: "కైరుప్పల ప్రధాన పంచాయతీ కేంద్రంగా అన్ని మౌలిక వసతులు, సమగ్ర అభివృద్ధికి కృషి.",
      focusAreas: [
        "నిరంతర శుద్ధ తాగునీటి సరఫరా వ్యవస్థ పర్యవేక్షణ",
        "అంతర్గత సిమెంట్ (CC) రోడ్లు మరియు మురుగు కాల్వల ఆధునీకరణ",
        "గ్రామ సచివాలయ సేవలు ప్రజలకు వేగంగా అందేలా చొరవ",
      ],
    },
    {
      name: "పుప్పాల దొడ్డి (Puppala Doddi)",
      description: "పుప్పాల దొడ్డి గ్రామంలో ప్రతి వీధికి శుభ్రత, పక్కా లైటింగ్, రైతులకు అవసరమైన సదుపాయాలు.",
      focusAreas: [
        "రైతులకు, వ్యవసాయ కూలీలకు అవసరమైన రోడ్డు అనుసంధానం",
        "తాగునీటి ట్యాంకుల క్రమబద్ధ నిర్వహణ మరియు ఫ్లోరైడ్ రహిత నీరు",
        "వీధి దీపాలు మరియు రాత్రి సమయాల్లో రక్షణ చర్యలు",
      ],
    },
    {
      name: "చెన్నంపల్లి (Chennampalli)",
      description: "చెన్నంపల్లి గ్రామ రూపురేఖలు మార్చడానికి, విద్యార్థులు మరియు మహిళల సౌకర్యాలకు ప్రాధాన్యం.",
      focusAreas: [
        "గ్రామ పాఠశాల మౌలిక వసతుల మెరుగుదల మరియు అంగన్‌వాడీ కేంద్రాల బలోపేతం",
        "పారిశుద్ధ్య నిర్వహణ మరియు చెత్త సేకరణ పర్యవేక్షణ",
        "యువతకు క్రీడా స్థలాలు మరియు మార్గదర్శక కేంద్రాలు",
      ],
    },
  ],
  universalCommitmentsTitle: "ప్రధాన ఉమ్మడి ప్రాధాన్యతలు",
  universalCommitments: [
    {
      title: "స్వచ్ఛమైన తాగునీరు",
      desc: "ప్రతి ఇంటికి నిర్దేశిత సమయాల్లో స్వచ్ఛమైన, సురక్షితమైన తాగునీరు చేరేలా చూడడం.",
    },
    {
      title: "పటిష్టమైన డ్రైనేజీ & రహదారులు",
      desc: "వర్షాకాలంలో నీరు నిలవకుండా మురుగు కాలువలు తీయించడం, గుంతలు లేని అంతర్గత రహదారులు.",
    },
    {
      title: "రైతు సంక్షేమం & పశుసంవర్ధక తోడ్పాటు",
      desc: "వ్యవసాయ పనులకు అవసరమైన ప్రభుత్వ పథకాలు, సకాలంలో విత్తనాలు మరియు ఎరువుల సమన్వయం.",
    },
    {
      title: "అత్యవసర వేళల్లో అందుబాటులో సేవ",
      desc: "గ్రామస్తులకు ఏ కష్టం వచ్చినా తక్షణమే స్పందించే ప్రజా ప్రతినిధిగా ఉండడం.",
    },
  ],
  commitmentsPlaceholderTitle: "వివరణాత్మక కార్యాచరణ ప్రణాళిక",
  commitmentsPlaceholderContent:
    "[PLACEHOLDER: Commitments list / మూడు గ్రామాల అభివృద్ధికి సంబంధించి విభాగాల వారీ సమగ్ర నివేదిక మరియు పూర్తి హామీల జాబితా ఇక్కడ పొందుపరచబడుతుంది]",

  serviceTitle: "ప్రజలతో కలిసి చేసిన సేవా ప్రస్థానం",
  serviceSubtitle: "మాటలకే పరిమితం కాకుండా చేతల్లో చూపిన నిబద్ధత",
  serviceTimeline: [
    {
      period: "నిరంతర సేవా ప్రయాణం",
      title: "ప్రజారోగ్య అవగాహన & పారిశుద్ధ్య కార్యక్రమాలు",
      desc: "గ్రామాల్లో సీజనల్ వ్యాధుల నివారణకు బ్లీచింగ్ పిచికారీ, దోమల నివారణ చర్యలు, స్వచ్ఛతా అవగాహన నిర్వహించడం.",
    },
    {
      period: "వర్షాకాలం & కష్ట సమయాల్లో",
      title: "బాధిత కుటుంబాలకు నిత్యావసరాల తోడ్పాటు",
      desc: "వర్షాలు మరియు ప్రకృతి వైపరీత్యాల వేళల్లో పేద, వృద్ధ కుటుంబాలకు చేదోడు వాదోడుగా నిలవడం.",
    },
    {
      period: "యువత & విద్యార్థుల ప్రోత్సాహం",
      title: "గ్రామీణ విద్యా సదుపాయాల పర్యవేక్షణ",
      desc: "పాఠశాలల్లో పిల్లలకు అవసరమైన పుస్తకాలు, తాగునీరు, విద్యుత్ సమస్యల పరిష్కారానికి అధికారులతో మాట్లాడి కృషి చేయడం.",
    },
  ],
  servicePlaceholderTitle: "సేవా కార్యక్రమాల సమగ్ర జాబితా",
  servicePlaceholderContent:
    "[PLACEHOLDER: Service activities done / ఇప్పటివరకు గ్రామాల్లో నిర్వహించిన సేవా కార్యక్రమాలు, సహాయక చర్యల తేదీలు మరియు వివరాలు ఇక్కడ పొందుపరచబడుతుంది]",

  ballotSectionTitle: "ఎలా ఓటు వేయాలి? — బ్యాలెట్ పత్రం గైడ్",
  ballotSectionSubtitle: "మీ ఓటును సరైన రీతిలో వేయడానికి ఈ క్రింది నమూనా బ్యాలెట్ చూడండి",
  sampleBallotNotice: "బ్యాలెట్ పత్రం నమూనా (Sample)",
  tableColSerial: "క్రమ సంఖ్య",
  tableColName: "అభ్యర్థి పేరు",
  tableColSymbol: "గుర్తు",
  tableColStamp: "ఓటు వేసే ప్రదేశం",
  blankCandidateNotice: "ఇతర అభ్యర్థి / ఖాళీ వరుస",
  interactiveStampPrompt: "పై వరుస 3లో మీ ఓటును పరీక్షించండి (ట్యాప్ చేయండి)",
  stampedSuccessMsg: "మీ ఓటు సరిగ్గా సంఖ్య 3 ఫ్యాన్ గుర్తుపై ముద్రించబడింది!",
  votingStepsTitle: "ఓటు వేసే సరైన పద్ధతి:",
  votingSteps: [
    {
      step: "1",
      title: "క్రమ సంఖ్య 3ని గుర్తించండి",
      desc: "పోలింగ్ కేంద్రంలో ఇచ్చిన బ్యాలెట్ పేపర్‌లో 3వ నంబరు వద్ద 'బురునదొడ్డి రాజమ్మ' పేరు మరియు 'సీలింగ్ ఫ్యాన్' గుర్తును చూడండి.",
    },
    {
      step: "2",
      title: "స్వస్తిక్ ముద్ర వేయండి",
      desc: "పోలింగ్ అధికారి ఇచ్చిన స్వస్తిక్ రబ్బరు స్టాంప్‌ను తీసుకొని, సరిగ్గా ఫ్యాన్ గుర్తు ఉన్న గడి లోపలే స్పష్టంగా ముద్ర వేయండి.",
    },
    {
      step: "3",
      title: "బ్యాలెట్ పేపర్‌ను నిలువుగా మడవండి",
      desc: "సిరా ఆరిపోయే లోపు పక్క వరుసలకు అంటకుండా ఉండేందుకు బ్యాలెట్ పేపర్‌ను ముందుగా నిలువుగా, ఆ తర్వాత అడ్డంగా మడిచి బ్యాలెట్ బాక్స్‌లో వేయండి.",
    },
  ],

  contactTitle: "మమ్మల్ని సంప్రదించండి",
  contactSubtitle: "మీ సమస్యలు, సూచనలు లేదా సందేశాలు నేరుగా పంపండి",
  phoneNumberLabel: "ఫోన్ నంబర్",
  emailLabel: "ఈమెయిల్ చిరునామా",
  villagesLabel: "పరిధిలోని గ్రామాలు",
  quickMessageTitle: "నేరుగా సందేశం పంపండి",
  quickMessageSubtitle: "వాట్సాప్ లేదా ఈమెయిల్ ద్వారా సులభంగా మీ సూచనలను పంపవచ్చు",
  formVillageSelect: "మీ గ్రామాన్ని ఎంచుకోండి",
  formSelectVillagePrompt: "-- గ్రామాన్ని ఎంచుకోండి --",
  formMessageLabel: "మీ సందేశం / సమస్య వివరాలు",
  formMessagePlaceholder: "మీ గ్రామంలోని సమస్య లేదా అభ్యర్థికి మీ శుభాకాంక్షలు ఇక్కడ రాయండి...",
  formSendWhatsApp: "వాట్సాప్‌లో పంపండి",
  formSendEmail: "ఈమెయిల్ ద్వారా పంపండి",
  privacyNotice:
    "గమనిక: ఈ వెబ్‌సైట్ మీ వ్యక్తిగత సమాచారాన్ని సేకరించదు లేదా భద్రపరచదు. మీరు టైప్ చేసిన వివరాలు నేరుగా మీ వాట్సాప్ లేదా ఈమెయిల్ యాప్‌లో మాత్రమే తెరవబడతాయి.",

  footerDisclaimer: "ఇది అభ్యర్థి ప్రచార వెబ్సైట్. అధికారిక వైఎస్ఆర్సీపీ పార్టీ వెబ్సైట్ కాదు.",
  footerPublisher: "Published by: Gongali Kuruva Veeresh",
  backToTop: "పైకి వెళ్ళండి",
};

export const englishContent: TranslationStrings = {
  navHome: "Home",
  navAboutRajamma: "About Candidate",
  navAboutDrVeeresh: "About Dr. Veeresh",
  navCommitments: "Commitments",
  navService: "Service Work",
  navBallot: "How to Vote",
  navContact: "Contact",
  callNow: "Call",
  whatsappMsg: "WhatsApp",
  shareOnWhatsApp: "Share Campaign",

  electionTypeBadge: "YSRCP MPTC Election Campaign",
  partyName: "YSR Congress Party (YSRCP)",
  partyFullName: "Yuvajana Sramika Rythu Congress Party",
  candidateName: "Burunadoddi Rajamma",
  candidateRole: "MPTC Candidate",
  villagesCoveredTitle: "Constituency Villages:",
  villages: ["Kairuppala", "Puppala Doddi", "Chennampalli"],
  ballotBoxTitle: "Cast Your Vote for Progress",
  ballotNumberHighlight: "Serial No: 3",
  ballotSymbolHighlight: "Ceiling Fan Symbol",
  ballotInstructionShort: "Stamp your vote on Serial No. 3 — Ceiling Fan symbol for Burunadoddi Rajamma",
  heroSubheadline:
    "Dedicated to the holistic development, clean water, better roads, and public welfare across Kairuppala, Puppala Doddi, and Chennampalli villages. Vote for the Ceiling Fan symbol.",

  aboutRajammaTitle: "About the Candidate — Burunadoddi Rajamma",
  aboutRajammaSubtitle: "A compassionate, grassroots leader rooted in our villages",
  aboutRajammaIntro:
    "Burunadoddi Rajamma is a dedicated grassroots leader deeply connected to the residents of Kairuppala, Puppala Doddi, and Chennampalli. She is passionately committed to village women's empowerment, child nutrition, and ensuring government welfare benefits reach every eligible household without discrimination.",
  aboutRajammaPillars: [
    {
      title: "Accessible Leadership",
      desc: "Remaining permanently in the village to listen firsthand to people's issues and resolve them swiftly.",
    },
    {
      title: "Women Empowerment & Welfare",
      desc: "Strengthening self-help groups (SHGs) and creating sustainable financial independence for rural women.",
    },
    {
      title: "Transparent Public Service",
      desc: "Working with utmost integrity to ensure social welfare schemes reach every deserving village family.",
    },
  ],
  rajammaPlaceholderTitle: "Additional Candidate Background Information",
  rajammaPlaceholderContent:
    "[PLACEHOLDER: Rajamma's background / Detailed educational qualifications, personal background, and family history will be inserted here]",

  aboutDrVeereshTitle: "Campaign Leader — Dr. Gongali Kuruva Veeresh",
  aboutDrVeereshSubtitle: "Selfless Public Servant • Respected Medical Professional",
  aboutDrVeereshIntro:
    "Dr. Gongali Kuruva Veeresh, husband of candidate Burunadoddi Rajamma, is actively leading this democratic election campaign. As a medical doctor deeply involved in public service, he has earned wide respect for his selfless commitment to the welfare and dignity of rural families in the Kairuppala region.",
  drVeereshRoleBadge: "Campaign Leader & Social Advocate",
  drVeereshPoints: [
    {
      title: "Selfless Humanitarian Service",
      desc: "Always standing beside rural families, elderly citizens, and individuals facing unexpected emergencies.",
    },
    {
      title: "Community Health & Sanitation Awareness",
      desc: "Actively spearheading local public health awareness, disease prevention, and youth educational motivation.",
    },
    {
      title: "Deep Understanding of Grassroots Issues",
      desc: "Thorough grasp of critical priorities including drinking water, internal roads, and civic facilities across all three villages.",
    },
  ],
  drVeereshPlaceholderTitle: "Additional Qualifications & Service Records",
  drVeereshPlaceholderContent:
    "[PLACEHOLDER: Dr. Veeresh's education, profession, years of service / Detailed degrees, professional qualifications, and years of public service records will be inserted here]",

  commitmentsTitle: "Our Action Plan for the Three Villages",
  commitmentsSubtitle: "Comprehensive, transparent development for Kairuppala • Puppala Doddi • Chennampalli",
  villageTabs: [
    {
      name: "Kairuppala",
      description: "As the principal panchayat center, focused on upgraded infrastructure and prompt civic services.",
      focusAreas: [
        "Uninterrupted potable drinking water supply and overhead reservoir maintenance",
        "Modernizing internal CC roads and storm-water drainage networks",
        "Ensuring smooth, prompt delivery of Village Secretariat (Sachivalayam) services",
      ],
    },
    {
      name: "Puppala Doddi",
      description: "Dedicated to street sanitation, reliable lighting, and strong support for local farmers.",
      focusAreas: [
        "Enhanced farm approach road connectivity for agricultural workers and farmers",
        "Regular maintenance of drinking water tanks and fluoride-free filtration",
        "High-efficiency street LED illumination and night safety measures",
      ],
    },
    {
      name: "Chennampalli",
      description: "Prioritizing village school facilities, childcare nourishment, and clean surroundings.",
      focusAreas: [
        "Infrastructure improvements in village primary schools and Anganwadi centers",
        "Systematic village sanitation and regular waste management oversight",
        "Safe recreational spaces and youth guidance programs",
      ],
    },
  ],
  universalCommitmentsTitle: "Key Common Priorities Across All Villages",
  universalCommitments: [
    {
      title: "Clean & Safe Drinking Water",
      desc: "Ensuring timely and purified drinking water supply reaches every neighborhood consistently.",
    },
    {
      title: "All-Weather Roads & Solid Drainage",
      desc: "Clearing blockages, constructing solid CC roads, and preventing water-logging during monsoon seasons.",
    },
    {
      title: "Farmer & Agricultural Welfare",
      desc: "Coordinating with government agricultural channels for timely seed, fertilizer, and crop insurance support.",
    },
    {
      title: "Round-the-Clock Emergency Accessibility",
      desc: "Serving as an ever-present representative who responds without delay whenever a village family needs help.",
    },
  ],
  commitmentsPlaceholderTitle: "Comprehensive Development Manifesto",
  commitmentsPlaceholderContent:
    "[PLACEHOLDER: Commitments list / Detailed village-by-village budget proposals and itemized commitments list will be inserted here]",

  serviceTitle: "Our Service Track Record",
  serviceSubtitle: "Action-oriented public service that speaks louder than promises",
  serviceTimeline: [
    {
      period: "Ongoing Community Initiatives",
      title: "Public Health & Sanitation Drives",
      desc: "Assisting local bodies in anti-larval spraying, seasonal fever prevention, and clean village campaigns.",
    },
    {
      period: "Monsoon & Emergency Times",
      title: "Essential Support for Vulnerable Families",
      desc: "Extending a helping hand to daily wage earners, elderly residents, and families in times of seasonal distress.",
    },
    {
      period: "Youth & Educational Encouragement",
      title: "Bridging Village Needs with Administrative Authorities",
      desc: "Representing grievances regarding school amenities, power cuts, and public road repairs to mandal officials.",
    },
  ],
  servicePlaceholderTitle: "Verified Service History Log",
  servicePlaceholderContent:
    "[PLACEHOLDER: Service activities done / Complete chronology, dates, and documentation of past public welfare activities will be inserted here]",

  ballotSectionTitle: "How to Vote — Sample Ballot Guide",
  ballotSectionSubtitle: "Familiarize yourself with the official paper ballot format to cast your vote accurately",
  sampleBallotNotice: "బ్యాలెట్ పత్రం నమూనా (Sample)",
  tableColSerial: "Sl. No.",
  tableColName: "Candidate Name",
  tableColSymbol: "Symbol",
  tableColStamp: "Voting Space",
  blankCandidateNotice: "Other Candidate / Blank Row",
  interactiveStampPrompt: "Click Row 3 to simulate your ballot stamp!",
  stampedSuccessMsg: "Vote accurately stamped on Serial No. 3 — Ceiling Fan Symbol!",
  votingStepsTitle: "Correct Voting Procedure:",
  votingSteps: [
    {
      step: "1",
      title: "Locate Serial Number 3",
      desc: "On your pink/white MPTC ballot paper, check row number 3 for candidate name 'Burunadoddi Rajamma' and the 'Ceiling Fan' symbol.",
    },
    {
      step: "2",
      title: "Apply the Swastik Stamp",
      desc: "Take the inked rubber stamp provided by the polling officer and press it firmly inside the demarcated box on row 3.",
    },
    {
      step: "3",
      title: "Fold Vertically First",
      desc: "Fold the ballot paper lengthwise first so wet ink does not smudge onto other rows, then fold horizontally and slip into the ballot box.",
    },
  ],

  contactTitle: "Contact the Campaign",
  contactSubtitle: "Reach out directly with your feedback, village issues, or messages",
  phoneNumberLabel: "Phone Number",
  emailLabel: "Email Address",
  villagesLabel: "Covered Villages",
  quickMessageTitle: "Send a Direct Message",
  quickMessageSubtitle: "Easily prepare a message and send it straight via WhatsApp or Email",
  formVillageSelect: "Select Your Village",
  formSelectVillagePrompt: "-- Choose Village --",
  formMessageLabel: "Your Message or Village Issue",
  formMessagePlaceholder: "Type your village grievance, query, or best wishes here...",
  formSendWhatsApp: "Send via WhatsApp",
  formSendEmail: "Send via Email",
  privacyNotice:
    "Note: This website does not store or collect personal data. Your input opens directly in your phone's WhatsApp or Email application.",

  footerDisclaimer: "ఇది అభ్యర్థి ప్రచార వెబ్సైట్. అధికారిక వైఎస్ఆర్సీపీ పార్టీ వెబ్సైట్ కాదు.",
  footerPublisher: "Published by: Gongali Kuruva Veeresh",
  backToTop: "Back to Top",
};
