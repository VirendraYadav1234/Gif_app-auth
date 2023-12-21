import Head from 'next/head';
import styles from '../styles/Home.module.css';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

export default function Home() {
	// utils/giphy.js

	const apiKey = 'GlVGYHkr3WSBnllca54iNt0yFbjz7L65';
	const [gif, getGit] = useState([]);
	useEffect(() => {
		const searchGifs = async () => {
			const query = await fetch(
				`http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=GlVGYHkr3WSBnllca54iNt0yFbjz7L65`
			);
			const response = await query.json();
			console.log('data is ', response);
			getGit(response);
		};
		searchGifs();
	}, []);

	return (
		<div className={styles.container}>
			{' '}
			{gif &&
				gif.length &&
				gif.map((user) => {
					return (
						<>
							<img src={user.url} alt="" />
						</>
					);
				})}{' '}
		</div>
	);
}
