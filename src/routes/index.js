import React from 'react'
import Helmet from 'react-helmet'

import Section from '../components/Section';
import WideSection from '../components/WideSection';
import Banner from '../components/Banner';
import Mdx from '../components/Mdx';
import IconGrid from '../components/IconGrid';
import LocalizedLink from '../components/LocalizedLink';
/*

STAY UP TO DATE
Get the most up-to-date newsletters delivered straight to your email. Whether you’re looking for general information, hard fork/network upgrades, or live chat the choice is yours.

*/

const Landing = ({ pageContext: { i18n }}) => (
    <>
			<Helmet>
					<title>Yo.</title>
					<meta name="description" content="Landing Page" />
			</Helmet>
			<Banner />
			<Section
				subSection={() => <Mdx code={i18n.mdx.whatIsClassic} />}
			>
				<Mdx code={i18n.mdx.whatIsBlockchain} />
			</Section>
			<WideSection
				className="shaded"
			>
				<IconGrid
					icons={[
						{ icon: 'fas fa-users', text: 'Open and welcoming community' },
						{ icon: 'fas fa-calendar-alt', text: 'Long history of reliable operation' },
						{ icon: 'fas fa-coins', text: 'Your ETC is yours forever' },
					]}
				/>
			</WideSection>
			<Section
				subSection={() => <Mdx code={i18n.mdx.whyClassic} />}
			>
				<Mdx code={i18n.mdx.principles} />
			</Section>
			<WideSection
				title="Get started with Etheruem Classic"
				className="dark"
			>
				Whether you’re looking for wallets, exchanges or even just general information, we have you covered. Check out our resources page to be directed to the right place you’re searching for.
				<br/><br/>
				<LocalizedLink to="/" className="button-link big">
					Get Started
					<i className="fas fa-angle-right"></i>
				</LocalizedLink>
			</WideSection>
			<Section
				subSection={() => <Mdx code={i18n.mdx.stayCurrent} />}
			>
				List of blogs go here
				<br/>
				<LocalizedLink to="/blog" className="button-link">
					All Blog Posts
					<i className="fas fa-angle-right" />
				</LocalizedLink>
			</Section>
    </>
)

export default Landing
