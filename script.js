const videoLinks = [
  "https://www.tiktok.com/@the144.000/video/7529343011130526981",
  "https://www.tiktok.com/@the144.000/video/7591986789489904917",
  "https://www.tiktok.com/@the144.000/video/7516196802194885894",
  "https://www.tiktok.com/@the144.000/video/7587917672847969557",
  "https://www.tiktok.com/@the144.000/video/7592759380815187221",
  "https://www.tiktok.com/@the144.000/video/7593145154840595733",
  "https://www.tiktok.com/@the144.000/video/7422264138279161094",
  "https://www.tiktok.com/@the144.000/photo/7476610551003499831",
  "https://www.tiktok.com/@the144.000/photo/7472381334606859525",
  "https://www.tiktok.com/@the144.000/photo/7470198214667324677",
  "https://www.tiktok.com/@the144.000/video/7466793677310954758",
  "https://www.tiktok.com/@the144.000/photo/7462824240048393478",
  "https://www.tiktok.com/@the144.000/photo/7459934072039607557",
  "https://www.tiktok.com/@the144.000/video/7455055700142640390",
  "https://www.tiktok.com/@the144.000/photo/7455390214945590533",
  "https://www.tiktok.com/@the144.000/video/7433495611107757318",
  "https://www.tiktok.com/@the144.000/video/7430105782311521542",
  "https://www.tiktok.com/@the144.000/video/7430443260839054598",
  "https://www.tiktok.com/@the144.000/video/7419311611292159238",
  "https://www.tiktok.com/@the144.000/video/7416375306333834501",
  "https://www.tiktok.com/@the144.000/photo/7415315880793459974",
  "https://www.tiktok.com/@the144.000/video/7415666727490424069",
  "https://www.tiktok.com/@the144.000/photo/7414263139648228614",
  "https://www.tiktok.com/@the144.000/video/7466615644771896581",
  "https://www.tiktok.com/@the144.000/photo/7464207897694670085",
  "https://www.tiktok.com/@the144.000/video/7463993927461391621",
  "https://www.tiktok.com/@the144.000/video/7466591631391591686",
  "https://www.tiktok.com/@the144.000/video/7464265365275544838",
  "https://www.tiktok.com/@the144.000/video/7476173215358831877",
  "https://www.tiktok.com/@the144.000/photo/7454642119211224325",
  "https://www.tiktok.com/@the144.000/video/7451663670473510149",
  "https://www.tiktok.com/@the144.000/video/7448670412482923782",
  "https://www.tiktok.com/@the144.000/video/7444804927869750584",
  "https://www.tiktok.com/@the144.000/video/7433055140191407366",
  "https://www.tiktok.com/@the144.000/video/7429116595307433221",
  "https://www.tiktok.com/@the144.000/photo/7479130253475024133",
  "https://www.tiktok.com/@the144.000/photo/7479387077763681542",
  "https://www.tiktok.com/@the144.000/photo/7479006108015660293",
  "https://www.tiktok.com/@the144.000/video/7478500253868625157",
  "https://www.tiktok.com/@the144.000/video/7476236731675577655",
  "https://www.tiktok.com/@the144.000/video/7476149399698148663",
  "https://www.tiktok.com/@the144.000/video/7474443258727353605",
  "https://www.tiktok.com/@the144.000/video/7472116219621969207",
  "https://www.tiktok.com/@the144.000/photo/7471996061561720069",
  "https://www.tiktok.com/@the144.000/video/7469470175696276742",
  "https://www.tiktok.com/@the144.000/video/7467582873206344966",
  "https://www.tiktok.com/@the144.000/video/7462051457806716166",
  "https://www.tiktok.com/@the144.000/video/7458676457808661766",
  "https://www.tiktok.com/@the144.000/video/7423799763482512646",
  "https://www.tiktok.com/@the144.000/video/7423549841382362374",
  "https://www.tiktok.com/@the144.000/photo/7423399511571156229",
  "https://www.tiktok.com/@the144.000/video/7420861446008999173",
  "https://www.tiktok.com/@the144.000/video/7416877159500860677",
  "https://www.tiktok.com/@the144.000/photo/7413838404527410437",
  "https://www.tiktok.com/@the144.000/photo/7412818398855417094",
  "https://www.tiktok.com/@the144.000/photo/7412698671344651526",
  "https://www.tiktok.com/@the144.000/video/7410897010980556037",
  "https://www.tiktok.com/@the144.000/video/7410811698799463685",
  "https://www.tiktok.com/@the144.000/video/7404454702856948997",
  "https://www.tiktok.com/@the144.000/photo/7399215844330327302",
  "https://www.tiktok.com/@the144.000/video/7392237863619857670",
  "https://www.tiktok.com/@the144.000/video/7366631572277103877",
  "https://www.tiktok.com/@the144.000/video/7360408995451915525",
  "https://www.tiktok.com/@the144.000/video/7350879829991935238",
  "https://www.tiktok.com/@the144.000/video/7339229877482048773",
  "https://www.tiktok.com/@the144.000/video/7334351496651328774",
  "https://www.tiktok.com/@the144.000/photo/7334120230794333446",
  "https://www.tiktok.com/@the144.000/video/7333684070951505158",
  "https://www.tiktok.com/@the144.000/video/7333314500927458565",
  "https://www.tiktok.com/@the144.000/video/7331394459571211525",
  "https://www.tiktok.com/@the144.000/video/7331184835144191237",
  "https://www.tiktok.com/@the144.000/video/7331048306191240454",
  "https://www.tiktok.com/@the144.000/video/7329655111276416261",
  "https://www.tiktok.com/@the144.000/video/7328870637861162246",
  "https://www.tiktok.com/@the144.000/photo/7328780033227640069",
  "https://www.tiktok.com/@the144.000/video/7328415729072590085",
  "https://www.tiktok.com/@the144.000/video/7326589326551305478",
  "https://www.tiktok.com/@the144.000/video/7325960043252190469",
  "https://www.tiktok.com/@the144.000/video/7325843821898534149",
  "https://www.tiktok.com/@the144.000/video/7325415662170426630",
  "https://www.tiktok.com/@the144.000/video/7325084834911587590",
  "https://www.tiktok.com/@the144.000/video/7325081092518595846",
  "https://www.tiktok.com/@the144.000/photo/7323493282040909062",
  "https://www.tiktok.com/@the144.000/video/7322803449287036165",
  "https://www.tiktok.com/@the144.000/video/7322449140951174405",
  "https://www.tiktok.com/@the144.000/video/7313752558781123845",
  "https://www.tiktok.com/@the144.000/video/7305117323080273157",
  "https://www.tiktok.com/@the144.000/video/7263439561634614533",
  "https://www.tiktok.com/@the144.000/video/7257926646882241798",
  "https://www.tiktok.com/@the144.000/photo/7230427584390008069",
  "https://www.tiktok.com/@the144.000/photo/7229316474408668421",
  "https://www.tiktok.com/@the144.000/video/7228406288991014149",
  "https://www.tiktok.com/@the144.000/video/7225632666203344133",
  "https://www.tiktok.com/@the144.000/photo/7203503742665182469",
  "https://www.tiktok.com/@the144.000/video/7189260006557027589",
  "https://www.tiktok.com/@the144.000/video/7109842196798475525",
  "https://www.tiktok.com/@the144.000/video/7114733601937296645",
  "https://www.tiktok.com/@the144.000/video/7115773253762698502",
  "https://www.tiktok.com/@the144.000/video/7115929511417384197",
  "https://www.tiktok.com/@the144.000/video/7116547558243126534",
  "https://www.tiktok.com/@the144.000/video/7116547963001834758",
  "https://www.tiktok.com/@the144.000/video/7116548275678858501",
  "https://www.tiktok.com/@the144.000/video/7116549181241576710",
  "https://www.tiktok.com/@the144.000/video/7117085170867522821",
  "https://www.tiktok.com/@the144.000/video/7117085683658853637",
  "https://www.tiktok.com/@the144.000/video/7117089393973710086",
  "https://www.tiktok.com/@the144.000/video/7117314181962976517",
  "https://www.tiktok.com/@the144.000/video/7128456712218086662",
  "https://www.tiktok.com/@the144.000/video/7132072477387361542",
  "https://www.tiktok.com/@the144.000/video/7132627272833486086",
  "https://www.tiktok.com/@the144.000/photo/7487026382141181239",
  "https://www.tiktok.com/@the144.000/video/7111439385169595654",
  "https://www.tiktok.com/@the144.000/video/7117667103095704838",
  "https://www.tiktok.com/@the144.000/video/7119207301927554309",
  "https://www.tiktok.com/@the144.000/video/7119905461620477189",
  "https://www.tiktok.com/@the144.000/video/7120644605179170054",
  "https://www.tiktok.com/@the144.000/video/7120645194541796613",
  "https://www.tiktok.com/@the144.000/video/7132906341399530758",
  "https://www.tiktok.com/@the144.000/video/7135123734645476613",
  "https://www.tiktok.com/@the144.000/video/7135125192677903621",
  "https://www.tiktok.com/@the144.000/video/7135822566739987718",
  "https://www.tiktok.com/@the144.000/video/7135834422653340934",
  "https://www.tiktok.com/@the144.000/video/7136192767415340293",
  "https://www.tiktok.com/@the144.000/video/7137348462995164422",
  "https://www.tiktok.com/@the144.000/video/7137350405805133062",
  "https://www.tiktok.com/@the144.000/video/7137354618597625093",
  "https://www.tiktok.com/@the144.000/video/7137363522450640134",
  "https://www.tiktok.com/@the144.000/video/7138038644148948229",
  "https://www.tiktok.com/@the144.000/video/7138039653415914758",
  "https://www.tiktok.com/@the144.000/video/7138040632123215110",
  "https://www.tiktok.com/@the144.000/video/7138041604287286534",
  "https://www.tiktok.com/@the144.000/video/7138808524766776582",
  "https://www.tiktok.com/@the144.000/video/7138810299389332742",
  "https://www.tiktok.com/@the144.000/video/7138812213229391110",
  "https://www.tiktok.com/@the144.000/video/7143625187144043781",
  "https://www.tiktok.com/@the144.000/video/7144773480045776134",
  "https://www.tiktok.com/@the144.000/video/7145126891039608070",
  "https://www.tiktok.com/@the144.000/video/7147125147206569222",
  "https://www.tiktok.com/@the144.000/video/7170913708573478149",
  "https://www.tiktok.com/@the144.000/video/7489456139353034039",
  "https://www.tiktok.com/@the144.000/photo/7490034591948918071",
  "https://www.tiktok.com/@the144.000/video/7490561055773494533",
  "https://www.tiktok.com/@the144.000/photo/7491073565572549893",
  "https://www.tiktok.com/@the144.000/photo/7491778070857190711",
  "https://www.tiktok.com/@the144.000/photo/7490735218681335045",
  "https://www.tiktok.com/@the144.000/photo/7494234769367059717",
  "https://www.tiktok.com/@the144.000/video/7493163763525307654",
  "https://www.tiktok.com/@the144.000/photo/7500589508577185030",
  "https://www.tiktok.com/@the144.000/photo/7500590506183757111",
  "https://www.tiktok.com/@the144.000/video/7503549972835486981",
  "https://www.tiktok.com/@the144.000/video/7507626366825811206",
  "https://www.tiktok.com/@the144.000/photo/7508351641834261765",
  "https://www.tiktok.com/@the144.000/video/7510634947732950278",
  "https://www.tiktok.com/@the144.000/video/7509644588274027781",
  "https://www.tiktok.com/@the144.000/photo/7508854096724626744",
  "https://www.tiktok.com/@the144.000/photo/7522091969338723590",
  "https://www.tiktok.com/@the144.000/photo/7521406652457684280",
  "https://www.tiktok.com/@the144.000/video/7520272394645277958",
  "https://www.tiktok.com/@the144.000/photo/7524872957382987014",
  "https://www.tiktok.com/@the144.000/video/7529364224234065208",
  "https://www.tiktok.com/@the144.000/video/7529365010284350726",
  "https://www.tiktok.com/@the144.000/video/7529365689786813701",
  "https://www.tiktok.com/@the144.000/video/7529373615632944390",
  "https://www.tiktok.com/@the144.000/video/7541403194199510289",
  "https://www.tiktok.com/@the144.000/video/7541486764842568976",
  "https://www.tiktok.com/@the144.000/video/7542133633960774929",
  "https://www.tiktok.com/@the144.000/video/7544068557504646416",
  "https://www.tiktok.com/@the144.000/video/7542934756443393281",
  "https://www.tiktok.com/@the144.000/video/7548430191673101585",
  "https://www.tiktok.com/@the144.000/photo/7567241224764050708",
  "https://www.tiktok.com/@the144.000/video/7572983671741779221",
  "https://www.tiktok.com/@the144.000/video/7586139960034577684",
  "https://www.tiktok.com/@the144.000/video/7586414871374302485",
  "https://www.tiktok.com/@the144.000/video/7587432190120955156",
  "https://www.tiktok.com/@the144.000/video/7587576655783136533",
  "https://www.tiktok.com/@the144.000/video/7587612406663220500",
  "https://www.tiktok.com/@the144.000/video/7595609616793292053",
  "https://www.tiktok.com/@the144.000/video/7594629260497784085",
  "https://www.tiktok.com/@the144.000/video/7595700937604320533",
  "https://www.tiktok.com/@the144.000/video/7594865849844976916"
];

