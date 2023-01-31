import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="navbar fixed-bottom text-black footer">
			<div className="container d-flex justify-content-center">
				<span>
					Thiago Machado <b>{new Date().getFullYear()}</b>
				</span>
			</div>
		</footer>
        </div>
    );
}

export default Footer;
