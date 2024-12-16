run:
	npm ci
brain-games:
	node code/bin/brain-games/brain-games.js
brain-even:
	node code/bin/brain-games/brain-even.js
brain-calc:
	node code/bin/brain-games/brain-calc.js
brain-gcd:
	node code/bin/brain-games/brain-gcd.js
brain-progression:
	node code/bin/brain-games/brain-progression.js
brain-prime:
	node code/bin/brain-games/brain-prime.js
publish:
	npm publish --dry-run
make lint:
	npx eslint .