import '../styles/policy.css';

function PolicyPage({ onAgree }) {
    return (
        <div className="policy-container">
            <h2>Application Guidelines & Terms</h2>
            <p>Before proceeding, please read and agree to our terms and conditions:</p>
            <ul className="guidelines-list">
                <li>Users must not use abusive or harmful words. Maintain a respectful environment.</li>
                <li>Posting is limited to ensure a quality experience for all users.</li>
                <li>Any violation or misuse of the application is strictly prohibited and may result in account suspension.</li>
                <li>Do not share content that is illegal, defamatory, or infringes on others' rights.</li>
                <li>Spamming and unsolicited advertising are not allowed.</li>
            </ul>
            <p>By clicking "I Agree," you confirm that you will abide by these rules.</p>
            <button onClick={onAgree}>I Agree</button>
        </div>
    );
}

export default PolicyPage;