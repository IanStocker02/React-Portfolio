import React from 'react';

function Footer() {
    return (
        <footer className="footer">
            <p>You can connect with me on:</p>
            <ul>
                <li>
                    <a href="https://github.com/IanStocker02">
                        <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" />
                        GitHub
                    </a>
                </li>
                <li>
                    <a href="https://stackoverflow.com/users/27772373/ian-stocker">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Stack_Overflow_icon.svg/768px-Stack_Overflow_icon.svg.png" alt="Stack Overflow" />
                        Stack Overflow
                    </a>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;