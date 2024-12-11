run:
	npm ci
brain-games:
	node bin/brain-games.js
brain-even:
	node bimaln/brain-even.js
brain-calc:
	node bin/brain-calc.js
publish:
	npm publish --dry-runhb
make lint:
	npx eslint .