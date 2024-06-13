# Jobchaser-react

Avancerad frontendutveckling och Typescript

- https://chasacademy.instructure.com/courses/289/assignments/1594
- https://app.excalidraw.com/l/9THk15pMa6N/7gU3d5sgfNX
- Köra applikationen:

```
npm run dev
```

- Klicka på userikonen i nav bar och skapa en användare, minst 6 tecken i lösenordet.
<br><br><br>
# Individuellt Reactprojekt: Jobchaser
<br>

## Del 1

https://chasacademy.instructure.com/courses/289/assignments/1594?module_item_id=7976

### Om Jobchaser

Jobchaser är ett verktyg för YH-studenter att hitta LIA eller jobb på ett effektivt sätt. En första enkel skiss visas nedan.
Endast en userstory finns just nu tillgodo: "Som användare vill jag kunna se en lista av jobb".
Testdata för varje jobb finns att ladda hem här [text](https://github.com/chasacademy-sandra-larsson/react-jobchaser) to an external site.. Det går också bra att använda egen data, eller modifiera. Använd de dataattribut som passar ditt projekt!

![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png 'Logo Title Text 1')

![Screenshot](./img/Screenshot%202024-03-04%20at%2017.47.19.png)

### Veckans uppgift

Skapa egen Trello (eller likande) för egen projektplanering
Skapa wireframe/prototyp i Figma
Använda dig av komponenter att bygga upp första sidan, och använd props för dataflödet.
Använda dig av conditional rendering, ex visa information om dataobjektet är tomt

### Veckans teoretiska frågor

Allmänt om ramverket React: Hur/Varför uppkom det? Vad är dess kännetecken?
Vad är JSX?
Vad är en komponent i React?
Vad är props i React?
Vad menas med one-way-dataflow?

### Veckans inlämning

Länken till ditt githubrepo
Ett dokument med svarar på frågorna

## Del 2

https://chasacademy.instructure.com/courses/289/assignments/1595?module_item_id=7977

Individuellt Reactprojekt: Jobchaser del 2
Om Jobchaser
Jobchaser är ett verktyg för YH-studenter att hitta LIA eller jobb på ett effektivt sätt. En enkel skiss visas nedan.

### Nuvarande userstories:

- "Som användare vill jag kunna se en lista av jobb"
- "Som användare ska jag kunna söka bland jobb och se en filtrerad lista"

Denna vecka skriver du även om din applikation så att du gör ett http-förfrågning med fetch eller axios.
Du väljer själv om du omvandlar förra veckans testdata till en JSON-fil eller om du hämtar från ett riktigt API med jobbdata.

### Veckans uppgift

Fortsätta med Trello (eller liknande) för egen projektplanering
Fortsätta skissa wireframe/prototyp i Figma eller liknande
Använda dig av state med useState() där nuvarande state är söktermen som
som användaren skrivit i rutan. Denna sökterm ska även filtrera listan.
Göra http-förfrågning med fetch eller axios mot en JSON-fil av testdatan eller valfritt API.
Använd async/await och useEffect för detta.
Frivilligt: Ännu ett state med useState() om fetchen laddas eller inte (isLoading). Använd dig att en <Loader>-komponent som visas om isLoading är true, annars inte,
Du flyttar över din styling till att använda CSS-moduler.

### Veckans teoretiska frågor

- Vad är state i React?
- Vad är det för skillnad mellan state och props?
- Vad menas med en kontrollerad komponent i React?
- Vad är en callback handler?
- Vad menas med "lifting state up"?
- Vad är syftet med useEffect-hook i React?
- Vad är syftet kring den s.k dependency-arrayen i useEffect?

### Veckans inlämning

- Länken till ditt Githubrepo.
- Länken till den publicerade version på Github Pages.
- Ett dokument med svarar på frågorna.

## Del 3

https://chasacademy.instructure.com/courses/289/assignments/1596?module_item_id=7978

### Nuvarande userstories:

- "Som användare vill jag kunna se en lista av jobb"
- "Som användare ska jag kunna söka bland jobb och se en filtrerad lista"
- "Som användare ska man kunna registrera sig på sidan"
- "Som registrerad användare ska man kunna logga in på sidan"
  Frivilligt: "Som användare ska jag kunna byta mellan dark- och lightmode på sidan"

Denna vecka använder vi React Router https://reactrouter.com/en/main Links to an external site.för att hantera navigation mellan routes:

- /jobs (visar alla jobb på sidan)
- /signup (visar registreringsformulär
- /signin (visar inloggninsformulär)

När användare är inloggad ska han/hon kunna spara och se sparade jobb. Denna funktionalitet behöver inte uppfyllas denna vecka utan det räcker att det står "Registrera dig" eller "Inloggad" i navbar, För att hantera detta state globalt använder vi useContext https://react.dev/reference/react/useContext, Links to an external site.För att hantera formulären använder vi React Hook Form https://react-hook-form.com/Links to an external site. och stylar med Tailwind https://tailwindcss.com/Links to an external site.

### Veckans uppgift

- Fortsätta med Trello (eller liknande) för egen projektplanering
- Fortsätta skissa wireframe/prototyp i Figma eller liknande
- Implementera navigering / routing med React Router 6
- Hantera formulär med validering med React Hook Form
- Göra ett global state för om användaren är inloggad eller inte med useContext
- Styling av nya komponenter med Tailwind CSS
  Frivilligt: Funktionalitet för dark- och light-mode med hjälp av Tailwind och useContext

### Veckans teoretiska frågor

- Vad menas med Reacts ekosystem?
- Nämn några andra viktiga bibliotek i Reacts ekosystem förutom React Router och React Hook Form
- Vad är fördelen med att använda React Hook Form?
- Vad är syftet med useContext? Vilket problem med props löser den?
- Vilka fördelar finns det att använda Tailwind / nackdelar?

### Veckans inlämning

- Länken till ditt Githubrepo
- Länken till den publicerade version på Github Pages / Netlify / annat
- Lägg svaret på frågorna i repots Readme

## Del 4
Nuvarande userstories: 

"Som användare vill jag kunna se en lista av jobb"
"Som användare ska jag kunna söka bland jobb och se en filtrerad lista"
"Som användare ska man kunna registrera sig på sidan"
"Som registrerad användare ska man kunna logga in på sidan"
"Som användare ska jag kunna filtrera på olika kategorier, 
Frivilligt: "Som användare ska jag kunna byta mellan dark- och lightmode på sidan"

LÄNK TILL JOBCHASER VECKA FÖR VECKA https://link.excalidraw.com/l/9THk15pMa6N/7gU3d5sgfNX. (obs! detaljar i senare veckor kan komma att ändras något)


- Denna vecka ska du använda Redux Toolkit för att hantera state uppdatering av filtrering av kategorier och fritextsökning av listan (se ett exempelförslag i bilden). Tidigare globala state som inloggning och ev. dark-mode ska ligga kvar med Context API:et. 
-Du ska också jobba med Typescript så att alla filer i ditt projekt är .tsx eller .ts och inte ger några fel. Antingen uppgraderar du ditt befintliga Vite React JS-projekt till Typescript enligt följande instruktioner https://github.com/chasacademy-sandra-larsson/vite-react-to-typescript. eller skapar ett Vite React TS-projekt och flyttar över komponenterna.

Veckans teoretiska frågor 
- Vad är Redux Toolkit? 
- När, i vilka situationer vill man använda Redux Toolkit?
- Beskriv typiska områden hur man använder Typescript i React? (ex props, event, useReducer, etc)

Veckans inlämning
- Länken till ditt Githubrepo
- Länken till den publicerade version på Github Pages / Netlify / annat
Lägg svaret på frågorna i repots Readme

# **Resources**

- https://arbetsformedlingen.se/om-webbplatsen/apier-och-oppna-data
- https://arbetsformedlingen.my.site.com/apiportal/s/partner?language=sv&t=1710066176867
  Ansöka om medlemskap i målgrupp.
  API öppen data - Jobtech: Ansökan till målgrupp är avsett för personer tillhörande myndigheter eller organisation med API:er som är interna och stängda utan ansökan om medlemskap. För API:er med öppen data hänvisas till Jobtech.
  Medlem myndighet/organisation: Vänligen välj nedan den målgruppen du vill ansöka om medlemskap till. Säkerhetsställ att e-postadress är kopplad till den myndighet/organisation du företräder (ej privat). När du blivit tillagd som medlem kommer du att få en bekräftelse via din e-post/användarkonto på Samverkansportalen.

- https://www.jobtechdev.se/sv
- https://www.jobtechdev.se/sv/components/jobsearch
- Dokumentaion: https://gitlab.com/arbetsformedlingen/job-ads/jobsearch-apis/-/blob/main/docs/- GettingStartedJobSearchSE.md
- Authentication hanteras med Firebase https://console.firebase.google.com/u/0/
