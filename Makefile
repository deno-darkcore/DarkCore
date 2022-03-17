all:
	deno test tests/*/*.ts
test-strings:
	deno test tests/strings/*.ts
test-arrays:
	deno test tests/arrays/*.ts
lint:
	deno lint # Check for linting errors in ALL files(mainly src/ and tests/)
doc:
	echo "Will be done later"