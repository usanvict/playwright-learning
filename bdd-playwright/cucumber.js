const common = `
    --require .\\bdd-playwright\\setup\\assertions.js
    --require .\\bdd-playwright\\setup\\hooks.js
    --require .\\bdd-playwright\\step-definitions\\**\\*step.js
`;

module.exports = {
	default: `${common} .\\bdd-playwright\\features\\**\\*.feature`,
};