document.addEventListener("DOMContentLoaded", () => {

  const STORAGE_KEY = "remainingSpiritMessages";

  let remaining =
    JSON.parse(localStorage.getItem(STORAGE_KEY)) || [...videoLinks];

  let selectedLink = null;
  let rotation = 0;
  let spinning = false;

  const wheel = document.getElementById("wheel");
  const message = document.getElementById("message");
  const openBtn = document.getElementById("openBtn");

  function extractVideoId(url) {
    const match = url.match(/video\/(\d+)/);
    return match ? match[1] : null;
  }

  function getRandomLink() {
    if (remaining.length === 0) {
      remaining = [...videoLinks];
    }

    const index = Math.floor(Math.random() * remaining.length);
    const chosen = remaining.splice(index, 1)[0];

    localStorage.setItem(STORAGE_KEY, JSON.stringify(remaining));
    return chosen;
  }

  wheel.addEventListener("click", () => {
    if (spinning) return;
    spinning = true;

    message.style.opacity = 0;
    openBtn.style.opacity = 0;

    rotation += 1080 + Math.random() * 360;
    wheel.style.transform = `rotate(${rotation}deg)`;

    selectedLink = getRandomLink();

    setTimeout(() => {
      message.style.opacity = 1;
      openBtn.style.opacity = 1;
      openBtn.style.pointerEvents = "auto";
      loading.style.opacity = 0;
      spinning = false;
    }, 1200);
  });

  openBtn.addEventListener("click", () => {
    if (!selectedLink) return;

    //اخفاء الزر فورا ومنع الضغط المتكرر
    openBtn.style.opacity = 0;
    openBtn.style.pointerEvents = "none";const

    // اظهار اللودنج
    loading.style.opacity = 1;

    const videoId = extractVideoId(selectedLink);

    // إذا كان فيديو نحاول فتح التطبيق
    if (videoId) {

      const appLink = `snssdk1233://aweme/detail/${videoId}`;

      // محاولة فتح التطبيق
      window.location.href = appLink;

      // fallback للويب بعد 1.5 ثانية
      setTimeout(() => {
        window.location.href = selectedLink;
      }, 500);

    } else {
      // الصور أو أي رابط آخر يفتح مباشرة بالمتصفح
      window.open(selectedLink, "_blank", "noopener,noreferrer");
    }

    selectedLink = null;
  });

});
