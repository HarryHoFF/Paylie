import { useState } from 'react';
import './App.css';

type Transaction = {
  id: number;
  name: string;
  date: string;
  amount: string;
  type: 'income' | 'outcome';
};

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showMitId, setShowMitId] = useState(false);
  const [currentAction, setCurrentAction] = useState<'send' | 'request' | null>(null);

const transactions: Transaction[] = [
  // Mai 2025 
  { id: 243, name: "Deutsche Post AG", date: "04/09/2025", amount: "-18,57 €", type: "outcome" },
  { id: 242, name: "Pia Rother", date: "04/09/2025", amount: "79,60 €", type: "income" },
  { id: 241, name: "Kathrin Hasenau", date: "03/09/2025", amount: "39,70 €", type: "income" },
  { id: 240, name: "Deutsche Post AG", date: "02/09/2025", amount: "-12,38 €", type: "outcome" },
  { id: 239, name: "Gesa Engel", date: "31/08/2025", amount: "26,85 €", type: "income" },
  { id: 238, name: "Marcel Braune", date: "29/08/2025", amount: "32,50 €", type: "income" },
  { id: 237, name: "Minou Cornils", date: "29/08/2025", amount: "32,85 €", type: "income" },
  { id: 236, name: "Deutsche Post AG", date: "29/08/2025", amount: "-18,57 €", type: "outcome" },
  { id: 235, name: "Sabrina Keyser", date: "29/08/2025", amount: "26,85 €", type: "income" },
  { id: 234, name: "Johanna Klapper", date: "28/08/2025", amount: "29,75 €", type: "income" },
  { id: 233, name: "Christel Owschinski", date: "27/08/2025", amount: "61,80 €", type: "income" },
  { id: 232, name: "Deutsche Post AG", date: "26/08/2025", amount: "-43,75 €", type: "outcome" },
  { id: 231, name: "Natalie Kullik", date: "25/08/2025", amount: "75,80 €", type: "income" },
  { id: 230, name: "Wencke Ettrich", date: "25/08/2025", amount: "43,65 €", type: "income" },
  { id: 229, name: "Deutsche Post AG", date: "22/08/2025", amount: "-24,76 €", type: "outcome" },
  { id: 228, name: "Christiane Herrmann", date: "21/08/2025", amount: "64,75 €", type: "income" },
  { id: 227, name: "Christina Fahrenkrug", date: "21/08/2025", amount: "51,80 €", type: "income" },
  { id: 226, name: "Ulrike Piening", date: "20/08/2025", amount: "145,70 €", type: "income" },
  { id: 225, name: "Maike Brockstedt", date: "19/08/2025", amount: "32,85 €", type: "income" },
  { id: 224, name: "Deutsche Post AG", date: "18/08/2025", amount: "-30,95 €", type: "outcome" },
  { id: 223, name: "Jasmin Radmacher", date: "17/08/2025", amount: "26,85 €", type: "income" },
  { id: 222, name: "Nadine Winkler", date: "17/08/2025", amount: "26,85 €", type: "income" },
  { id: 221, name: "Peggy Möller", date: "17/08/2025", amount: "61,75 €", type: "income" },
  { id: 220, name: "Ulrike Piening", date: "17/08/2025", amount: "64,75 €", type: "income" },
  { id: 219, name: "Tanja Milich", date: "16/08/2025", amount: "71,60 €", type: "income" },
  { id: 218, name: "Deutsche Post AG", date: "16/08/2025", amount: "-12,88 €", type: "outcome" },
  { id: 217, name: "Martina Lorenzen", date: "14/08/2025", amount: "26,85 €", type: "income" },
  { id: 216, name: "Deutsche Post AG", date: "14/08/2025", amount: "-37,14 €", type: "outcome" },
  { id: 215, name: "Carmen Lohn", date: "13/08/2025", amount: "57,80 €", type: "income" },
  { id: 214, name: "CMC Tasly Group BV", date: "13/08/2025", amount: "-83,25 €", type: "outcome" },
  { id: 213, name: "Marit Heinzmann", date: "13/08/2025", amount: "61,80 €", type: "income" },
  { id: 212, name: "Franz Ix", date: "12/08/2025", amount: "26,85 €", type: "income" },
  { id: 211, name: "CMC Tasly Group BV", date: "12/08/2025", amount: "-330,14 €", type: "outcome" },
  { id: 210, name: "Birte Hansen", date: "12/08/2025", amount: "61,80 €", type: "income" },
  { id: 209, name: "Annika Zimmek", date: "11/08/2025", amount: "44,70 €", type: "income" },
  { id: 208, name: "Kerstin Laabs", date: "11/08/2025", amount: "75,80 €", type: "income" },
  { id: 207, name: "Josy Hohberg", date: "10/08/2025", amount: "4,50 €", type: "income" },
  { id: 206, name: "Josy Hohberg", date: "10/08/2025", amount: "21,50 €", type: "income" },
  { id: 205, name: "Deutsche Post AG", date: "08/08/2025", amount: "-12,38 €", type: "outcome" },
  { id: 204, name: "Jana Schlechte", date: "08/08/2025", amount: "77,65 €", type: "income" },
  { id: 203, name: "Regina Richter", date: "07/08/2025", amount: "26,85 €", type: "income" },
  { id: 202, name: "Deutsche Post AG", date: "07/08/2025", amount: "-12,38 €", type: "outcome" },
  { id: 201, name: "Isabell Feinauer-Frenz", date: "07/08/2025", amount: "34,85 €", type: "income" },
  { id: 201, name: "Isabelle Meyer", date: "07/08/2025", amount: "50,70 €", type: "income" },
  { id: 200, name: "Deutsche Post AG", date: "04/08/2025", amount: "-6,19 €", type: "outcome" },
  { id: 199, name: "Britta Janssen", date: "04/08/2025", amount: "61,80 €", type: "income" },
  { id: 198, name: "Deutsche Post AG", date: "04/08/2025", amount: "-20,07 €", type: "outcome" },
  { id: 197, name: "Kinga Schobert", date: "04/08/2025", amount: "45,80 €", type: "income" },
  { id: 196, name: "Simone Bliedernich", date: "04/08/2025", amount: "64,75 €", type: "income" },
  { id: 195, name: "Svenja Garbrecht", date: "02/08/2025", amount: "77,50 €", type: "income" },
  { id: 194, name: "Deutsche Post AG", date: "31/07/2025", amount: "-7,69 €", type: "outcome" },
  { id: 193, name: "Deutsche Post AG", date: "31/07/2025", amount: "-6,19 €", type: "outcome" },
  { id: 192, name: "Sandra Valentin", date: "31/07/2025", amount: "41,38 €", type: "income" },
  { id: 191, name: "Deutsche Post AG", date: "29/07/2025", amount: "-6,19 €", type: "outcome" },
  { id: 190, name: "Deutsche Post AG", date: "29/07/2025", amount: "-6,19 €", type: "outcome" },
  { id: 189, name: "Deutsche Post AG", date: "29/07/2025", amount: "-6,19 €", type: "outcome" },
  { id: 188, name: "Deutsche Post AG", date: "29/07/2025", amount: "-6,19 €", type: "outcome" },
  { id: 187, name: "Deutsche Post AG", date: "29/07/2025", amount: "-6,19 €", type: "outcome" },
  { id: 186, name: "Eires Wunderwelt", date: "29/07/2025", amount: "45,80 €", type: "income" },
  { id: 185, name: "Carrie Liepelt", date: "29/07/2025", amount: "26,85 €", type: "income" },
  { id: 184, name: "Manuela Helms", date: "29/07/2025", amount: "26,85 €", type: "income" },
  { id: 183, name: "Virginia Weicherding", date: "29/07/2025", amount: "47,80 €", type: "income" },
  { id: 182, name: "Miriam Mittelstaedt", date: "27/07/2025", amount: "24,57 €", type: "income" },
  { id: 181, name: "Fiete Fölster", date: "27/07/2025", amount: "43,89 €", type: "income" },
  { id: 180, name: "Deutsche Post AG", date: "26/07/2025", amount: "-20,07 €", type: "outcome" },
  { id: 179, name: "Jasmin Radmacher", date: "25/07/2025", amount: "26,85 €", type: "income" },
  { id: 178, name: "Georg Mittag", date: "25/07/2025", amount: "21,85 €", type: "income" },
  { id: 177, name: "Heike Budeweit", date: "25/07/2025", amount: "78,65 €", type: "income" },
  { id: 176, name: "Deutsche Post AG", date: "25/07/2025", amount: "-6,19 €", type: "outcome" },
  { id: 175, name: "Lisa Garhammer", date: "23/07/2025", amount: "-45,80 €", type: "outcome" },
  { id: 174, name: "Lisa Garhammer", date: "21/07/2025", amount: "45,80 €", type: "income" },
  { id: 173, name: "Tamara Berghammer", date: "19/07/2025", amount: "28,75 €", type: "income" },
  { id: 172, name: "Deutsche Post AG", date: "19/07/2025", amount: "-6,19 €", type: "outcome" },
  { id: 171, name: "Eileen Petersen", date: "18/07/2025", amount: "32,85 €", type: "income" },
  { id: 170, name: "Deutsche Post AG", date: "15/07/2025", amount: "-30,95 €", type: "outcome" },
  { id: 169, name: "Frank Dittel", date: "13/07/2025", amount: "30,32 €", type: "income" },
  { id: 168, name: "Rita Thomsen", date: "13/07/2025", amount: "40,20 €", type: "income" },
  { id: 167, name: "Ilka Hofacker", date: "11/06/2025", amount: "-26,85 €", type: "outcome" },
  { id: 166, name: "Sabrina Weinerth", date: "11/07/2025", amount: "26,85 €", type: "income" },
  { id: 165, name: "Deutsche Post AG", date: "10/07/2025", amount: "-12,38 €", type: "outcome" },
  { id: 164, name: "Linda Riemer", date: "09/07/2025", amount: "54,75 €", type: "income" },
  { id: 163, name: "Anneke Kastner", date: "08/07/2025", amount: "75,80 €", type: "income" },
  { id: 162, name: "Deutsche Post AG", date: "06/07/2025", amount: "-6,19 €", type: "outcome" },
  { id: 161, name: "Deutsche Post AG", date: "06/07/2025", amount: "-6,19 €", type: "outcome" },
  { id: 160, name: "Marleen Traeger", date: "06/07/2025", amount: "64,75 €", type: "income" },
  { id: 159, name: "Stefanie Groß", date: "04/07/2025", amount: "26,85 €", type: "income" },
  { id: 158, name: "Deutsche Post AG", date: "02/07/2025", amount: "-6,19 €", type: "outcome" },
  { id: 157, name: "Steve Leukert", date: "30/06/2025", amount: "26,85 €", type: "income" },
  { id: 156, name: "Deutsche Post AG", date: "27/06/2025", amount: "-6,19 €", type: "outcome" },
  { id: 155, name: "Jasmin Fockenbrock", date: "26/06/2025", amount: "39,70 €", type: "income" },
  { id: 154, name: "Deutsche Post AG", date: "26/06/2025", amount: "-7,69 €", type: "outcome" },
  { id: 153, name: "Deutsche Post AG", date: "26/06/2025", amount: "-6,19 €", type: "outcome" },
  { id: 152, name: "Heike Budeweit", date: "25/06/2025", amount: "106,25 €", type: "income" },
  { id: 151, name: "Deutsche Post AG", date: "17/06/2025", amount: "-12,38 €", type: "outcome" },
  { id: 150, name: "Sebastian Seeboth", date: "17/06/2025", amount: "34,25 €", type: "income" }, 
  { id: 149, name: "Jeanette Heim", date: "15/06/2025", amount: "55,65 €", type: "income" }, 
  { id: 148, name: "Deutsche Post AG", date: "13/06/2025", amount: "-6,19 €", type: "outcome" },
  { id: 147, name: "Anja Schnur", date: "13/06/2025", amount: "39,93 €", type: "income" },
  { id: 146, name: "Deutsche Post AG", date: "13/06/2025", amount: "-6,19 €", type: "outcome" },
  { id: 145, name: "Pascale Lange-Borzym", date: "13/06/2025", amount: "77,80 €", type: "income" },
  { id: 144, name: "Deutsche Post AG", date: "12/06/2025", amount: "-6,19 €", type: "outcome" },
  { id: 143, name: "Nora Kowalke", date: "11/06/2025", amount: "23,80 €", type: "income" },
  { id: 142, name: "Deutsche Post AG", date: "11/06/2025", amount: "-18,57 €", type: "outcome" }, 
  { id: 141, name: "Nadine Albers", date: "11/06/2025", amount: "75,80 €", type: "income" },
  { id: 140, name: "Marleen Traeger", date: "10/06/2025", amount: "26,85 €", type: "income" },
  { id: 138, name: "Frank Dittel", date: "08/06/2025", amount: "30,32 €", type: "income" },
  { id: 137, name: "Deutsche Post AG", date: "07/06/2025", amount: "-6,19 €", type: "outcome" }, 
  { id: 136, name: "Sophie Lude", date: "07/06/2025", amount: "29,80 €", type: "income" },
  { id: 135, name: "Deutsche Post AG", date: "06/06/2025", amount: "-7,69 €", type: "outcome" },
  { id: 134, name: "Deutsche Post AG", date: "06/06/2025", amount: "-6,19 €", type: "outcome" },
  { id: 133, name: "Deutsche Post AG", date: "06/06/2025", amount: "-6,19 €", type: "outcome" },
  { id: 132, name: "Tanja Milich", date: "05/06/2025", amount: "63,02 €", type: "income" },
  { id: 131, name: "Heike Budeweit", date: "05/06/2025", amount: "73,55 €", type: "income" },
  { id: 130, name: "Deutsche Post AG", date: "04/06/2025", amount: "-6,19 €", type: "outcome" },
  { id: 129, name: "Melanie Beyermann", date: "04/06/2025", amount: "23,80 €", type: "income" },
  { id: 128, name: "Deutsche Post AG", date: "03/06/2025", amount: "-20,07 €", type: "outcome" },
  { id: 127, name: "Billiger Mietwagen ", date: "02/06/2025", amount: "440,00 €", type: "income" },
  { id: 127, name: "Tordis Staack", date: "01/06/2025", amount: "103,78 €", type: "income" },
  { id: 126, name: "Ilka Hofacker", date: "30/05/2025", amount: "25,59 €", type: "income" },
  { id: 125, name: "Jana Schlechte", date: "30/05/2025", amount: "75,48 €", type: "income" },
  { id: 124, name: "Deutsche Post AG", date: "30/05/2025", amount: "-7,69 €", type: "outcome" },
  { id: 123, name: "Peggy Möller", date: "30/05/2025", amount: "61,18 €", type: "income" },
  { id: 122, name: "Deutsche Post AG", date: "30/05/2025", amount: "-18,57 €", type: "outcome" },
  { id: 121, name: "Fiete Fölster", date: "27/05/2025", amount: "43,89 €", type: "income" },
  { id: 120, name: "Bettina Berger", date: "26/05/2025", amount: "26,85 €", type: "income" },
  { id: 119, name: "Jasmin Radmacher", date: "24/05/2025", amount: "25,49 €", type: "income" },
  { id: 118, name: "Franz Ix", date: "24/05/2025", amount: "91,18 €", type: "income" },
  { id: 117, name: "Iris Alexander", date: "22/05/2025", amount: "-31,20 €", type: "outcome" },
  { id: 116, name: "Nadine Dech", date: "22/05/2025", amount: "76,85 €", type: "income" },
  { id: 115, name: "Carmen Lohn", date: "21/05/2025", amount: "51,80 €", type: "income" },
  { id: 114, name: "Hanna Kokott", date: "21/05/2025", amount: "75,80 €", type: "income" },
  { id: 113, name: "Katharina Hoffmann", date: "20/05/2025", amount: "31,18 €", type: "income" },
  { id: 112, name: "Deutsche Post AG", date: "17/05/2025", amount: "-6,19 €", type: "outcome" },
  { id: 111, name: "Tordis Staack", date: "16/05/2025", amount: "59,35 €", type: "income" },
  { id: 109, name: "Deutsche Post AG", date: "16/05/2025", amount: "-7,69 €", type: "outcome" },
  { id: 110, name: "Carrie Liepelt", date: "12/05/2025", amount: "26,85 €", type: "income" },
  { id: 109, name: "Deutsche Post AG", date: "12/05/2025", amount: "-6,19 €", type: "outcome" },
  { id: 1, name: "Mona Ursula Plieninger", date: "09/05/2025", amount: "46,31 €", type: "income" },
  { id: 3, name: "Deutsche Post AG", date: "09/05/2025", amount: "-6,19 €", type: "outcome" },
  { id: 4, name: "PayPal", date: "09/05/2025", amount: "6,19 €", type: "income" },
  { id: 5, name: "Jana-Madlen Brügmann", date: "08/05/2025", amount: "54,62 €", type: "income" },
  { id: 7, name: "Britta Janßen", date: "08/05/2025", amount: "33,32 €", type: "income" },
  { id: 10, name: "Deutsche Post AG", date: "06/05/2025", amount: "-6,19 €", type: "outcome" },
  { id: 11, name: "PayPal", date: "06/05/2025", amount: "6,19 €", type: "income" },
  { id: 12, name: "Stefanie Ghassemieh", date: "05/05/2025", amount: "34,72 €", type: "income" },
  { id: 13, name: "Anja Breiding", date: "04/05/2025", amount: "57,13 €", type: "income" },
  { id: 15, name: "Fastspring BV", date: "04/05/2025", amount: "-19,06 €", type: "outcome" },
  { id: 16, name: "PayPal", date: "04/05/2025", amount: "19,06 €", type: "income" },
  { id: 17, name: "Gesa Engel", date: "03/05/2025", amount: "25,59 €", type: "income" },
  { id: 19, name: "Deutsche Post AG", date: "01/05/2025", amount: "-7,69 €", type: "outcome" },
  { id: 20, name: "PayPal", date: "01/05/2025", amount: "7,69 €", type: "income" },

  // April 2025
  { id: 21, name: "Heike Schulz", date: "30/04/2025", amount: "53,36 €", type: "income" },
  { id: 22, name: "IONOS SE", date: "29/04/2025", amount: "-31,51 €", type: "outcome" },
  { id: 23, name: "Wencke Ettrich", date: "28/04/2025", amount: "83,26 €", type: "income" },
  { id: 25, name: "Maik Böbel", date: "28/04/2025", amount: "22,16 €", type: "income" },
  { id: 26, name: "Deutsche Post AG", date: "28/04/2025", amount: "-30,95 €", type: "outcome" },
  { id: 27, name: "PayPal", date: "28/04/2025", amount: "30,95 €", type: "income" },
  { id: 29, name: "Carla Siemund", date: "27/04/2025", amount: "38,10 €", type: "income" },
  { id: 30, name: "Jessica Beinlich", date: "26/04/2025", amount: "74,80 €", type: "income" },
  { id: 31, name: "Nicole Vater", date: "26/04/2025", amount: "30,32 €", type: "income" },
  { id: 34, name: "Fiete Fölster", date: "24/04/2025", amount: "43,89 €", type: "income" },
  { id: 36, name: "Deutsche Post AG", date: "24/04/2025", amount: "-7,69 €", type: "outcome" },
  { id: 37, name: "PayPal", date: "24/04/2025", amount: "7,69 €", type: "income" },
  { id: 38, name: "Peggy Möller", date: "22/04/2025", amount: "32,74 €", type: "income" },
  { id: 40, name: "Jasmin Radmacher", date: "22/04/2025", amount: "25,59 €", type: "income" },

  // Weitere Transaktionen...
  { id: 41, name: "Netflix.com", date: "18/04/2025", amount: "-16,37 €", type: "outcome" },
  { id: 42, name: "Billiger Mietwagen", date: "18/04/2025", amount: "-440,00 €", type: "outcome" },
  { id: 43, name: "CMC Tashy Group BV", date: "18/04/2025", amount: "-362,91 €", type: "outcome" },
  { id: 44, name: "Katharina Laugner", date: "18/04/2025", amount: "27,52 €", type: "income" },
  { id: 45, name: "Heike Budewett", date: "18/04/2025", amount: "74,13 €", type: "income" },
  { id: 46, name: "Katja Kabelitz", date: "18/04/2025", amount: "73,60 €", type: "income" },
  { id: 47, name: "Deutsche Post AG", date: "17/04/2025", amount: "-18,57 €", type: "outcome" },
  { id: 48, name: "PayPal", date: "17/04/2025", amount: "18,57 €", type: "income" },
  { id: 49, name: "Deutsche Post AG", date: "17/04/2025", amount: "-12,38 €", type: "outcome" },
  { id: 50, name: "PayPal", date: "17/04/2025", amount: "12,38 €", type: "income" },

  // März 2025 usw. (fortsetzen für alle 9 Seiten)
]
  const handleLogin = () => {
    if (username === 'GoonDocksHaderslev' && password === '132313') {
      setLoggedIn(true);
    } else {
      alert('Forkert brugernavn eller adgangskode');
    }
  };

  const handleActionClick = (action: 'send' | 'request') => {
    setCurrentAction(action);
    setShowMitId(true);
  };

  if (!loggedIn) {
    return (
      <div className="login-container">
        <div className="login-box">
          <h2>PayPal Erhvervs - Login</h2>
          <input
            type="text"
            placeholder="Brugernavn"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Adgangskode"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Log ind</button>
        </div>
      </div>
    );
  }

  if (showMitId) {
    return (
      <div className="mitid-container">
        <div className="mitid-box">
          <h2>Opret forbindelse med MitID</h2>
          <p>For at {currentAction === 'send' ? 'sende' : 'anmode om'} penge, skal du bekræfte med MitID</p>
          <button onClick={() => setShowMitId(false)}>Tilbage</button>
        </div>
      </div>
    );
  }

  return (
    <div className="paypal-app">
      <header className="header">
        <div className="title-container">
          <h1>PayPal</h1>
          <p className="subtitle">Erhvervs</p>
        </div>
        <div className="notification-icon">🔔</div>
      </header>

      <div className="balance-card">
        <p>Din saldo</p>
        <h2>5.534,12 €</h2>
      </div>

      <div className="button-container">
        <button 
          className="paypal-button button-send"
          onClick={() => handleActionClick('send')}
        >
          Send
        </button>
        <button 
          className="paypal-button button-request"
          onClick={() => handleActionClick('request')}
        >
          Anmod
        </button>
      </div>

      <div className="transaction-list">
        <h3>Seneste aktivitet</h3>
        {transactions.map((transaction) => (
          <div key={transaction.id} className="transaction">
            <div className="transaction-icon">
              {transaction.type === "income" ? "⬇️" : "⬆️"}
            </div>
            <div className="transaction-details">
              <p className="transaction-name">{transaction.name}</p>
              <p className="transaction-date">{transaction.date}</p>
            </div>
            <p className={`transaction-amount ${transaction.type}`}>
              {transaction.amount}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
