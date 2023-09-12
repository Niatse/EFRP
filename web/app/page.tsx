import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";


export default function Home() {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div className="inline-block max-w-lg text-center justify-center">
				<h1 className={title()}>Entre&nbsp;</h1>
				<h1 className={title({ color: "yellow" })}>FronterasRP&nbsp;</h1>
				<br />
				<h1 className={title()}>
					Se quien siempre quisiste ser
				</h1>
				<h2 className={subtitle({ class: "mt-4" })}>
					Uruguay y Argentina en un mismo servidor
				</h2>
			</div>
			
			<div className="flex gap-3">
				<Link
					isExternal
					as={NextLink}
					href={siteConfig.links.docs}
					className={buttonStyles({ color: "primary", radius: "full", variant: "shadow" })}
				>
					Entra al servidor
				</Link>
				
			</div>

			<div className="mt-8">
				<Snippet hideSymbol hideCopyButton variant="flat">
					<span>
						Mafias, drogas, y mucho mas 
					</span>
				</Snippet>
			</div>
		</section>
	);
}
