import { type RequestHandler } from '@sveltejs/kit';
import satori, { type Font } from 'satori';
import unoConfig from '$unoconfig';
import manropeRegular from '@/fonts/manrope/Manrope-Regular.ttf';
import manropeMedium from '@/fonts/manrope/Manrope-Medium.ttf';
import manropeSemibold from '@/fonts/manrope/Manrope-SemiBold.ttf';
import manropeBold from '@/fonts/manrope/Manrope-Bold.ttf';
import { read } from '$app/server';
import sharp from 'sharp';

const IMAGE_SIZE = {
	opengraph: {
		width: 1200,
		height: 630,
		upscale: 2
	},
	twitter: {
		width: 1024,
		height: 512,
		upscale: 1.5
	}
};

const manrope = [
	{
		name: 'Manrope',
		weight: 400,
		data: await read(manropeRegular).arrayBuffer(),
		style: 'normal'
	},
	{
		name: 'Manrope',
		weight: 500,
		style: 'normal',
		data: await read(manropeMedium).arrayBuffer()
	},
	{
		name: 'Manrope',
		weight: 600,
		style: 'normal',
		data: await read(manropeSemibold).arrayBuffer()
	},
	{
		name: 'Manrope',
		weight: 700,
		style: 'normal',
		data: await read(manropeBold).arrayBuffer()
	}
];

const runtimeCacheMap = new Map<string, Buffer>();

export const GET: RequestHandler = async ({ url }) => {
	const title = url.searchParams.get('title') || 'Untitled';
	const tags = url.searchParams.getAll('tags') || [];
	const type = (url.searchParams.get('type') || 'opengraph') as keyof typeof IMAGE_SIZE;
	const cacheKey = url.href;

	if (runtimeCacheMap.has(cacheKey)) {
		return new Response(runtimeCacheMap.get(cacheKey), {
			headers: {
				'Content-Type': 'image/jpeg',
				'Cache-Control': 'public, max-age=31536000'
			}
		});
	}

	const svg = await satori(
		{
			type: 'div',
			props: {
				children: [
					{
						type: 'div',
						props: {
							children: tags.map((tag) => ({
								type: 'div',
								props: {
									children: `#${tag}`,
									style: {
										fontSize: `${IMAGE_SIZE[type].upscale * 18}px`,
										fontWeight: 600,
										color: unoConfig.theme.colors.driftwood['800']
									}
								}
							})),
							style: {
								position: 'absolute',
								display: 'flex',
								gap: '8px',
								top: '1.5em',
								opacity: 0.6,
								right: '1em'
							}
						}
					},

					{
						type: 'div',
						props: {
							children: title,
							style: {
								marginTop: 'auto',
								textAlign: 'center',
								fontSize: `${IMAGE_SIZE[type].upscale * 36}px`,
								fontWeight: 700
							}
						}
					},
					{
						type: 'div',
						props: {
							children: '/dev/tokiory',
							style: {
								fontSize: `${IMAGE_SIZE[type].upscale * 24}px`,
								borderRadius: '8px',
								backgroundColor: unoConfig.theme.colors.frangipani['100'],
								padding: '4px 32px',
								marginTop: 'auto',
								fontWeight: 600
							}
						}
					}
				],
				style: {
					fontFamily: 'Manrope',
					display: 'flex',
					flexDirection: 'column',
					padding: '2em 1em',
					justifyContent: 'center',
					alignItems: 'center',
					position: 'absolute',
					left: 0,
					right: 0,
					top: 0,
					bottom: 0,
					color: unoConfig.theme.colors.driftwood['800'],
					backgroundColor: unoConfig.theme.colors.frangipani['50']
				}
			}
		},
		{
			width: IMAGE_SIZE[type].width,
			height: IMAGE_SIZE[type].height,
			fonts: [...(manrope as Font[])]
		}
	);

	const svgBuffer = new Buffer(svg, 'utf-8');
	const jpeg = await sharp(svgBuffer).jpeg({ quality: 85 }).toBuffer();

	runtimeCacheMap.set(cacheKey, jpeg);

	return new Response(jpeg, {
		headers: {
			'Content-Type': 'image/jpeg',
			'Cache-Control': 'public, max-age=31536000'
		}
	});
};
