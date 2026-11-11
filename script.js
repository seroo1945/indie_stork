/* Indie Stork — static landing page. No frameworks, tracking, analytics or cookies. */
const translations = {
  en: {
    skip:'Skip to content',navAbout:'About',navGames:'Our games',navContact:'Contact',navDiscover:'Explore games',
    eyebrow:'INDEPENDENT GAME STUDIO · POLAND',heroA:'A little spark.',heroB:'A whole world',
    heroLead:'We make games filled with curiosity, imagination and a sense of adventure. Every great journey begins with a small idea.',
    heroBtn:'Discover our games',heroSecondary:'Meet the studio',origin:'Crafted independently. Made with heart.',
    heroArtCaption:'A new adventure is taking shape',scroll:'SCROLL TO EXPLORE',
    aboutTag:'THE STORY SO FAR',aboutTitle:'Independent by nature.<br>Curious by design.',
    aboutText:'Indie Stork is a small, independent game studio from Poland. We love creative systems, memorable worlds, and the simple joy of discovering something new. From cozy management games to fantasy adventures, we follow ideas worth exploring.',
    value1:'Made with care',value1Desc:'Thoughtful details and personality',value2:'Built to explore',value2Desc:'Experiments across genres',value3:'Indie at heart',value3Desc:'Creative independence first',
    gamesTag:"WHAT WE'RE MAKING",gamesTitle:'Worlds in the making<span class="orange-dot">.</span>',gamesIntro:'Different ideas. Different genres. One love for games.',
    platformLabel:'PLATFORMS',genreRuneshatter:'DARK FANTASY · TACTICAL MATCH-3',genreFarm:'COZY · FARMING TYCOON',genreBoard:'SIMULATION · MANAGEMENT',status:'IN DEVELOPMENT',
    runeshatterDesc:'A mysterious fantasy journey where matching runes becomes a test of strategy, and one hero grows stronger with every challenge.',
    farmDesc:'Build a farm, grow at your own pace and bring a lively little world to life in a cozy single-player experience.',
    boardDesc:'Turn your passion for tabletop games into a creative studio-building and management adventure.',
    conceptNote:'Visuals are conceptual and do not represent final gameplay. No release dates have been announced.',
    philosophyTag:'OUR LITTLE MANIFESTO',philosophyTitle:'Play is where imagination<br><em>finds its wings.</em>',
    philosophyText:'We believe the best worlds begin with curiosity — and grow with every player who steps inside.',
    contactTag:'STAY IN THE LOOP',contactTitle:'The next chapter<br>is coming<span class="orange-dot">.</span>',
    contactText:"We're building our games and home on the web. More news, updates and ways to get in touch will appear here as the studio grows.",
    contactStatus:'Indie Stork is taking flight',footerLine:'Independent game studio · Made in Poland'
  },
  pl: {
    skip:'Przejdź do treści',navAbout:'O nas',navGames:'Nasze gry',navContact:'Kontakt',navDiscover:'Poznaj gry',
    eyebrow:'NIEZALEŻNE STUDIO GIER · POLSKA',heroA:'Mała iskra.',heroB:'Cały świat',
    heroLead:'Tworzymy gry pełne ciekawości, wyobraźni i przygody. Każda wielka podróż zaczyna się od małego pomysłu.',
    heroBtn:'Poznaj nasze gry',heroSecondary:'Odkryj studio',origin:'Tworzone niezależnie. Z pasją.',
    heroArtCaption:'Nowa przygoda nabiera kształtów',scroll:'ODKRYWAJ DALEJ',
    aboutTag:'NASZA HISTORIA',aboutTitle:'Niezależni z natury.<br>Ciekawi z wyboru.',
    aboutText:'Indie Stork to niewielkie, niezależne studio gier z Polski. Lubimy kreatywne mechaniki, zapadające w pamięć światy i radość odkrywania czegoś nowego. Od przytulnych gier ekonomicznych po fantastyczne przygody — podążamy za pomysłami, które warto rozwijać.',
    value1:'Tworzone z troską',value1Desc:'Detale i własny charakter',value2:'Gotowe na odkrycia',value2Desc:'Eksperymentujemy z gatunkami',value3:'Niezależni z pasji',value3Desc:'Swoboda tworzenia przede wszystkim',
    gamesTag:'NAD CZYM PRACUJEMY',gamesTitle:'Światy, które powstają<span class="orange-dot">.</span>',gamesIntro:'Różne pomysły. Różne gatunki. Jedna pasja do gier.',
    platformLabel:'PLATFORMY',genreRuneshatter:'DARK FANTASY · TAKTYCZNE MATCH-3',genreFarm:'COZY · SYMULATOR FARMY',genreBoard:'SYMULACJA · ZARZĄDZANIE',status:'W PRODUKCJI',
    runeshatterDesc:'Tajemnicza wyprawa fantasy, w której łączenie run wymaga taktyki, a pojedynczy bohater rozwija się z każdym wyzwaniem.',
    farmDesc:'Zbuduj własną farmę, rozwijaj ją we własnym tempie i tchnij życie w przytulny świat dla jednego gracza.',
    boardDesc:'Zamień pasję do planszówek w przygodę z projektowaniem gier i prowadzeniem własnego studia.',
    conceptNote:'Grafiki mają charakter koncepcyjny i nie przedstawiają finalnej rozgrywki. Daty premier nie zostały ogłoszone.',
    philosophyTag:'NASZE MAŁE MANIFESTO',philosophyTitle:'Zabawa to miejsce, w którym wyobraźnia<br><em>rozwija skrzydła.</em>',
    philosophyText:'Wierzymy, że najlepsze światy rodzą się z ciekawości i rosną dzięki każdemu graczowi, który zechce je odwiedzić.',
    contactTag:'BĄDŹ NA BIEŻĄCO',contactTitle:'Kolejny rozdział<br>już powstaje<span class="orange-dot">.</span>',
    contactText:'Tworzymy gry i budujemy nasze miejsce w sieci. Wraz z rozwojem studia pojawią się tu nowe wiadomości, aktualizacje i możliwości kontaktu.',
    contactStatus:'Indie Stork rozwija skrzydła',footerLine:'Niezależne studio gier · Tworzone w Polsce'
  }
};
const toggler=document.getElementById('language-toggle');
function setLanguage(lang){
  const t=translations[lang]||translations.en;
  document.documentElement.lang=lang;
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key=el.getAttribute('data-i18n');
    if(Object.prototype.hasOwnProperty.call(t,key)){
      if(['aboutTitle','gamesTitle','philosophyTitle','contactTitle'].includes(key))el.innerHTML=t[key];
      else el.textContent=t[key];
    }
  });
  toggler.textContent=lang==='en'?'PL':'EN';
  toggler.setAttribute('aria-label',lang==='en'?'Switch site language to Polish':'Zmień język strony na angielski');
  document.title=lang==='en'?'Indie Stork — Independent Game Studio':'Indie Stork — Niezależne studio gier';
  document.querySelector('meta[name="description"]').content=lang==='en'?'Indie Stork is an independent game studio from Poland creating thoughtful worlds, cozy adventures and imaginative games.':'Indie Stork to niezależne studio gier z Polski tworzące gry ekonomiczne, przygody i wyjątkowe światy.';
}
// English by default for international visitors; Polish for Polish browsers.
let lang=navigator.language?.toLowerCase().startsWith('pl')?'pl':'en';
setLanguage(lang);
toggler.addEventListener('click',()=>{lang=lang==='en'?'pl':'en';setLanguage(lang)});
document.getElementById('year').textContent=String(new Date().getFullYear());
