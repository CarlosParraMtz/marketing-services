import '@/styles/globals.css'
import '@/styles/movil.css'
import '@/styles/tablet.css'
import Head from 'next/head';
import { useRouter } from 'next/router';
import { AnimatePresence, motion } from "framer-motion"

export default function App({ Component, pageProps }) {

	const router = useRouter();

	return (
		<>

			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
				<link href="https://fonts.googleapis.com/css2?family=Oswald:wght@500&display=swap" rel="stylesheet" />
				<link rel='stylesheet' href='https://cdn-uicons.flaticon.com/uicons-solid-rounded/css/uicons-solid-rounded.css' />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
				<link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@700&display=swap" rel="stylesheet" />
				<link rel="icon" type="image/x-icon" href="/favicon.ico" />


				<script async src="https://www.googletagmanager.com/gtag/js?id=G-3DT2ZFKH88"></script>
				<script
					dangerouslySetInnerHTML={{
						__html: `
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());
					gtag('config', 'G-3DT2ZFKH88');
					`}}
				/>

			</Head>

			<AnimatePresence mode="wait" >
				<motion.div key={router.route} >
					<Component {...pageProps} />
				</motion.div>
			</AnimatePresence>
		</>
	)
}
