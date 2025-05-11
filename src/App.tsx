import './App.css';

type Transaction = {
  id: number;
  name: string;
  date: string;
  amount: string;
  type: 'income' | 'outcome';
};

export default function App() {
  const transactions: Transaction[] = [
    { id: 1, name: "Freelance Arbeit", date: "15. maj 2024", amount: "+245,50 €", type: "income" },
    { id: 2, name: "Webshop Refusion", date: "12. maj 2024", amount: "-89,99 €", type: "outcome" },
    { id: 3, name: "Kunde A/S", date: "8. maj 2024", amount: "+1.200,00 €", type: "income" },
    { id: 4, name: "Server Hosting", date: "2. maj 2024", amount: "-59,90 €", type: "outcome" }
  ];

  return (
    <div className="paypal-app">
      <header className="header">
        <div className="title-container">
          <h1>PayPal</h1>
          <p className="subtitle">Erhverv</p>
        </div>
        <div className="notification-icon">🔔</div>
      </header>

      <div className="balance-card">
        <p>Din saldo</p>
        <h2>1.296,61 €</h2>
      </div>

      <div className="button-container">
        <button className="paypal-button button-send">Send</button>
        <button className="paypal-button button-request">Anmod</button>
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