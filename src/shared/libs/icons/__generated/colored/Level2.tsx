import * as React from 'react';
import {type SVGAttributes} from 'react';

export const Level2Icon = React.memo(
	({
		size = 24,
		color = '#4E5361',
		...props
	}: SVGAttributes<SVGElement> & {
		size?: number;
	}) => (
		<svg width={size} height={size} fill='none' {...props}>
			<path
				d='M90.263 62.444c1.591-.854 3.586-4.54 3.586-4.54s-4.174-.37-5.765.487c-.156.085-.283.212-.43.313a43.16 43.16 0 00.419-4.526c.997.269 2.435-.183 3.477-1.107C92.905 51.873 94 47.83 94 47.83s-4.144.602-5.5 1.8c-.168.148-.283.334-.43.502a42.044 42.044 0 00-.561-4.681c1.021.005 2.29-.765 3.09-1.884 1.045-1.473 1.193-5.659 1.193-5.659s-3.902 1.524-4.947 2.997c-.11.153-.169.33-.26.496a39.421 39.421 0 00-1.193-3.549c1.022-.168 2.146-1.169 2.71-2.44.744-1.648.083-5.784.083-5.784s-3.537 2.25-4.275 3.897c-.085.186-.115.387-.174.581a41.19 41.19 0 00-2.069-3.616c.927-.386 1.81-1.514 2.155-2.792.478-1.745-.818-5.724-.818-5.724s-3.14 2.772-3.616 4.517c-.062.221-.062.451-.088.679a41.928 41.928 0 00-3.106-3.522c.841-.57 1.47-1.904 1.52-3.256.065-1.804-2.101-5.387-2.101-5.387s-2.427 3.418-2.498 5.222c-.005.206 0 .416.024.62a42.091 42.091 0 00-2.807-2.14c-.263-.892-.977-1.84-1.96-2.433-1.544-.93-5.73-.77-5.73-.77s1.807 3.775 3.356 4.708a4.89 4.89 0 002.19.667 37.99 37.99 0 012.17 1.573c-1.883.201-4.98 2.067-4.98 2.067s3.413 2.423 5.22 2.491c1.384.05 2.783-.505 3.388-1.334a40.059 40.059 0 012.131 2.34c-1.9-.188-5.242.892-5.242.892s2.769 3.138 4.516 3.613c1.361.37 2.864.124 3.628-.581a35.915 35.915 0 011.547 2.624c-1.8-.549-5.45.024-5.45.024s2.247 3.533 3.894 4.271c1.228.552 2.686.579 3.57.086.297.77.566 1.555.814 2.35-1.644-.907-5.387-1.051-5.387-1.051s1.529 3.899 3.002 4.944c1.11.788 2.556 1.1 3.524.767.183 1.048.325 2.111.428 3.188-1.464-1.213-4.915-2.155-4.915-2.155s.606 4.145 1.807 5.494c.889 1.004 2.202 1.627 3.215 1.54a39.44 39.44 0 01-.23 3.198c-1.063-1.544-4.366-3.348-4.366-3.348s-.37 4.174.49 5.762c.687 1.281 1.954 2.203 3.013 2.22a38.13 38.13 0 01-.782 2.772c-.756-1.677-4.03-3.994-4.03-3.994s-.852 4.103-.182 5.78c.484 1.237 1.5 2.267 2.468 2.536a37.63 37.63 0 01-1.252 2.456c-.428-1.783-3.218-4.67-3.218-4.67s-1.603 3.87-1.263 5.644c.242 1.293 1.03 2.48 1.919 2.946a38.146 38.146 0 01-1.804 2.279c-.03-1.822-2.267-5.273-2.267-5.273s-2.317 3.49-2.329 5.29c-.006 1.34.55 2.68 1.355 3.295a41.017 41.017 0 01-2.152 1.839c.003-.036.015-.062.018-.098.215-1.792-1.642-5.55-1.642-5.55s-2.703 3.195-2.922 4.983c-.156 1.234.195 2.492.83 3.23a37.167 37.167 0 01-2.808 1.561 4.98 4.98 0 00.236-.8c.346-1.774-1.24-5.65-1.24-5.65s-2.928 2.997-3.27 4.77c-.24 1.217.024 2.498.602 3.28-1.685.635-3.436 1.125-5.219 1.53-1.048-3.454-4.224-5.987-8.017-5.987-3.796 0-6.97 2.527-8.017 5.986-1.783-.398-3.534-.894-5.22-1.529.58-.785.842-2.063.603-3.28-.343-1.776-3.27-4.77-3.27-4.77s-1.589 3.876-1.24 5.65a4.9 4.9 0 00.236.8 36.61 36.61 0 01-2.808-1.561c.629-.738.983-1.996.83-3.23-.219-1.788-2.926-4.982-2.926-4.982s-1.853 3.752-1.638 5.55c.003.035.015.061.018.097a38.596 38.596 0 01-2.152-1.84c.803-.613 1.36-1.956 1.352-3.294-.009-1.806-2.33-5.29-2.33-5.29s-2.234 3.451-2.263 5.273a40.417 40.417 0 01-1.804-2.28c.889-.466 1.674-1.652 1.919-2.945.342-1.78-1.264-5.644-1.264-5.644s-2.79 2.89-3.217 4.67c-.449-.8-.856-1.621-1.249-2.456.971-.272 1.98-1.3 2.468-2.536.667-1.683-.186-5.78-.186-5.78s-3.277 2.314-4.032 3.994a37.495 37.495 0 01-.78-2.772c1.057-.017 2.324-.939 3.011-2.22.86-1.59.493-5.762.493-5.762s-3.309 1.804-4.368 3.348a39.244 39.244 0 01-.23-3.197c1.009.086 2.325-.54 3.214-1.541 1.201-1.349 1.806-5.494 1.806-5.494s-3.447.942-4.914 2.155a37.79 37.79 0 01.428-3.188c.965.334 2.414.021 3.524-.767 1.473-1.042 3-4.944 3-4.944s-3.744.144-5.388 1.05c.248-.797.52-1.579.818-2.35.885.494 2.344.464 3.566-.085 1.65-.735 3.896-4.271 3.896-4.271s-3.66-.564-5.464-.015a37.6 37.6 0 011.55-2.624c.767.702 2.27.95 3.63.581 1.745-.475 4.517-3.613 4.517-3.613s-3.347-1.077-5.245-.889a39.008 39.008 0 012.128-2.34c.608.83 2.01 1.381 3.392 1.334 1.803-.065 5.219-2.492 5.219-2.492s-3.097-1.865-4.98-2.066a37.962 37.962 0 012.172-1.57 4.902 4.902 0 002.19-.667c1.547-.933 3.354-4.709 3.354-4.709s-4.183-.162-5.73.768c-.983.59-1.697 1.54-1.963 2.43a42.276 42.276 0 00-2.804 2.14 5.44 5.44 0 00.02-.62c-.067-1.807-2.494-5.222-2.494-5.222s-2.172 3.58-2.104 5.387c.05 1.352.676 2.686 1.517 3.253a42.917 42.917 0 00-3.103 3.524c-.029-.227-.029-.457-.088-.679-.475-1.744-3.616-4.516-3.616-4.516s-1.299 3.982-.82 5.724c.348 1.28 1.23 2.409 2.16 2.795a40.325 40.325 0 00-2.07 3.616c-.058-.194-.088-.395-.17-.581-.741-1.647-4.278-3.897-4.278-3.897s-.661 4.133.083 5.78c.57 1.27 1.694 2.273 2.71 2.441a40.957 40.957 0 00-1.193 3.546c-.091-.166-.15-.343-.26-.496-1.045-1.476-4.947-3-4.947-3s.148 4.186 1.196 5.66c.797 1.115 2.069 1.888 3.09 1.883a40.714 40.714 0 00-.564 4.681c-.144-.168-.265-.354-.43-.502C4.143 48.431 0 47.835 0 47.835s1.092 4.044 2.447 5.242c1.042.924 2.48 1.376 3.477 1.107.06 1.532.198 3.038.42 4.526-.148-.1-.272-.228-.431-.313-1.591-.86-5.765-.487-5.765-.487s1.995 3.684 3.586 4.543c1.14.61 2.512.737 3.43.368a40.68 40.68 0 001.025 3.425c-.133-.068-.245-.166-.384-.219-1.68-.664-5.78.195-5.78.195s2.412 3.421 4.094 4.083c1.305.519 2.822.44 3.664-.166a42.684 42.684 0 001.738 3.318c-.133-.038-.268-.08-.404-.103-1.774-.34-5.644 1.263-5.644 1.263s3.008 2.917 4.785 3.256c1.396.266 2.884-.106 3.586-.877a42.587 42.587 0 002.41 2.997c-.116-.006-.228-.024-.343-.021-1.807.012-5.293 2.335-5.293 2.335s3.513 2.276 5.32 2.27c1.393-.012 2.777-.635 3.34-1.5A41.6 41.6 0 0021.8 85.23c-.077.006-.154-.011-.23-.003-1.795.222-4.986 2.931-4.986 2.931s3.752 1.857 5.543 1.636c1.485-.183 2.873-1.063 3.23-2.078.696.43 1.381.888 2.104 1.28-1.774.739-4.17 3.08-4.17 3.08s3.872 1.573 5.643 1.222c1.432-.278 2.722-1.216 3.05-2.22a41.161 41.161 0 006.656 1.995c.31 4.366 3.914 7.82 8.357 7.82s8.047-3.454 8.357-7.82a41.282 41.282 0 006.66-1.995c.321 1.004 1.614 1.942 3.046 2.22 1.774.351 5.65-1.234 5.65-1.234s-2.397-2.341-4.171-3.079c.723-.395 1.408-.841 2.104-1.281.357 1.012 1.748 1.898 3.23 2.078 1.791.221 5.546-1.635 5.546-1.635s-3.194-2.71-4.986-2.934c-.073-.006-.153.011-.23.005a41.632 41.632 0 002.521-2.151c.564.864 1.948 1.487 3.345 1.5 1.803.01 5.319-2.27 5.319-2.27s-3.486-2.324-5.293-2.336c-.115 0-.227.015-.342.02.85-.956 1.65-1.96 2.409-2.995.702.77 2.19 1.145 3.586.876 1.777-.336 4.785-3.256 4.785-3.256s-3.87-1.603-5.644-1.266a3.893 3.893 0 00-.404.106 40.645 40.645 0 001.738-3.318c.839.606 2.356.682 3.664.166 1.682-.662 4.094-4.086 4.094-4.086s-4.1-.856-5.78-.192c-.139.06-.25.151-.384.219a41.65 41.65 0 001.025-3.424c.909.372 2.279.245 3.42-.366z'
				fill='url(#level2_svg__a)'
			/>
			<g filter='url(#level2_svg__b)'>
				<path
					d='M69.8 13.554c-6.568-2.277-15.056-7.02-19.597-9.685a6.332 6.332 0 00-6.405 0c-4.54 2.665-13.03 7.408-19.598 9.685-2.916 1.01-6.748 1.984-9.835 2.702-3.027.704-5.11 3.537-4.779 6.628L14.5 68.632a6 6 0 002.874 4.502L43.8 89.02a6 6 0 006.341-.099l24.593-15.849a6 6 0 002.686-4.169l6.749-45.829c.466-3.165-1.632-6.14-4.747-6.868-3.048-.713-6.772-1.665-9.62-2.652z'
					fill='url(#level2_svg__c)'
				/>
			</g>
			<path
				d='M68.6 15.032c-6.13-2.143-14.027-6.57-18.373-9.135a6.364 6.364 0 00-6.454 0c-4.346 2.564-12.242 6.992-18.373 9.135-2.68.936-6.175 1.84-9.051 2.518-3.02.713-5.097 3.54-4.769 6.625l4.616 43.336a6 6 0 002.857 4.496L43.78 86.993a6 6 0 006.378-.1l23.008-14.948a6 6 0 002.669-4.164l6.342-43.417c.461-3.159-1.632-6.127-4.738-6.864-2.834-.673-6.225-1.555-8.839-2.468z'
				fill='url(#level2_svg__d)'
			/>
			<path
				d='M68 16.51c-5.94-2.035-13.587-6.234-17.821-8.68a6.363 6.363 0 00-6.358 0c-4.234 2.446-11.88 6.645-17.821 8.68-2.548.873-5.855 1.715-8.615 2.357-3.036.706-5.126 3.546-4.79 6.644l4.44 40.846a6 6 0 002.9 4.51L43.827 85.06a6 6 0 006.287-.098l22.23-14.156a6 6 0 002.711-4.176l6.1-40.926c.472-3.173-1.635-6.157-4.759-6.888-2.714-.635-5.915-1.456-8.396-2.306z'
				fill='url(#level2_svg__e)'
			/>
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M44.012 84.747l2.368-3.986a1 1 0 001.048-.016l22.23-14.156a1 1 0 00.452-.696l4.945.737a6 6 0 01-2.711 4.176l-22.23 14.156a6 6 0 01-6.287.098L19.935 70.867a6 6 0 01-2.9-4.51l-4.44-40.846c-.336-3.098 1.754-5.938 4.79-6.644 2.76-.642 6.067-1.484 8.615-2.357 5.941-2.035 13.587-6.234 17.822-8.68a6.363 6.363 0 016.357 0c4.234 2.446 11.88 6.645 17.821 8.68 2.481.85 5.682 1.67 8.396 2.306 3.124.731 5.231 3.715 4.759 6.888l-6.1 40.926-4.945-.737 6.1-40.926c.074-.5-.264-1.121-.953-1.282-2.752-.644-6.151-1.51-8.877-2.445-6.453-2.21-14.478-6.64-18.703-9.082a1.364 1.364 0 00-1.353 0C42.099 14.6 34.074 19.03 27.62 21.24c-2.797.959-6.307 1.847-9.102 2.497-.665.155-1.005.744-.952 1.234l4.439 40.846a1 1 0 00.483.751L46.38 80.761l-2.368 3.986z'
				fill='url(#level2_svg__f)'
			/>
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M66.704 20.294c-6.35-2.175-14.3-6.559-18.527-9.002a2.364 2.364 0 00-2.354 0c-4.227 2.443-12.176 6.827-18.527 9.002-2.747.941-6.217 1.82-9.005 2.47-1.139.264-1.829 1.303-1.72 2.315l4.44 40.845a2 2 0 00.966 1.504L45.87 81.62a2 2 0 002.095-.033l22.23-14.156a2 2 0 00.904-1.392l6.1-40.925c.153-1.035-.538-2.129-1.714-2.404-2.744-.642-6.104-1.5-8.78-2.417zM50.18 7.83c4.234 2.447 11.88 6.646 17.821 8.681 2.481.85 5.682 1.67 8.396 2.306 3.124.731 5.231 3.715 4.759 6.888l-6.1 40.926a6 6 0 01-2.711 4.176l-22.23 14.156a6 6 0 01-6.287.098L19.935 70.867a6 6 0 01-2.9-4.51l-4.44-40.846c-.336-3.098 1.754-5.938 4.79-6.644 2.76-.642 6.067-1.484 8.615-2.357 5.941-2.035 13.587-6.234 17.822-8.68a6.363 6.363 0 016.357 0z'
				fill='url(#level2_svg__g)'
			/>
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M67.352 18.402c-6.146-2.105-13.943-6.396-18.174-8.841a4.363 4.363 0 00-4.356 0c-4.23 2.445-12.028 6.736-18.174 8.841-2.648.907-6.036 1.768-8.81 2.413-2.087.485-3.478 2.425-3.254 4.48l4.438 40.846a4 4 0 001.934 3.006L44.848 83.34a4 4 0 004.191-.065L71.27 69.12a4 4 0 001.808-2.784l6.1-40.926c.313-2.103-1.086-4.142-3.236-4.646-2.73-.638-6.01-1.478-8.589-2.36zM50.18 7.83c4.234 2.447 11.88 6.646 17.821 8.681 2.481.85 5.682 1.67 8.396 2.306 3.124.731 5.231 3.715 4.759 6.888l-6.1 40.926a6 6 0 01-2.711 4.176l-22.23 14.156a6 6 0 01-6.287.098L19.935 70.867a6 6 0 01-2.9-4.51l-4.44-40.846c-.336-3.098 1.754-5.938 4.79-6.644 2.76-.642 6.067-1.484 8.615-2.357 5.941-2.035 13.587-6.234 17.822-8.68a6.363 6.363 0 016.357 0z'
				fill='url(#level2_svg__h)'
			/>
			<path
				d='M54.298 53.117v3.828H38.957V53.9l7.83-7.395c.831-.793 1.392-1.47 1.682-2.03.29-.58.435-1.15.435-1.711 0-.812-.28-1.43-.841-1.856-.541-.445-1.344-.667-2.407-.667-.89 0-1.692.174-2.407.522a4.493 4.493 0 00-1.798 1.508l-3.422-2.204c.793-1.18 1.885-2.098 3.277-2.755 1.392-.677 2.987-1.015 4.785-1.015 1.508 0 2.823.251 3.944.754 1.14.483 2.02 1.18 2.639 2.088.638.89.957 1.943.957 3.16a7.078 7.078 0 01-.696 3.104c-.464.967-1.363 2.069-2.697 3.306l-4.669 4.408h8.729z'
				fill='url(#level2_svg__i)'
			/>
			<defs>
				<linearGradient
					id='level2_svg__c'
					x1={47}
					y1={1.945}
					x2={47}
					y2={60.137}
					gradientUnits='userSpaceOnUse'
				>
					<stop stopColor='#947060' />
					<stop offset={1} stopColor='#403834' />
				</linearGradient>
				<linearGradient
					id='level2_svg__d'
					x1={47}
					y1={-29.555}
					x2={47}
					y2={59.522}
					gradientUnits='userSpaceOnUse'
				>
					<stop stopColor='#9D786C' />
					<stop offset={1} stopColor='#453631' />
				</linearGradient>
				<linearGradient
					id='level2_svg__f'
					x1={47}
					y1={-16.055}
					x2={47}
					y2={86.945}
					gradientUnits='userSpaceOnUse'
				>
					<stop stopColor='#94765A' />
					<stop offset={1} stopColor='#9B897E' stopOpacity={0.45} />
				</linearGradient>
				<linearGradient
					id='level2_svg__h'
					x1={47}
					y1={90.945}
					x2={47}
					y2={7.945}
					gradientUnits='userSpaceOnUse'
				>
					<stop stopColor='#886863' />
					<stop offset={0.417} stopColor='#5A413C' />
					<stop offset={1} stopColor='#D9A493' />
				</linearGradient>
				<linearGradient
					id='level2_svg__i'
					x1={47}
					y1={36.186}
					x2={47}
					y2={63.945}
					gradientUnits='userSpaceOnUse'
				>
					<stop stopColor='#fff' />
					<stop offset={1} stopColor='#D7D7D7' stopOpacity={0.38} />
				</linearGradient>
				<radialGradient
					id='level2_svg__a'
					cx={0}
					cy={0}
					r={1}
					gradientUnits='userSpaceOnUse'
					gradientTransform='matrix(0 47.4471 -147.491 0 47 53.445)'
				>
					<stop stopColor='#77564F' stopOpacity={0.954} />
					<stop offset={1} stopColor='#342D28' stopOpacity={0.26} />
				</radialGradient>
				<radialGradient
					id='level2_svg__e'
					cx={0}
					cy={0}
					r={1}
					gradientUnits='userSpaceOnUse'
					gradientTransform='matrix(0 45.5 -64.5361 0 47 46.445)'
				>
					<stop stopColor='#956F5F' />
					<stop offset={1} stopColor='#2F2421' />
				</radialGradient>
				<radialGradient
					id='level2_svg__g'
					cx={0}
					cy={0}
					r={1}
					gradientUnits='userSpaceOnUse'
					gradientTransform='matrix(0 43 -101.839 0 47 43.945)'
				>
					<stop stopColor='#D3A398' />
					<stop offset={1} stopColor='#766460' stopOpacity={0.65} />
				</radialGradient>
				<filter
					id='level2_svg__b'
					x={2.552}
					y={0}
					width={88.681}
					height={100.878}
					filterUnits='userSpaceOnUse'
					colorInterpolationFilters='sRGB'
				>
					<feFlood floodOpacity={0} result='BackgroundImageFix' />
					<feColorMatrix
						in='SourceAlpha'
						values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
						result='hardAlpha'
					/>
					<feOffset dy={4} />
					<feGaussianBlur stdDeviation={3.5} />
					<feComposite in2='hardAlpha' operator='out' />
					<feColorMatrix values='0 0 0 0 0.0705882 0 0 0 0 0.0862745 0 0 0 0 0.137255 0 0 0 0.72 0' />
					<feBlend
						in2='BackgroundImageFix'
						result='effect1_dropShadow_44_237'
					/>
					<feBlend
						in='SourceGraphic'
						in2='effect1_dropShadow_44_237'
						result='shape'
					/>
				</filter>
			</defs>
		</svg>
	),
);

Level2Icon.displayName = 'Level2Icon';